import { CarryOutOutlined, LogoutOutlined, OrderedListOutlined, ProfileOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <>
            <Flex align="center" justify="center">
                <div className="logo">
                    <FaLeaf />
                </div>
            </Flex>
            <Menu mode="inline" defaultSelectedKeys={['1']} className="menu-bar" items={[
                {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'Dashboard'
                },
                {
                    key: '2',
                    icon: <CarryOutOutlined />,
                    label: 'My Orders'
                },
                {
                    key: '3',
                    icon: <OrderedListOutlined />,
                    label: 'ToDo'
                },
                {
                    key: '4',
                    icon: <ProfileOutlined />,
                    label: 'Profile'
                },
                {
                    key: '5',
                    icon: <SettingOutlined />,
                    label: 'Setting'
                },
                {
                    key: '6',
                    icon: <LogoutOutlined />,
                    label: 'Login'
                },
            ]} />
        </>
    )
}

export default Sidebar