import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Chart = ({ info }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const newData = [
            info?.expenses && { name: "Expenses", value: info.expenses },
            info?.income && { name: "Income", value: info.income },
            info?.balance && { name: "Balance", value: info.balance },
        ].filter(item => item);

        setData(newData);
    }, [info]);


    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                    cornerRadius={10}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Chart;
