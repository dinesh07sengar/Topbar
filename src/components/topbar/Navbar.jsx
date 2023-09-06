import React from 'react'
import { Box, Center, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BiSolidCartAlt } from "react-icons/bi"
import HoverMenu from '../menu/Menu'
import { Menu1, Menu2, menu3 } from "../menu/Check"
import { GiHamburgerMenu } from "react-icons/gi"


export const Navbars = () => {
    return (
        <Box py={["20px","30px","20px","20px"]} pb={"10px"} position={"sticky"} top={0} zIndex={"6"} bg={"white"} >

            <Flex justifyContent={"space-around"} >
                <Box display={["flex","flex","flex","none"]} gap={"2"} >

                    <Center>
                        <Icon as={GiHamburgerMenu} />
                    </Center>
                    <Center display={["flex","flex","none"]}>
                        <Icon as={BiSearch} />
                    </Center>
                </Box>
                <Box w={["25%","25%","20%","10%"]}>
                    <Image src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt='logo' h={"100%"} w={"100%"} />
                </Box>
                <Box w={["50%","50%","70%","50%"]} display={["none", "none", "none", "block"]}  >
                    <Flex justifyContent={"space-around"} >
                        <Box my={"auto"} >

                            <Heading fontSize={"16px"} fontWeight={"700"} _hover={{ color: "blue", }}>SEND THE LOVE</Heading>
                        </Box>
                        <Box my={"auto"} >
                            <HoverMenu label="Sneakers" data={Menu1} />
                        </Box>
                        <Box my={"auto"}>
                            <HoverMenu label="StreetWear" data={Menu2} />
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
                <Box   display={"flex"} gap={"2"}>
                    
                    
                        <Center fontSize={"20px"} m={"auto"} display={["none","none","flex","flex"]}>
                            <Icon as={BiSearch}/></Center>
                        <Center  fontSize={"18px"}><FiUser /></Center>
                        <Center  fontSize={"18px"}><MdOutlineFavoriteBorder /></Center>
                        <Center  fontSize={"18px"}><BiSolidCartAlt /></Center>





                    

                </Box>

            </Flex>

        </Box>
    )
}
