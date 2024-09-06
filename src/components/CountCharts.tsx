'use client'
import Image from "next/image";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    // {
    //     name: "18-24",
    //     uv: 31.47,
    //     pv: 2400,
    //     fill: "#ffffff",
    // },
    {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#FAE27C",
    },
    {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#C3EBFA",
    },
    //   {
    //     name: "35-39",
    //     uv: 8.22,
    //     pv: 9800,
    //     fill: "#82ca9d",
    //   },
    //   {
    //     name: "40-49",
    //     uv: 8.63,
    //     pv: 3908,
    //     fill: "#a4de6c",
    //   },
    //   {
    //     name: "50+",
    //     uv: 2.63,
    //     pv: 4800,
    //     fill: "#d0ed57",
    //   },
    //   {
    //     name: "unknow",
    //     uv: 6.67,
    //     pv: 4800,
    //     fill: "#ffc658",
    //   },
];

const CountCharts = () => {
    return (
        <div className="max-w-3xl w-full h-fit flex-col justify-center items-center pb-2 mt-2 bg-white rounded-lg " >
            <div className="relative flex justify-center items-center">
                <Image src='/maleFemale.png' alt="" width={40} height={40} className="absolute" />
            <ResponsiveContainer width={300} height={300}>
                <RadialBarChart
                    width={300}
                    height={300}
                    innerRadius="50%"
                    outerRadius="90%"
                    data={data}
                    startAngle={0}
                    endAngle={360}
                >
                    <RadialBar label={{ fill: 'none', position: "center" }} background dataKey='uv' />
                    {/* <Legend iconSize={7} width={200} height={200} layout="centric" verticalAlign='bottom' align="center" /> */}
                    {/* <Tooltip /> */}
                </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-4 justify-center h-fit ">
                {data.map((item, index) => (
                    <div key={index} style={{ backgroundColor: item.fill, padding: '5px', color: "black", borderRadius: '5px', fontSize: '0.6 rem' }} >{item.pv}</div>
                )
                )}
            </div>
        </div>
    );
};

export default CountCharts;
