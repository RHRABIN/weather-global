import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Jan',
        weather: 10,
    },
    {
        name: 'Fev',
        weather: 20,
    },
    {
        name: 'Mar',
        weather: 32,
    },
    {
        name: 'Apr',
        weather: 22,
    },
    {
        name: 'Mar',
        weather: 40,
    },
];
const LIneChart = () => {
    return (
        <div className=' h-[300px]'>
            <ResponsiveContainer >
                <LineChart
                    // width={500}
                    // height={300}
                    data={data}
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
        </div>
    );
};

export default LIneChart;