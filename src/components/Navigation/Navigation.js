import { Box, Link } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display={{ base: 'grid', md: 'block' }}>
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
        mr={{ base: '0px', md: '72px' }}
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
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
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
