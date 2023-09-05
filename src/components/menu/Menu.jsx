import React, { useRef } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, Box, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi"

function HoverMenu({ label,data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    onOpen();
  };

  const handleMouseLeave = () => {
    onClose();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <Menu isOpen={isOpen} onClose={onClose} placement="bottom-end" >
        <MenuButton as={Button} border={"none"} p={"0"} m={"0"} fontSize={"16px"} bg={"transparent"} _hover={{ color: "blue",bg:"white", border:"none" }} rightIcon={<BiChevronDown/>}>
          {label}
        </MenuButton>
        <MenuList zIndex={"7"}>
          {data.map((ele)=>{
            return <MenuItem>
            <Box  p="3px 20px">
              <Text fontSize={"lg"} fontWeight={"semibold"}>{ele.head}</Text>
              <Text>{ele.sub}</Text>
            </Box>
          </MenuItem>

          })}

          
          
        </MenuList>
      </Menu>
    </div>
  );
}

export default HoverMenu;

