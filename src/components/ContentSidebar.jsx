import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'
const {Title,Text} = Typography;
import plant3 from '../assets/Plant3.png'

const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap="large">
                <Title level={4} strong style={{color: '#fff'}} >
                    Today <br /> 5 ordens
                </Title>
                <Title level={4} strong style={{color: '#fff'}}>
                    This Month <br /> 140 ordens
                </Title>
            </Flex>
            <Image src={plant3} alt='plant' style={{position: 'absolute', bottom: -50, left: 30,height: '280px', width: 'auto'}} />
        </Card>
    </div>
  )
}

export default ContentSidebar