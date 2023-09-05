import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import {FaRecycle} from 'react-icons/fa'
import {AiTwotoneLock} from "react-icons/ai"
import {TiTickOutline} from "react-icons/ti"

export const Bottom = () => {
    return (
        <Box>
            <Box w={"90%"} m={"auto"} mt={"20"}>

                <Box mb={"20px"}>
                    <Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_01.webp' alt='hk' />
                </Box>
                <Flex gap={"25px"}>
                    <Box><Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_02.webp' /></Box>
                    <Box><Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_03.webp' /></Box>
                </Flex>
                <Flex justifyContent={"space-around"} my={"8"} fontWeight={"semibold"}>
                    <Box fontSize={"large"} ><Box  w={"50%"} m={"auto"} fontSize={"4xl"}><FaRecycle/></Box>
                        
                    Trust</Box>
                    <Box fontSize={"lg"} ><Box  w={"30%"} m={"auto"} fontSize={"4xl"} ><AiTwotoneLock/></Box>Secure Payment</Box>
                    <Box fontSize={"lg"} ><Box  w={"30%"} m={"auto"} fontSize={"4xl"}><TiTickOutline/></Box>Legitimacy</Box>
                </Flex>
            </Box>
        </Box>
    )
}
