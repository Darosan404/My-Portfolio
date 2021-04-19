import { useState } from 'react';

import {
  useMediaQuery, Flex, Button, CloseButton,
} from '@chakra-ui/react';

import Menu from '../menu';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return !isLargerThan768
    ? (
      <>
        {
        isOpen
          ? (
            <>
              <Flex w="100%" flexDirection="column" alignItems="flex-end" position="absolute" zIndex="100">
                <CloseButton m={2} p={3} size="lg" color="red.500" onClick={handleClick} />
              </Flex>
              <Menu />
            </>
          )
          : (
            <>
              <Flex w="100%" flexDirection="column" alignItems="flex-end" position="absolute" zIndex="101">
                <Button m={2} p={3} size="md" variant="ghost" color="red.500" onClick={handleClick}>
                  {}
                  <i className="fas fa-bars" />
                </Button>
              </Flex>
              <Menu view={false} />
            </>
          )
        }
      </>
    )
    : (<Menu />);
}
