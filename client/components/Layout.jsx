import { Col, Row } from 'antd';
import { Link, Outlet } from "react-router-dom";

import { HeartTwoTone } from '@ant-design/icons';
import Navbar from './Navbar';
import React from 'react';

const Layout = () => {

  return (
  <>
    <div style={{minHeight: "100vh", width: "auto",margin:"0 5rem"}}>  

      <div style={{minHeight: "10vh", padding: "1rem"}}>
        <Navbar />
      </div>

      <Outlet />

      <div style={{padding: "0 1rem"}}>
        <Row className='bg-black text-white'>
          <Col span={12} justify="flex-start" align="start">© 2023 Hotels App</Col>
          <Col span={12} justify="flex-end" align="end">Made with <HeartTwoTone twoToneColor="#eb2f96" /> by <Link to="https://github.com/lavesh01">Lavesh</Link></Col>
        </Row>
      </div>
    
    </div>
  </>
  )
};

export default Layout;