import { extendTheme } from '@chakra-ui/react';

const darkTheme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'white' : null,
        background: props.colorMode === 'dark' ? '#000000' : null,
      },
    }),
  },
});

export default darkTheme;
