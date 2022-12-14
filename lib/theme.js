import { extendTheme } from '@chakra-ui/react'


const styles = {
  global:{
    body: {
      bg:'#7044c4'
    }
  }
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: {
      color:'#ff63c3',
      textUnderlineOffset: 3
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  julius: "'Outfit'"
}

const colors = {
  purple: '#4f1ec9'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
