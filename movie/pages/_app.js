import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
// import theme from '../chakra';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
