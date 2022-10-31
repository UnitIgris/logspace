import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`

  font-size: 28px;
  display: inline-flex;
  align-items: center;
  

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
          <Text
            color={'white.800'}
            fontFamily='julius'
            
          >
            Logspace
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
