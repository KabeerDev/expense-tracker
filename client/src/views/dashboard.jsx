import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getInfo } from "./../services/info";
import Stats from './components/home/stats';
import useSession from './../hooks/useSession';
import Loader from '../components/loader/loader';
import ExpenseBar from './components/home/expenseBar';
import Calander from './components/calander';
import SelectInp from './components/select';
import Error from "./../components/error"
import Detail from './detail';
import { filterRecords } from '../utils/helper';
import Meta from '../components/Meta';

const Dashboard = () => {
    const { LoadingUserData } = useSession();
    const [detail, setDetail] = useState(false)
    const date = Date()
    const [value, setValue] = useState(dayjs(date))
    const [filter, setFilter] = useState('');
    const [loadingInfo, setLoadingInfo] = useState(true);
    const [filteredData, setFilteredData] = useState({
        expenses: "--",
        income: "--",
        balance: "--",
        info: [],
    });
    const [data, setData] = useState();

    useEffect(() => {
        if (!LoadingUserData) {
            getData();
        }
    }, [LoadingUserData]);

    const getData = async () => {
        try {
            setLoadingInfo(true);
            const res = await getInfo();
            if (res) {
                setData(res.info);
            };
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingInfo(false);
        };
    };

    useEffect(() => {
        if (!loadingInfo) {
            setFilteredData(filterRecords(filter, data, value));
        };
    }, [filter, value, loadingInfo])

    if (loadingInfo) return <Loader />;
    if (detail) return <Detail values={detail} setValues={setDetail} />
    return (
        <div className='w-full h-full'>
            <Meta title="Money Manager - Dashboard" pageURL={window.location.href} desc="money manager - an efficient way of maniging budget and categorize them" />
            <Stats data={filteredData} />
            <div className='w-2/3 mx-auto max-h-screen flex flex-col items-end gap-3 mt-3'>
                <div className='w-full flex items-center justify-end gap-5'>
                    <Calander value={value} setValue={setValue} />
                    <SelectInp filter={filter} setFilter={setFilter} />
                </div>
                <div className='w-full expense-container border-t border-t-secondary px-5 max-h-full mb-5 overflow-y-auto'>
                    {filteredData.info.map((item, index) => {
                        return <ExpenseBar onClick={() => setDetail(item)} detail={item} key={index} />
                    })}
                    {filteredData.info.length < 1 && <Error content={"No Record For Current Date!"} style={{ marginTop: "2vw", fontSize: "1.5rem", textAlign: "center" }} />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard