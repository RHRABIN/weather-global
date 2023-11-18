/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const LIneChart: React.FC<any> = ({ data, forecastLoading }) => {
    const chartData: any[] = [];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    let content = null
    if (forecastLoading) {
        content = <div className='h-full w-full border rounded  mt-2 bg-gray-300 animate-pulse'></div>
    } else {
        data?.list?.splice(0, 5)?.map((i: any, idx: number) => chartData.push({ name: forecastDays[idx], weather: Math.round(i?.main?.temp) }));
        content = <ResponsiveContainer >
            <LineChart
                // width={500}
                // height={300}
                data={chartData}
                margin={{
                    // top: 5,
                    // right: 30,
                    left: -40,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weather" stroke="#00c9a7" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    }

    return (
        <div className=' h-[300px]'>
            {content}
        </div>
    );
};

export default LIneChart;
