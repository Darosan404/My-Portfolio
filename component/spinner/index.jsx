import {
  Spinner, Text, VStack,
} from '@chakra-ui/react';

export default function Load() {
  return (
    <>
      <VStack as="div" h="100vh" w="100%" spacing={1} justifyContent="center">
        <Spinner
          label="Loading...."
          size="xl"
          thickness="3px"
          emptyColor="blue.700"
          color="red.500"
        />
        <Text as="h4" fontWeight="bold" bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">Loading</Text>
      </VStack>
    </>
  );
}
