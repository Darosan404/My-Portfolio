export default function handleErrors({ input, type }) {
  // RFC 5322
  const emailMatch = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (!input) {
    return 'Required';
  }

  if (type === 'email') {
    if (!emailMatch.test(input)) {
      return 'Invalid email';
    }
  } else if (type === 'message') {
    if (input.length < 10) {
      return 'The message must be longer';
    }
  }
  return '';
}
