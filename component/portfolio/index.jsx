import Link from 'next/link';
import { Fragment } from 'react';
import {
  Image, Text, VStack,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function Portfolio({ data }) {
  const bgDark = useColorModeValue('white', '#393e46');
  return (
    <>
      {data.map((project) => (
        <Fragment key={project.slug}>
          <VStack bg={bgDark} p={4} w={[null, null, 80]}>
            <Image src={project.image} alt="Imagen del Portafolio" boxSize="250px" borderRadius="5px" />
            <Text as="h3" fontSize="2xl">{project.title}</Text>
            <Text as="p" fontSize="md">{project.description}</Text>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <Text as="a" mr={2} _hover={{ borderBottom: '1px solid #E53E3E' }}>
                  Read more
                  {' '}
                  <i className="fas fa-external-link-alt" />
                </Text>
              </a>

            </Link>
          </VStack>
        </Fragment>
      ))}
    </>
  );
}
