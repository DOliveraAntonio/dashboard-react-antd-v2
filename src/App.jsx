import { Button, Flex, Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
const { Sider, Header, Content } = Layout;
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { RiMenuUnfold4Fill } from "react-icons/ri";
import './App.css';
import CustomHeader from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Layout>
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
      <Sidebar />
      <Button 
        type='text' 
        icon={collapsed ? <MenuUnfoldOutlined /> : <RiMenuUnfold4Fill />} 
        onClick={() => setCollapsed(!collapsed)}
        className='trigger-btn'
      />
    </Sider>
    <Layout>
      <Header className='header'>
        <CustomHeader />
      </Header>
      <Content className='content'>
        <Flex gap="large">
          <MainContent />
          <SideContent />
        </Flex>
      </Content>
    </Layout>
  </Layout>
};

export default App;
