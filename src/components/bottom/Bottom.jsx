import { Box, Center, Flex, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import { FaRecycle } from 'react-icons/fa'
import { AiTwotoneLock } from "react-icons/ai"
import { TiTickOutline } from "react-icons/ti"

export const Bottom = () => {
    return (
        <Box>
            <Box w={"90%"} m={"auto"} mt={"20"}>

                <Box mb={"20px"}>
                    <Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_01.webp' alt='hk' />
                </Box>
                <Flex gap={"25px"} direction={["column", "column", "row", "row"]}>
                    <Box><Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_02.webp' /></Box>
                    <Box><Image src='https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_03.webp' /></Box>
                </Flex>
                <Flex justifyContent={"space-around"} my={"8"} fontWeight={"semibold"} direction={["column", "column", "row", "row"]}>
                    <Box fontSize={"larger"} mt={["15%","5%","0","0"]} ><Box  w={"50%"} m={"auto"}  fontSize={"4xl"} >
                        <Center h="100%">
                            <Icon as={FaRecycle} />
                        </Center></Box>

                        Trust</Box>
                    <Box fontSize={"larger"} mt={["15%","15%","0","0"]}  ><Box w={"30%"} m={"auto"} fontSize={"4xl"} > <Center h="100%">
                            <Icon as={AiTwotoneLock } />
                        </Center></Box>Secure Payment</Box>
                    <Box fontSize={"lg"} mt={["15%","5%","0","0"]} ><Box w={"30%"} m={"auto"} fontSize={"4xl"}> <Center h="100%">
                            <Icon as={TiTickOutline } />
                        </Center></Box>Legitimacy</Box>
                </Flex>
            </Box>
        </Box>
    )
}
