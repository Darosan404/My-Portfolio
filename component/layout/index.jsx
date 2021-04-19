import Head from 'next/head';

import { Box } from '@chakra-ui/react';
import Sidebar from '../sidebar';

export default function Layout({ children, title = 'Title', description = 'Default Description' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head>
      <Sidebar />
      <Box as="main" position="absolute" left={[0, null, 48]} w={['100%', null, '85.7%']} py={16} px={4}>
        {children}
      </Box>
    </>
  );
}
