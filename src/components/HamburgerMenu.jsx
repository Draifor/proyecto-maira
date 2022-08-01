import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  BreadcrumbItem,
  BreadcrumbLink,
  useDisclosure,
} from "@chakra-ui/react";
import {MdMenu} from 'react-icons/md';

export default function HamburgerMenu({ menuItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<MdMenu />}
        size='lg'
        fontSize='35px'
        colorScheme="blue"
        variant='link'
        onClick={onOpen}
      />
            <Drawer
        isOpen={isOpen}
        size='full'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody p='0'>
            {menuItems.map((item, index) => (
              <BreadcrumbItem key={index} w="100%">
                <BreadcrumbLink as={Link} to={item.link} w="100%">
                  <Button 
                  borderRadius="0"
                  variant="my-style"
                  p='10'
                  m='1'
                   w="100%">
                    {item.name}
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
