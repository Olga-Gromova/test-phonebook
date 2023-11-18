import { HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <HStack spacing={8}>
      <Link
        as={NavLink}
        color="#192655"
        fontFamily="Merriweather Sans"
        fontSize={{ base: '16px', md: '24px' }}
        fontWeight={'bold'}
        _hover={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
        }}
        _activeLink={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
        }}
        to="/login"
      >
        Log in
      </Link>
      <Link
        as={NavLink}
        color="#192655"
        fontFamily="Merriweather Sans"
        fontSize={{ base: '16px', md: '24px' }}
        fontWeight={'bold'}
        _hover={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
        }}
        _activeLink={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
        }}
        to="/register"
      >
        Sign up
      </Link>
      
    </HStack>
  );
};
