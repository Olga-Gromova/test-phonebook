import { useSelector } from 'react-redux';
import {
  Heading,
  Flex,
  Spinner,
  VStack,
  Link,
  Text,
  Box,
  Center,
} from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Flex
          w="100%"
          h="100vh"
          align="center"
          justify="center"
          paddingY="400px"
        >
          <Spinner
            size="xl"
            color="#188C69"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
          />
        </Flex>
      ) : (
        <Box as="main" bg="#98b7d545" w="100%" h="100vh" position="relative">
          <Center>
            <VStack
              gap={{ base: '10px', md: '22px' }}
              mw="400px"
              mt="15px"
              mb="20px"
              bg="#104eb86e"
              padding="10px"
              borderRadius="15px"
              boxShadow="0px 0px 10px 5px rgba(0, 0, 255, 0.4)"
            >
              <Heading
                as="h1"
                position="relative"
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '18px', md: '30px' }}
                align="center"
                width="100%"
              >
                Welcome to phonebook
              </Heading>
              <Text
                as="i"
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                align="center"
              >
                This application helps you save the phone numbers
              </Text>
              <Text
                as="b"
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                align="center"
              >
                If you have already registered, please, choose for authorization{' '}
              </Text>
              <Link
                as={NavLink}
                boxShadow="base"
                background="#b3d9f3"
                pr="10px"
                pl="10px"
                color="#192655"
                borderRadius="8%"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                fontWeight={'bold'}
                textShadow="0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #98E4FF,0 0 82px #98E4FF,0 0 92px #98E4FF,0 0 102px #98E4FF,0 0 151px #98E4FF"
                _hover={{
                  color: '#fff',
                  background:'#0cc0df',
                  textShadow:
                    '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
                }}
                _activeLink={{
                  color: '#fff',
                   background:'#0cc0df',
                  textShadow:
                    '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
                }}
                to="/login"
              >
                Log In
              </Link>
              <Text
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                fontWeight={'bold'}
                align="center"
              >
                If it is your first visit, please, fill registration form
              </Text>
              <Link
                as={NavLink}
                boxShadow="base"
                background="#b3d9f3"
                pr="10px"
                pl="10px"
                color="#192655"
                borderRadius="8%"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                fontWeight={'bold'}
                textShadow="0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #98E4FF,0 0 82px #98E4FF,0 0 92px #98E4FF,0 0 102px #98E4FF,0 0 151px #98E4FF"
                _hover={{
                  color: '#fff',
                  background:'#0cc0df',
                  textShadow:
                    '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
                }}
                _activeLink={{
                  color: '#fff',
                  background:'#0cc0df',
                  textShadow:
                    '0 0 7px #A0E9FF, 0 0 10px #A0E9FF, 0 0 21px #A0E9FF, 0 0 42px #ffffff, 0 0 82px #5271ff, 0 0 92px #ffffff, 0 0 102px #fff, 0 0 151px #fff',
                }}
                to="/register"
              >
                Register
              </Link>
            </VStack>
          </Center>
        </Box>
      )}
    </>
  );
}
