import React from 'react'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import img from '../assets/img/logo.png'
import { MdAdminPanelSettings, MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegBell, FaRegStar, FaStar } from 'react-icons/fa';
import { CiMedicalCase } from 'react-icons/ci';

const Header = () => {
  return (
    <div className='home-header'>

        <div>
           <IoHomeOutline className=' ms-3 me-4 fs-4' />
           <img style={{opacity:"0.7"}} src={img} alt="" />
        </div>

        <div className='d-flex align-items-center'>
            <MdAdminPanelSettings className='fs-4 me-1'/>
            <span> Admin </span>
            <MdKeyboardArrowRight className='fs-4' />
            <span> User </span>
            <FaStar className='fs-5 ms-2 me-2'/>
            <span className='p-2' style={{backgroundColor:"#3376b5",borderRadius:"10px"}}><CiMedicalCase className='fs-4' /></span>
        </div>

        <div className='d-flex'>
            <span>Enhanzer</span>
            <span className='icon-circle1 ms-3 me-3'>L</span>
            <FaRegBell className='fs-4 ms-3 me-3'/>
            <FaRegStar className='fs-4 ms-3 me-3'/>
            <IoSettingsOutline className='fs-4 ms-3 me-4'/>
        </div>
    </div>
  )
}

export default Header