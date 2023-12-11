import { Button, Space, Table, notification } from "antd"
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from 'axios';

const Home = () => {
    const columns = [
        {
          title: 'Hotel Code',
          dataIndex: 'hotel_code',
          key: 'hotel_code',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Hotel Name',
          dataIndex: 'hotel_name',
          key: 'hotel_name',
        },
        {
          title: 'Hotel City',
          dataIndex: 'hotel_city',
          key: 'hotel_city',
        },
        {
          title: 'City Code',
          dataIndex: 'city_code',
          key: 'city_code',
        },
        {
          title: 'Hotel Country',
          dataIndex: 'hotel_country',
          key: 'hotel_country',
        },
        {
          title: 'Country Code',
          dataIndex: 'country_code',
          key: 'country_code',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={() => handleDelete(record.id)}>Delete</Button>
            </Space>
          ),
        },
    ];
    
    const handleDelete = (id) => {
      axios.delete(`/hotels/${id}`)
          .then((response) => {
              fetchHotels();
          })
          .catch(err => {
              if(err.request.status === 401){
                  openNotification('top');
              }
          })
    }
    
    const [ hotels , setHotels ] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
        api.error({
        message: `Access Denied!`,
        description:
            'Please login to edit data.',
        placement,
        });
    };

    const fetchHotels = () => {
        axios.get('/hotels')
        .then(response => {
            setHotels(response.data.hotels)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchHotels()
    },[])

    return <>
        {contextHolder}

        <div style={{minHeight: "80vh", padding: "1rem 2rem"}}>
            
            <div style={{display:"flex",justifyContent: "center",paddingBottom:"1rem"}}>
                <Link to="/hotel/edit">
                    <Button type="default" shape="round" icon={<PlusCircleOutlined />} size={"large"} >
                        Add Hotel
                    </Button>
                </Link>
            </div>

            <div style={{padding: "0 3rem"}}>
                <Table 
                    columns={columns} 
                    dataSource={hotels}  
                    pagination={{ pageSize: 5}}
                    scroll={{ y: 280 }}
                />
            </div>
        </div>
    </>;
};

export default Home;
