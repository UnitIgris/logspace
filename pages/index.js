import { useState } from 'react'
import {
  Link,
  Box,
  Button,
  Divider,
  Image,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import Section from '../components/section'
import Marquee from 'react-fast-marquee'

function Page() {
  const unlock = { email: 'admin@admin.com', password: 'masterpassword' }
  const [show, setShow] = useState(false)
  const current = new Date();
  const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  const handleClick = () => setShow(!show)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      email == unlock.email &&
      password == unlock.password
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
  }
  return (
    <>
      <Section>
        <Box
          borderRadius="lg"
          align="center"
          fontSize={'150px'}
          fontFamily="julius"
        >
          WELCOME BACK
        </Box>
      </Section>
      <Section delay="0.3">
        <Marquee  gradient={false} speed={70}>
          
        <Text fontWeight={200} align="center" fontSize={'30px'} fontFamily="julius">
          - <b>Please enter your details</b> - <small >Welcome back</small>  - <b>{date}</b> - <small>Logspace</small>  - <b>Please enter your details</b> - <small >Welcome back</small>  - <b>{date}</b> - <small>Logspace</small>  
          </Text>
        </Marquee>
      </Section>
      <Section delay="0.8">
        <Box
          boxShadow=" 
        0px 2px 10px rgba(0,0,0,0.2), 
        0px 10px 20px rgba(0,0,0,0.3), 
        0px 30px 60px 1px rgba(0,0,0,0.5)"
          justifyContent="space-around"
          display={'flex'}
          borderRadius="lg"
          bg={'whiteAlpha.200'}
          h="500px"
        >
          <Box
            my="14"
            display={'flex'}
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize={'45px'} fontFamily="julius">
              Logspace
            </Text>
            <Stack pt="10">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                borderRadius="lg"
                pr="4.5rem"
                placeholder="Email "
                value={email}
              />
              <InputGroup size="md">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius="lg"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack spacing={2} alignItems="center">
              <Link textDecoration={'underline'} m={4} color="white" href="#">
                Sing in
              </Link>
              <Button
                onClick={handleSubmit}
                disabled={!validateForm()}
                m={4}
                color="white"
                href="#"
              >
                Login
              </Button>
              <Link textDecoration={'underline'} m={4} color="white" href="#">
                Forgot Your Password ?
              </Link>
            </Stack>
          </Box>
          <Divider my="10" h={'420'} orientation="vertical" />
          <Box my="10" w={'400px'} fontSize={'15px'} fontFamily="heading">
            <Text align={'center'} fontSize={'xl'}>
              Intelligent platform for <br />
              <b>
                more efficient <br />
                communication
              </b>{' '}
              <br />
              <small>
                With this platform you can share, review and approve cases.
                <br />
                Communication is the key to a job well done.
              </small>
            </Text>

            <Image src="images/bang.png" />
          </Box>
        </Box>
      </Section>
    </>
  )
}
export default Page
