import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ImSpinner9 } from 'react-icons/im';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const Chart = () => {
    const { data: adminStats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin-stats`);
            return res.data;
        },
    });
    const colors = ["blue", "green", "purple"];
    const chartData = [{quantity: adminStats?.totalInstructors, role: 'Instructors'}, {quantity: adminStats?.totalStudents, role: 'Students'}, {quantity: adminStats?.totalClasses, role: 'Classes'}]

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='w-4/6 mx-auto'>
            {isLoading ? (
                <div className='h-72 flex justify-center items-center gap-4'>
                    <ImSpinner9 size={24} className='text-blue-500 animate-spin duration-300 mt-2' />
                </div>
            ) : (
                <div className='h-[300px] mx-auto mt-10 lg:-mt-5'>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Legend ></Legend>
                        <Tooltip></Tooltip>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="quantity"
                        >
                            {chartData.map((entry, index) => (
                                <Cell name={entry.role} key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default Chart;