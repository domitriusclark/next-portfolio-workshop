import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}