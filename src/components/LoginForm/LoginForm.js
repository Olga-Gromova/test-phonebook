import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from '@chakra-ui/react';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form"
      minWidth={200}
      mx="auto"
      onSubmit={handleSubmit}
      textAlign="center"
    >
      {error && <ErrorMessage message="Invalid email or password" />}
      <FormControl isRequired mb="16px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          autoComplete="email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          autoComplete="new-password"
        />
      </FormControl>
      <Button
        type="submit"
        width="200px"
        mt={4}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="#0cc0df" />
        ) : (
          'Log in'
        )}
      </Button>
    </Box>
  );
};
