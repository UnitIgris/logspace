import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children, ...props }) => {
  return (
    <NextLink href={href}>
      <Link borderRadius={6} p={2} bg={'#805ad5'} color={'white'} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const { path } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      m={4}
      position="fixed"
      as="nav"
      w="100%"
      bg={'fffff80'}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={1.5}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link
            display="flex "
            href="https://github.com/UnitIgris/logspace"
            path={path}
          >
            Github
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg="#3e4044">
                <NextLink href="https://github.com/UnitIgris/logspace" passHref>
                  <MenuItem as={Link}> Github</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
