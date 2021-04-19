import Link from 'next/link';
import {
  Button,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export default function Custom404() {
  return (
    <>
      <VStack as="div" h="100vh" w="100%" spacing={1} justifyContent="center">
        <Text as="h1" fontWeight="bold" fontSize={72} color="red.500">404</Text>
        <Link href="/">
          <Button bg="blue.700" variant="outline" color="white" _hover={{ opacity: '0.8' }}>
            <Text as="h5" mr={2}>
              Go to Home
              {' '}
              <i className="fas fa-home" />
            </Text>
          </Button>
        </Link>
        <Text as="h3" fontSize={20}>We have not found your page</Text>
        <UnorderedList>
          <ListItem>
            <Text as="p">
              Go to Home
              {' '}
              <i className="fas fa-arrow-up" />
            </Text>
          </ListItem>
          <ListItem>Check your internet connection</ListItem>
          <ListItem>Try again later</ListItem>
        </UnorderedList>
      </VStack>
    </>
  );
}
