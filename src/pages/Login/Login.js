import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Box, Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Box as="main" paddingY="50px" bg="#98b7d545" h="100vh">
      <Container as="section">
        <LoginForm />
      </Container>
    </Box>
  );
}
