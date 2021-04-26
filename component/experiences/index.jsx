import { Fragment } from 'react';
import {
  Box, Text, ListItem, ListIcon, List, Flex,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function Experiences({ data }) {
  const bgDark = useColorModeValue('white', '#393e46');
  return (
    <>
      <Box bg={bgDark} p={4} w="100%" h="100%">
        <Text as="h1" fontSize="3xl">Experience</Text>
        <List spacing={3}>
          {
        data.map((experience) => (
          <Fragment key={experience.id}>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon color="red.500">
                  <i className="fas fa-briefcase" />
                </ListIcon>
                <Text as="h3" fontSize="xl" fontWeight="500">{experience.company}</Text>
              </Flex>

              <Text as="h4" fontSize="lg">{experience.years}</Text>
              <Text as="p" fontSize="md">{experience.description}</Text>
            </ListItem>
          </Fragment>
        ))
        }
        </List>
      </Box>
    </>
  );
}
