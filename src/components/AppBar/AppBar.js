import { Flex, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      align="center"
      h={70}
      p={{ base: '10px', md: '16px' }}
      bg="#b3d9f3"
    >
      <Spacer />
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Spacer />
    </Flex>
  );
};
