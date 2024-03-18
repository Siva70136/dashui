import { useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, PieChart, Pie, Cell, LabelList, ResponsiveContainer } from 'recharts'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Revenue from '../../assets/Revenue.png'
import Vector from '../../assets/Vector.png'
import Users from '../../assets/Users.png'
import Like from '../../assets/Like.png'
import profile from '../../assets/profile.png'
import Menu from '../Menu'
import './index.css'

const Home = () => {

    useEffect(() => {
        // getLineChart();
    })

    const getLineChart = async () => {
        try {
            const res = await fetch("https://api.domainsdb.info/v1/info/api?");
            let data = await res.json();
            console.log(data);
        }
        catch {
            console.log("error")
        }
    }
    const data = [
        { name: 'Week1', Guest: 4000, User: 2400, amt: 2400 },
        { name: 'Week2', Guest: 3000, User: 1398, amt: 2210 },
        { name: 'Week3', Guest: 2000, User: 9800, amt: 2290 },
        { name: 'Week4', Guest: 2780, User: 3908, amt: 2000 },
        { name: 'Week5', Guest: 1890, User: 4800, amt: 2181 },
        { name: 'Week6', Guest: 2390, User: 3800, amt: 2500 },
        { name: 'Week7', Guest: 3490, User: 4300, amt: 2100 },
    ];
    const data1 = [
        { name: 'BasicTees', value: 450 },
        { name: 'Custom Short Pants', value: 300 },
        { name: 'Super Hoodies', value: 300 },


    ];
    const colors = ['#98D89E', '#F6DC7D', '#EE8484']

    return (
        <div className="">
            <div className="app-container">
                <Menu className="menu" />
                <div className=''>
                    <div className='navbar'>
                        <div className='nav-head-container'>
                            <p className='nav-head'>Dashboard</p>
                        </div>
                        <div className='navbar-second'>
                            <div className='search-container'>
                                <input type='text' className='search' placeholder='search'/>
                                <CiSearch className='search-icon' />
                            </div>
                            <CiBellOn  className='bell'/>
                            <img src={profile} alt='profile' />
                        </div>
                    </div>
                    <div className="cards-section">
                        
                        <div className="inner-card card1">
                            <img src={Revenue} className="image" alt='image' />
                            <p className="cap">Total Revenues</p>
                            <p className="cash">$2,129,430</p>
                        </div>
                        <div className="inner-card card2">

                            <img src={Vector} className="image" alt='image' />
                            <p className="cap">Transactions</p>
                            <p className="cash">1,520</p>
                        </div>
                        <div className="inner-card card3">
                            <img src={Like} className="image" alt='image' />
                            <p className="cap">Total Likes</p>
                            <p className="cash">9,721</p>
                        </div>
                        <div className="inner-card card4">
                            <img src={Users} className="image" alt='image' />
                            <p className="cap">Total Users</p>
                            <p className="cash">892</p>
                        </div>
                    </div>
                    <div className='linechart'>
                        <LineChart width={800} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Legend verticalAlign="top" align='right' iconType='circle' iconSize={6} />
                            <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                            <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
                        </LineChart>
                    </div>
                    <div className='last-secton'>
                        <div className='piechart'>
                            <div className='pie-top-section'>
                                <p className='pie-head'>Top products</p>
                                <div className='date'>
                                    <p className='date-cap'>May - June 2021</p>
                                    <IoIosArrowDown className='down' />
                                </div>
                            </div>
                            <PieChart width={400} height={200}>
                                <Legend layout="vertical" verticalAlign="middle" align="right" iconType='circle' />
                                <Pie
                                    data={data1}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    startAngle={100}
                                    endAngle={460}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))}
                                </Pie>
                            </PieChart>

                        </div>
                        <div className='piechart'>
                            <div className='pie-top-section'>
                                <p className='pie-head'>Today’s schedule</p>
                                <div className='date'>
                                    <p className='date-cap'>See all</p>
                                    <IoIosArrowForward className='down' />
                                </div>
                            </div>
                            <div className='box2'>
                                <div>
                                    <p className='vl'></p>
                                </div>
                                <div>
                                    <p className='schedule-head'>Meeting with suppliers from Kuta Bali</p>
                                    <p className='schedule-cap'>14.00-15.00</p>
                                    <p className='schedule-cap'>at Sunset Road, Kuta, Bali </p>
                                </div>
                            </div>
                            <div className='box2'>
                                <div>
                                    <p className='vl1'></p>
                                </div>
                                <div>
                                    <p className='schedule-head'>Check operation at Giga Factory 1</p>
                                    <p className='schedule-cap'>18.00-20.00</p>
                                    <p className='schedule-cap'>at Central Jakarta  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;