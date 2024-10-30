import React, { useState } from 'react';
import { tableData } from '../Content/temporyData';
import { SiBabylondotjs } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
import { ImTv } from 'react-icons/im';
import { BsBarChartFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import { CiFilter } from 'react-icons/ci';
import Pagination from './Pagination';

const Content = () => {
    const [link,setLink]=useState("Active")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(tableData.length / itemsPerPage); 

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

  

    const currentData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return tableData.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <div className='home-body-content'>
            <div className='d-flex justify-content-between pt-2 mt-4 mb-3  me-3' style={{height:"6vh"}}>
                <div className='d-flex' >
                    <div className={link ==="Drafts"?'active':'inactive'} onClick={()=>setLink("Drafts")}>
                        <span className='icon-square me-1'><ImTv/></span>
                        <span> Drafts </span>
                        <span className='icon-circle2 ms-1'>40</span>
                    </div>
                    <div className={link ==="Active"?'active':'inactive'} onClick={()=>setLink("Active")}>
                        <span className='icon-square me-1'><BsBarChartFill /></span>
                        <span> Active </span>
                        <span className='icon-circle2 ms-1'>40</span>
                    </div>
                    <div className={link ==="Inactive"?'active':'inactive'} onClick={()=>setLink("Inactive")}>
                        <span className='icon-square me-1'></span>
                        <span> Inactive </span>
                        <span className='icon-circle2 ms-1'>40</span>
                    </div>
                    <div className={link ==="Deleted"?'active':'inactive'} onClick={()=>setLink("Deleted")}>
                        <span className='icon-square me-1'>x</span>
                        <span>Deleted</span>
                        <span className='icon-circle2 ms-1'>40</span>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='me-3 search'>
                        <CiFilter className="search-icon" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages} 
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <HiDotsHorizontal className='fs-4 ms-3' />
                </div>
            </div>

            <div className="home-body-content-table" style={{ height: "76vh" }}>
                <table className="table table-striped" style={{ width: "94vw", marginLeft: "1vw", fontSize: "0.7rem", fontWeight: "400" }}>
                    <thead>
                        <tr>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">First Name</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Last Name</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Address</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Mobile</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Email</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Department</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Designation</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Updated</th>
                            <th style={{ color: "#007bff", fontWeight: "500" }} scope="col">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData().map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.address}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td>{data.department}</td>
                                <td>{data.designation}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="icon-circle">{data.updatedIcon}</span>
                                        <span className="ms-2">{data.updatedDate} <br />{data.updatedTime}</span>
                                    </div>
                                </td>
                                <td>{data.number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between align-items-center p-2" style={{ height: "5vh", backgroundColor: "white", fontSize: "0.8rem", fontWeight: "600" }}>
                <div className="font-weight-bold ms-3"><SiBabylondotjs className='fs-6' /> 5.0</div>
                <div className="text-muted me-3"><MdCopyright className='fs-5' /> 2024 eZuite. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Content;
