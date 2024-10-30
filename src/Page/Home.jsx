import React from 'react'
import Header from '../Components/Header'
import Body from '../Components/Body'
import Sidebar from '../Components/Sidebar'
import Content from '../Components/Content'

const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <div className='home-body'>
            <Sidebar/>
            <Content/>
        </div>
    </div>
  )
}

export default Home