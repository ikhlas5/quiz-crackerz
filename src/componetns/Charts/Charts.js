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
            <h1>
                {total.length}
            </h1>
            <div>
                  <LineChart width={500} height={300} data={total}>
                      <Line type="monotone" dataKey="uv"  stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <XAxis dataKey="name"/>
                        <YAxis total={total}/>
                        <Tooltip></Tooltip>
                  </LineChart>
            </div>
            <LineChart
          width={500}
          height={300}
          data={total}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
       
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default Charts;