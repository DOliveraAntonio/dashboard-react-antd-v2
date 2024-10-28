import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from 'antd'
import React from 'react'
const {Title,Text} = Typography;

const SellerLists = () => {
  return (
    <Flex align='center' justify="space-between" gap="large">
        <Flex vertical="row" gap="small" className='top-seller'>
            <Flex align="center" justify="space-between">
                <Title level={5} strong className='primary--color'>Top Seller</Title>
                <Button type='link' className='gray--color'>View All</Button>

            </Flex>
            <Card>
                <Flex align='center' justify="space-evenly">
                    <Avatar.Group maxCount={3} maxPopoverTrigger='click' size="large" maxStyle={{
                        color:'#f56a00',backgroundColor:'#fde3cf',cursor:'progress'}}>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src="https://img.freepik.com/free-photo/%20close-up-portrait-tender-girl-with-short-hair-smiling-white-teeth-looking-happy-pla%20ying-with-haircut-standing-against-white-wall_176420-34431.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://img.freepik.com/premium-psd/adult-man-nutural-confident-portrait-concept_53876-22253.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wal1_176420-37520.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                    </Avatar.Group>
                    <Divider type="vertical" className='divider' />
                    <Flex vertical="row">
                        <Text type="secondary" strong>
                            1,200 plant sold
                        </Text>
                        <Text type="secondary" strong>
                            10 seller
                        </Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
        <Flex vertical="row" gap="small" className='featured-seller'>
            <Flex align="center" justify="space-between">
                <Title level={5} strong className='primary--color'>Featured Seller</Title>
                <Button type='link' className='gray--color'>View All</Button>
            </Flex>
            <Card>
                <Flex align='center' justify="space-evenly">
                    <Avatar.Group maxCount={3} maxPopoverTrigger='click' size="large" maxStyle={{
                        color:'#f56a00',backgroundColor:'#fde3cf',cursor:'progress'}}>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src="https://img.freepik.com/free-photo/%20close-up-portrait-tender-girl-with-short-hair-smiling-white-teeth-looking-happy-pla%20ying-with-haircut-standing-against-white-wall_176420-34431.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://img.freepik.com/premium-psd/adult-man-nutural-confident-portrait-concept_53876-22253.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wal1_176420-37520.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Tooltip>
                    </Avatar.Group>
                    <Divider type="vertical" className='divider' />
                    <Flex vertical="row">
                        <Text type="secondary" strong>
                            1,530 plant sold
                        </Text>
                        <Text type="secondary" strong>
                            13 seller
                        </Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    </Flex>
  )
}

export default SellerLists