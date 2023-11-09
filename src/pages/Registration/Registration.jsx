import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Box, Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Box
      as="main"
      paddingY="50px"
      bg="#98b7d545"
      // h="100vh"
    >
      <Container as="section">
        <RegistrationForm />
      </Container>
    </Box>
  );
}
