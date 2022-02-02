import { Container, Flex } from '@chakra-ui/react';
import Navbar from '@components/Navbar';

export default function Layout({ children }) {
  return (
    <Flex w="full" height="100vh" direction="column">
      <Navbar />
      <Container display="flex" h="100%" justifyContent="center" maxW="2xl">
        {children}
      </Container>
    </Flex>
  )
}