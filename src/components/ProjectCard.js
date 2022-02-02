import {
  VStack,
  Heading,
  Text,
  Link,
  Icon,
  Image,
  HStack,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ image, name, link }) {
  return (
    <VStack h="200px" w="300px" >
      <Image borderRadius="8px" boxShadow="lg" width="full" src={image} alt="A screenshot of the landing page of my portfolio project" />
      <HStack w="100%" justify="space-between" pt={3}>
        <Text>{name}</Text>
        <Link href={link} target="_blank">
          <Icon as={FaGithub} color="black" />
        </Link>
      </HStack>
    </VStack>
  )
}