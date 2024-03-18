import { LuPieChart } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbArrowBadgeRight } from "react-icons/tb";
import './index.css'

const Menu = () => {

    return (
        <div className="side-menu">
            <div className='menu-section'>
                <p className='head2'>Board</p>
                <div className='option'>
                    <LuPieChart className="icon" />
                    <p className='option-name'>Dashboard</p>
                </div>
                <div className='option'>
                    <TbArrowBadgeRight className="icon" />
                    <p className='option-name'>Transactions</p>
                </div>
                <div className='option'>
                    <AiOutlineSchedule className="icon" />
                    <p className='option-name'>Schedules</p>
                </div>
                <div className='option'>
                    <CgProfile className="icon" />
                    <p className='option-name'>Users</p>
                </div>
                <div className='option'>
                    <IoSettingsOutline className="icon" />
                    <p className='option-name'>Settings</p>
                </div>
            </div>
            <div>
                <p className="option-name last">Help Now</p>
                <p className=" option-name last ">Contact Us</p>
            </div>
        </div>

    )
}

export default Menu;