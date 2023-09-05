import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BiSolidCartAlt } from "react-icons/bi"
import HoverMenu from '../menu/Menu'
import {Menu1,Menu2,menu3} from "../menu/Check"


export const Navbars = () => {
    return (
        <Box py={"20px"} pb={"10px"} position={"sticky"} top={0} zIndex={"6"} bg={"white"}>

            <Flex justifyContent={"space-around"} >
                <Box w={"10%"} >
                    <Image src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt='logo' w={"100%"} />
                </Box>
                <Box w={"50%"} >
                    <Flex justifyContent={"space-around"} >
                        <Box my={"auto"} >

                            <Heading fontSize={"16px"} fontWeight={"700"} _hover={{ color: "blue", }}>SEND THE LOVE</Heading>
                        </Box>
                        <Box my={"auto"} >
                            <HoverMenu label="Sneakers" data={Menu1}/>
                        </Box>
                        <Box my={"auto"}>
                            <HoverMenu label="StreetWear" data={Menu2}/>
                        </Box>
                        <Box my={"auto"}>
                            <HoverMenu label="Accessories" data={menu3} />
                        </Box>
                        <Box my={"auto"}>
                            <Text _hover={{ color: "blue", }}>Under 20K</Text>

                        </Box>
                        <Box my={"auto"}>
                            <Text _hover={{ color: "blue", }}>Sneaker Care</Text>

                        </Box>




                    </Flex>


                </Box >
                <Box w={"8%"} >
                    <Flex justifyContent={"space-around"}>
                        <Box my={"15px"} fontSize={"20px"}><BiSearch /></Box>
                        <Box my={"auto"} fontSize={"20px"}><FiUser /></Box>
                        <Box my={"auto"} fontSize={"20px"}><MdOutlineFavoriteBorder /></Box>
                        <Box my={"auto"} fontSize={"20px"}><BiSolidCartAlt /></Box>





                    </Flex>

                </Box>

            </Flex>

        </Box>
    )
}
