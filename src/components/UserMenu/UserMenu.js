import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  Text,
  Button,
  Avatar,
  Icon,
  Circle,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineLogout } from 'react-icons/ai';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  return (
    <>
      {isTabletOrMobile ? (
        <VStack alignItems="center" display="grid" justifyItems="end" gap="0">
          <Flex>
            <Avatar bg="#80B3FF" w="30px" h="30px" mr="10px" />
            <Text
              as="span"
              fontFamily="Montserrat Alternates"
              fontSize="16px"
              color="#192655"
              fontWeight="bold"
            >
              Welcome, {user.name}!
            </Text>
          </Flex>
          <Circle
            size="30px"
            bg="#8349b5"
          
            type="button"
            onClick={handleLogOut}
            _hover={{
              bg: '#0cc0df',
              borderColor: 'transparent',
              color: '#fff',
            }}
          >
            <Icon as={AiOutlineLogout} />
          </Circle>
        </VStack>
      ) : (
        <Flex
          alignItems="center"
          grow={1}
          display="flex"
          justify="flex-end"
          gap="20px"
        >
          <Text
            as="span"
            fontFamily="Montserrat Alternates"
            fontSize="24px"
            color="#192655"
            fontWeight={'bold'}
          >
            Welcome, {user.name}!
          </Text>
          <Avatar bg="#80B3FF" w="50px" h="50px" mr="10px" />
          <Button
            type="button"
            borderRadius="50%"
            h="50px"
            w="50px"
            onClick={handleLogOut}
            fontFamily="Merriweather Sans"
            fontSize="24px"
            fontWeight={'bold'}
            backgroundColor="#8349b5"
            _hover={{
              bg: '#0cc0df',
              borderColor: 'transparent',
              color: '#fff',
            }}
          >
            <Icon as={AiOutlineLogout} />
          </Button>
        </Flex>
      )}
    </>
  );
};
