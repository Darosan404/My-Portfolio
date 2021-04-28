import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Box, VStack, HStack, Center, Text, Switch, FormControl, FormLabel,
} from '@chakra-ui/react';
// import useTheme from '../../hook/useTheme';
import { useColorMode } from '@chakra-ui/color-mode';
import style from './style';

export default function Menu({ view = true }) {
  const [value, setValue] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  // const [, themeToggler] = useTheme();

  useEffect(() => {
    if (view) {
      setValue(0);
    } else {
      setValue(-48);
    }
  }, [view]);

  return (
    <>
      <Box as="nav" w={48} h="100%" position="fixed" left={value} bg="gray.900" color="white" transition="all 1s ease" overflow="hidden" zIndex="30">
        <Center h="20vh">
          <Link href="/">
            <a>
              <i className="far fa-folder-open fa-5x" style={style.logo} />
              <Text fontSize="xl" letterSpacing={8}>
                DAVIS
              </Text>
            </a>
          </Link>
        </Center>
        <VStack
          as="header"
          h="70vh"
          spacing={28}
          justifyContent="center"
          alignItems="start"
          ml={12}
        >
          <Link href="/">
            <a>
              <Text fontSize="lg">
                <i className="fas fa-home" style={style.marginLogo} />
                Home
              </Text>
            </a>
          </Link>
          <Link href="/contacto">
            <a>
              <Text fontSize="lg">
                <i className="fas fa-envelope" style={style.marginLogo} />
                Contacto
              </Text>
            </a>
          </Link>
          <FormControl>
            <FormLabel>
              <i className="fas fa-moon" style={style.moon} />
              <Switch
                onChange={toggleColorMode}
                colorScheme="whatsapp"
                isChecked={colorMode === 'dark' && true}
              />
            </FormLabel>
          </FormControl>
        </VStack>
        <HStack
          as="footer"
          h="10vh"
          alignItems="center"
          justifyContent="space-around"
          borderTop="1px solid #E53E3E"
        >
          <a href="https://github.com/Darosan404" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x" />
          </a>
        </HStack>
      </Box>
    </>
  );
}
