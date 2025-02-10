import React from 'react'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{
    name: string;
    stars: number;
    forks: number;
  }>;
}

export const SimpleChart = ({ data }: ChartProps) => (
  <div style={{ height: 300, width: '100%' }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stars" fill="#2563eb" />
        <Bar dataKey="forks" fill="#7c3aed" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);