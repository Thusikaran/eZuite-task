import React from 'react'
import { sidebarIcons } from '../Content/temporyData'
import { CgList } from "react-icons/cg";


const Sidebar = () => {
  return (
    <div className='home-body-sidebar'>
          
      {sidebarIcons.map((data,index)=>(
        <div key={index} className='icontag'>
            <data.icon className='icon'/>
            <p className='name'>{data.name}</p>
        </div>
      ))}
      <div className='icontag1'>
         <CgList style={{fontSize:'1.3rem',marginTop:"1vh"}}/>
      </div>
         
    </div>
  )
}

export default Sidebar