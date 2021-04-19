import {
  Alert,
} from '@chakra-ui/react';
import style from './style';

export default function Notification({ status, description }) {
  const Icon = () => {
    if (status === 'success') {
      return (<i className="fas fa-check-circle fa-2x" style={style.success} />);
    } if (status === 'warning') {
      return (<i className="fas fa-exclamation-triangle fa-2x" style={style.warning} />);
    } if (status === 'error') {
      return (<i className="fas fa-exclamation-circle fa-2x" style={style.error} />);
    }
    return null;
  };

  return (
    <>
      <Alert status={status} justifyContent="center">
        {Icon()}
        {description}
      </Alert>
    </>
  );
}
