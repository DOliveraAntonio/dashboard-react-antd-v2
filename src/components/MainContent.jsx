import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProducstList from './ProductLists'
import SellerLists from './SellerLists'

function MainContent() {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap="2.3rem">
            <Banner />
            <ProducstList />
            <SellerLists />
        </Flex>
    </div>
  )
}

export default MainContent