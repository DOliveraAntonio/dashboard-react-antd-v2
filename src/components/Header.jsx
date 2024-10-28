import React from 'react'
import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/input/Search';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Title } = Typography;

const CustomHeader = () => {
  return (
    <Flex align='center' justify="space-between">
        <Title level={3} type="secondary">
            Welcome back, David
        </Title>
        <Flex align='center' gap="3rem">
            <Search placeholder='Search Dashboard' allowClear />
            <Flex align='center' gap="10px">
                <MessageOutlined className='header-icon' />
                <NotificationOutlined className='header-icon' />
                <Avatar icon={<UserOutlined />} />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CustomHeader