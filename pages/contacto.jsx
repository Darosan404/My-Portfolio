import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  VStack, FormControl, FormLabel, Input, Textarea, Button, Box, Text,
  FormHelperText,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import handleErrors from '../service/errors';
import Layout from '../component/layout';
import Section from '../component/section';
import Notification from '../component/notification';

const header = {
  title: 'Contacto | Portfolio Davis',
  description: 'Portfolio of Davis',
};

export default function Contacto() {
  const bgDark = useColorModeValue('white', '#393e46');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailErrors, setEmailErrors] = useState(null);
  const [messageErrors, setMessageError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleMessage = ({ target }) => {
    setMessage(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailErrors(handleErrors({ input: email, type: 'email' }));
    setMessageError(handleErrors({ input: message, type: 'message' }));
    if (handleErrors({ input: email, type: 'email' }) === '' && handleErrors({ input: message }) === '') {
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        event.target,
        process.env.NEXT_PUBLIC_USER_ID)
        .then(() => {
          setEmail('');
          setMessage('');
          setShowAlert(true);
        }, (error) => {
          console.log(error.text);
        });
      setTimeout(() => setShowAlert(false), 5000);
    }
  };
  return (
    <>
      <Layout title={header.title} description={header.description}>
        {showAlert && <Notification status="success" description="Thank you! The message was sent successfully." /> }
        <Text as="h1" fontSize="4xl" textAlign="center">Contact Me</Text>
        <Section>
          <Box bg="blue.700" w={{ base: '100%', md: '70%' }} p={3} boxShadow="xl">
            <VStack bg={bgDark} as="form" p={3} spacing={5} autoComplete="off" onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>EMAIL</FormLabel>
                <Input
                  name="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={handleEmail}
                  isInvalid={emailErrors && true}
                  focusBorderColor="blue.700"
                  autoFocus
                />
                <FormHelperText color="red" ml={2}>{emailErrors && emailErrors}</FormHelperText>
              </FormControl>
              <FormControl id="message">
                <FormLabel>MESSAGE</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Message"
                  size="md"
                  resize="none"
                  rows="5"
                  value={message}
                  onChange={handleMessage}
                  isInvalid={messageErrors && true}
                  focusBorderColor="blue.700"
                />
                <FormHelperText color="red" ml={2}>{messageErrors && messageErrors}</FormHelperText>
              </FormControl>
              <Button as="button" colorScheme="whatsapp" w={{ base: '100%', sm: '17%' }}>Send</Button>
            </VStack>
          </Box>
        </Section>
      </Layout>
    </>
  );
}
