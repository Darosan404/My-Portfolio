import {
  Box, Stack,
} from '@chakra-ui/react';

export default function Section({ children, background, mt = 4 }) {
  return (
    <>
      <Box as="section" w="100%" mt={mt} bg={background} p={4}>
        <Stack direction={{ base: 'column', md: 'row' }} h="100%" justifyContent="center">
          {children}
        </Stack>
      </Box>
    </>
  );
}
