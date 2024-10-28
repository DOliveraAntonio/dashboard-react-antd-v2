import { Button, Card, Flex, Typography } from 'antd'
import React from 'react'
const {Title,Text} = Typography;

function Banner() {
  return (
    <Card style={{height: 260, padding: 20}}>
        <Flex vertical gap={30}>
            <Flex vertical align="flex-start">
                <Title level={2} strong>
                    Create and sell products
                </Title>
                <Text type="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic!
                </Text>
            </Flex>
            <Flex gap="large">
                <Button type="primary" size="large">Explore More</Button>
                <Button size="large">Top Seller</Button>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Banner