import React from "react";
import { icon } from "../utils/helper";
import { uppercaseFirst } from "../utils/helper";
import { del } from "../services/info";
import usePage from "./../hooks/usePage";
import Meta from "../components/Meta";

const Detail = ({ values, setValues }) => {
    const { setPath } = usePage();
    const dele = async (id, e) => {
        await del(id);
        e.target.setAttribute('disabled', true);
        window.location.reload();
    };

    return (
        <div className="w-full h-screen bg-white show">
            <Meta title={`${values.type} details`} pageURL={window.location.href} desc="money manager - an efficient way of maniging budget and categorize them" />
            <div
                className="text-lg font-semibold cursor-pointer px-4 py-3 hover:text-gray active:text-black"
                onClick={() => setValues(false)}
            >
                Close
            </div>
            <div className="w-2/4 flex flex-col gap-10 mx-auto">
                <div className="w-24 h-24 mx-auto rounded-circle bg-gray flex justify-center items-center">
                    <img src={icon(values?.category)} alt={values?.category} width={50} />
                </div>
                <div className="flex justify-center gap-36">
                    <div className="flex flex-col items-start justify-center gap-8">
                        <div className="text-lg"><span className="font-semibold text-2xl me-3">Type:</span> {uppercaseFirst(values?.type)}</div>
                        <div className="text-lg"><span className="font-semibold text-2xl me-3">Amount:</span> {values?.amount}</div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8">
                        <div className="text-lg"><span className="font-semibold text-2xl me-3">Category:</span> {uppercaseFirst(values?.category)}</div>
                        <div className="text-lg"><span className="font-semibold text-2xl me-3">Date:</span> {values?.date}</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-lg"><span className="font-semibold text-2xl me-3">Note:</span> {values?.note ? values?.note : "' '"}</div>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <button onClick={() => setPath(`/update/${values?._id}`)} className="bg-primary text-white py-2 px-7 rounded-lg text-lg hover:bg-opacity-70">Edit</button>
                    <button onClick={(e) => dele(values?._id, e)} className="bg-danger text-white py-2 px-7 rounded-lg text-lg hover:bg-opacity-70" disabled={false}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default Detail;