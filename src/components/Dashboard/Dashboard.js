import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto my-16">
      <div className="h-80">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={charts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            <Line type="monotone" dataKey="revenue" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>

        {/* Area Chart */}
      </div>

      {/* Area chart */}
      <div className="h-80">
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={charts}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#ffc658"
              fillOpacity={1}
              fill="url(#colorRev)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={charts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" minPointSize={5} />
            <Bar dataKey="sell" fill="#82ca9d" minPointSize={10} />
            <Bar dataKey="revenue" fill="#ffc658" minPointSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Tooltip />
            <Pie
              data={charts}
              dataKey="investment"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#8884d8"
            />
            <Pie
              data={charts}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={60}
              fill="#82ca9d"
            />
            <Pie
              data={charts}
              dataKey="revenue"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#ffc658"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
