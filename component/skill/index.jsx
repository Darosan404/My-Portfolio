import { Fragment } from 'react';
import {
  Box, Text, Progress,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function Skills({ data }) {
  const bgDark = useColorModeValue('white', '#393e46');
  return (
    <>
      <Box bg={bgDark} p={4} w={['100%', null, '20%']} h="100%">
        <Text as="h1" fontSize="3xl">Skills</Text>
        {
        data.map((skill) => (
          <Fragment key={skill.id}>
            <Text as="h3" fontSize="lg" py={1}>{skill.skill}</Text>
            <Progress value={skill.percentage} size="sm" colorScheme="whatsapp" />
          </Fragment>
        ))
        }
      </Box>
    </>
  );
}
