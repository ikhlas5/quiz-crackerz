import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Charts = () => {
   const data=useLoaderData();
//    console.log(data)
   const total=data.data;
   console.log(total);
    return (
        <div>
             <LineChart width={500} height={300} data={total}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r:8}} />
    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
    <Tooltip></Tooltip>
  </LineChart>
        </div>
    );
};

export default Charts;