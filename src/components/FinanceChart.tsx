'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceChart = () => {

    const data = [
        {
            name: 'Jan',
            income: 4000,
            expense: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            income: 3000,
            expense: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            income: 2000,
            expense: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            income: 2780,
            expense: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            income: 1890,
            expense: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            income: 2390,
            expense: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            income: 3490,
            expense: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            income: 3090,
            expense: 4000,
            amt: 2100,
        },
        {
            name: 'Sep',
            income: 1490,
            expense: 2300,
            amt: 2100,
        },
        {
            name: 'Oct',
            income: 6490,
            expense: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            income: 3490,
            expense: 2608,
            amt: 2100,
        },
        {
            name: 'Dec',
            income: 2990,
            expense: 3300,
            amt: 2100,
        },
    ];


    return (
        <>
            <ResponsiveContainer width='100%' height='100%' >
                <LineChart
                    width={700}
                    height={700}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" fontSize={8} stroke='black'/>
                    <YAxis fontSize={8} stroke='black' />
                    {/* <Tooltip /> */}
                    <Legend />
                    <Line type="monotone" dataKey="expense" strokeWidth={2} stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="income" strokeWidth={2} stroke="#82ca9d" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default FinanceChart;