import {
  Box, Image, Text, Stack,
} from '@chakra-ui/react';

export default function Me({ data }) {
  return (
    <>
      <Box w="100%">
        <Stack direction={{ base: 'column', md: 'row' }} bg="blue.700" spacing={8} p={10} color="gray.50">
          <Image boxSize="180px" src={data.image} alt="Image Davis Rosario" />
          <Box>
            <Text as="h1" fontSize="4xl">{data.name}</Text>
            <Text as="h2" fontSize="2xl">{data.work}</Text>
            <Text as="p" fontSize="md">{data.description}</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
