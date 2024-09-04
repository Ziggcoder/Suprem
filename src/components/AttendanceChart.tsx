'use client'
import { BarChart, XAxis, YAxis, Tooltip, Bar, Legend, CartesianGrid, ResponsiveContainer } from "recharts"


const AttendanceChart = () => {

    const data = [
        {
            name: "Class 1",
            boys: 822,
            girls: 980,
        },
        {
            name: "Class 2",
            boys: 863,
            girls: 390,
        },
        {
            name: "Class 3",
            boys: 263,
            girls: 480,

        },
        {
            name: "Class 4",
            boys: 667,
            girls: 480,
        },
        {
            name: "Class 4",
            boys: 667,
            girls: 480,
        },
        {
            name: "Class 4",
            boys: 667,
            girls: 480,
        },
    ]

    return (
        <>
            <div className="flex justify-center items-center h-fit" >
                <ResponsiveContainer width={400} height={330} >
                    <BarChart width={300} height={200} data={data}>
                        {/* <CartesianGrid strokeDasharray="33" /> */}
                        <XAxis dataKey="name" fontSize={10} />
                        <YAxis fontSize={10} />
                        {/* <Tooltip /> */}
                        <Legend verticalAlign="bottom" align="right"  height={26} iconSize={10}   wrapperStyle={{ fontSize:'12px', textShadow:'1px black' ,color:'black'}} />
                        <Bar dataKey="boys" fill="#FAE27C" label={{ fill: 'black', fontSize: 10, }} barSize={20} />
                        <Bar dataKey="girls" fill="#C3EBFA" label={{ fill: 'black', fontSize: 10 }} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default AttendanceChart;