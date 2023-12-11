import { Button, Card, Form, Input, Select, Space, Tooltip, Typography, notification } from 'antd';
import React, { useEffect, useState } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const PostHotel = () => {
  const [form] = Form.useForm();
  const [ cityCode , setCityCode ] = useState();
  const [ countryCode , setCountryCode ] = useState();
  const [ countries , setCountries ] = useState([]);
  const [ cities , setCities] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const sucessNotification = (placement) => {
    api.success({
      message: `Hotel data created successfully!`,
      description:
        '',
      placement,
    });
  };

  const errorNotification = (placement) => {
    api.error({
      message: `Access Denied!`,
      description:
        'Please login to edit data.',
      placement,
    });
  };

  useEffect(() => {
    axios.get('/countries')
      .then(response => setCountries(response.data.countries))
      .catch((err) => console.log(err))
    axios.get('/cities')
      .then(response => setCities(response.data.cities))
      .catch((err) => console.log(err))
  },[])

  const onFinish = (values) => {
    let data = {
      city_code: values.cities.city_code,
      country_code: values.countries.country_code,
      hotel_code: values.hotel_code,
      hotel_name: values.hotel_name,
    }
  
    axios.post('/hotels', data)
      .then(response => {
        sucessNotification('top')
        form.resetFields();
      })
      .catch((err) => {
        if(err.request.status === 401){
          errorNotification('top')
        }
      })
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <> 
    {contextHolder}
    <div style={{minHeight: "80vh", padding: "1rem 2rem",display: "flex", justifyContent: "center"}}>
      <Card style={{ width: 600, display: "flex",justifyContent: "start",alignItems: "start" }} >
        <Form
          {...layout}
          form={form}
          name="basic"
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
            label="Hotel Code"
            name="hotel_code"
          >
            <Input disabled placeholder="Auto increment in the database Format: EL1"/>
          </Form.Item>

          <Form.Item
            label="Hotel Name"
            name="hotel_name"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>


          <Form.Item label="Hotel Country">
            <Space.Compact>
              <Form.Item
                name={['countries', 'country_code']}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Hotel city is required',
                  },
                ]}
              >
                <Select placeholder="Select Hotel Country" onChange={(value) => setCountryCode(value)}>
                  { countries?.map( ( country,index )=> {
                    return <>
                      <Option key={index} value={country.country_code} >{country.hotel_country}</Option>
                    </>
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name={['countries', 'country_code']}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Country Code is required',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '50%',
                  }}
                  placeholder="country code"
                  value={countryCode}
                  disabled
                />
                <Tooltip title="Country Code">
                  <Typography> <InfoCircleOutlined className='pl-2 flex align-center' /> </Typography>
                </Tooltip>
              </Form.Item>
            </Space.Compact>
          </Form.Item>


          <Form.Item label="Hotel City">
            <Space.Compact>
              <Form.Item
                name={['cities', 'city_code']}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Hotel city is required',
                  },
                ]}
              >
                <Select placeholder="Select Hotel City" onChange={(value) => setCityCode(value)}>
                  {cities?.map( (city,index) => {
                    return ( <>
                      <Option key={index} value={city.city_code} >{city.hotel_city}</Option>
                    </>)
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name={['cities', 'city_code']}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'City Code is required',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '50%',
                  }}
                  placeholder="city code"
                  value={cityCode}
                  disabled
                />
                <Tooltip title="City Code">
                  <Typography> <InfoCircleOutlined className='pl-2 flex align-center' /> </Typography>
                </Tooltip>
              </Form.Item>
            </Space.Compact>
          </Form.Item>



          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space>
              
              <Button type="default" htmlType="submit">
                Submit
              </Button>
              <Button type="default">
                <Link to="/">Cancel</Link>
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
  </div>
  </>
)
};
export default PostHotel;