import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Flex bg="gray.600" color="white" w="full" sx={{ gap: "12px" }} align="center" pl={3} py={4}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/projects">Projects</Link>
    </Flex>
  )
};
