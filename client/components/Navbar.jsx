import { Avatar, Button, Col, Flex, Row, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from 'axios';
import { clearUserInfo } from '../src/reducers/userReducer';

const Navbar = () => {
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        try {
        axios.post('/user/logout')
            .then((response) => {
                dispatch(clearUserInfo());
                console.log(response.data)
            })
            .catch((err) => console.log(err))
        }catch(err) {
            console.log(err)
        }
    }
  return (<>
    <Row>
      <Col span={24}>
        <Flex justify='space-between' align='center'>
          <div style={{}}>
            <Link to="/"> 
              <p style={{
                borderRadius: "0.5rem",
                border: "2px solid #4096ff",
                borderBottomWidth: "4px",
                borderRightWidth: "4px",
                padding: "0.5rem 1rem",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}> 
                Hotel App 
              </p> 
            </Link>
          </div>
          <Flex>
            <Space>
            <Avatar icon={<UserOutlined />} />
            { userInfo?.username ? (
                <div>
                  {userInfo.username}
                </div>
              ) : (
                <div>
                  Guest
                </div>
              )
            } 
            
            { userInfo.username ? <>
                <Button type='default' size={"large"} onClick={handleLogout}>Logout</Button>
              </> : <>
                <Link to='/login'>
                  <Button type='default' size={"large"} > Login </Button>
                </Link>
              </>
            }
            </Space>
          </Flex>
        </Flex>
      </Col>
    </Row>
  </>)
};

export default Navbar;
