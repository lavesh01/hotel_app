import { Button, Card, Flex, Form, Input, Space, message } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { setUserInfo } from '../reducers/userReducer';

const imgStyle = {
  display: 'block',
  width: 273,
};

const Login = () => {
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'Error Invalid fields!',
      });
    };

    const onFinish = (values) => {
        try {
            axios.post('/user/login',values)
                .then((response) => {
                    dispatch(setUserInfo({ username: response.data.userInfo.username }));
                })
                .catch((err) => {
                  if(err.request.status == 401){
                    error();
                  }
                })
        }catch(err) {
            console.log(err)
        }
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
    if(userInfo.username){
        return <Navigate to="/" />
    }
    
    return (
      <>
        {contextHolder}
        <div style={{display: "flex", justifyContent: "center" ,minHeight: "80vh", width: "auto",margin:"0 5rem"}}>
          
          <Flex justify='center' align='center'>
            <Card
              style={{width: "700px", height: "auto"}}
              bodyStyle={{
                padding: 0,
                overflow: 'hidden',
              }}
            >
              <Flex justify="space-between" align='center'>
                <img
                  alt="avatar"
                  // src="/img/auth-image.jpg"
                  src="https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  style={imgStyle}
                  />
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-between"
                  style={{
                      padding: 32,
                  }}
                  >
                  <Form
                      name="basic"
                      labelCol={{
                      span: 8,
                      }}
                      wrapperCol={{
                      span: 16,
                      }}
                      style={{
                      maxWidth: 600,
                      }}
                      initialValues={{
                          remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      >
                      <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                          {
                          required: true,
                          message: 'Please input your username!',
                      },
                      ]}
                      >
                      <Input />
                      </Form.Item>

                      <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                          {
                          required: true,
                          message: 'Please input your password!',
                          },
                      ]}
                      >
                      <Input.Password />
                      </Form.Item>

                      <Form.Item
                      wrapperCol={{
                          offset: 8,
                          span: 16,
                      }}
                      >
                        <Space>
                          <Button type="default" htmlType="submit">
                              Login
                          </Button>
                          Or <Link to="/signup" style={{color: "blue"}}>signup now!</Link>
                        </Space>
                      </Form.Item>

                  </Form>
              
                </Flex>
              </Flex>
            </Card>
          </Flex>
      
        </div>
      </>
  )
};

export default Login;