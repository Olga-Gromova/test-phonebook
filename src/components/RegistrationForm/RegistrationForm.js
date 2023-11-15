import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signUp } from 'redux/auth/operations';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Icon,
  Container,
  Text,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const schema = yup
  .object({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().min(8).max(30).required(),
    password: yup.string().min(6).max(30).required(),
  })
  .required();

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const dispatch = useDispatch();

  const registerSubmit = data => {
    dispatch(signUp(data))
      .unwrap()
      .then(() =>
        toast({
          position: 'top',
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#5F8D4E"
              borderRadius="10px"
              textAlign="center"
            >
              Account of user {data.name} was created successfully
            </Box>
          ),
        })
      )
      .catch(error => {
        console.log(error);
        toast({
          position: 'top',
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#e84a5f"
              borderRadius="10px"
              textAlign="center"
            >
              Please, check again - user with email <Text as="b" color="green">{data.email}</Text> or with name <Text as="b" color="green"> {data.name} </Text> have already created earlier
            </Box>
          ),
        });
      });
  };

  const toast = useToast();

  const toggleClick = (toggle, setInput, setIcon) => {
    if (toggle === 'password') {
      setIcon(true);
      return setInput('text');
    }
    if (toggle === 'text') {
      setIcon(false);
      return setInput('password');
    }
  };

  return (
    <Container>
      <Box
        as="form"
        minWidth={200}
        mx="auto"
        onSubmit={handleSubmit(registerSubmit)}
        textAlign="center"
      >
        <FormControl isRequired mb="16px">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="User name"
            borderColor="#89d3da"
            borderWidth="1px"
            bg="#fff"
            autoComplete="name"
            {...register('name', { required: true })}
          />
          <span>{errors.name?.message}</span>
        </FormControl>
        <FormControl isRequired mb="16px">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            borderColor="#89d3da"
            borderWidth="1px"
            bg="#fff"
            autoComplete="email"
            placeholder="user@mail.com"
            {...register('email', { required: true })}
          />
          <span>{errors.email?.message}</span>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type={toggleInput}
            {...register('password', { required: true })}
            name="password"
            borderColor="#89d3da"
            borderWidth="1px"
            bg="#fff"
            autoComplete="new-password"
            placeholder="Your password"
          />
          <Button
            bg="transparent"
            position="absolute"
            right="0px"
            _hover={{ bg: 'transparent', borderColor: 'transparent', color: '#192655' }}
            _active={{ bg: 'transparent', borderColor: 'transparent', color: '#192655' }}
            _focus={{ bg: 'transparent', borderColor: 'transparent', color: '#192655' }}
            onClick={() =>
              toggleClick(toggleInput, setToggleInput, setToggleIcon)
            }
          >
            {toggleIcon ? (
              <Icon as={RiEyeOffLine} w={8} h={8} fill="#192655" background="transparent"/>
            ) : (
              <Icon as={RiEyeLine} w={8} h={8} fill="#192655" background="transparent"/>
            )}
          </Button>

          <span>{errors.password?.message}</span>
        </FormControl>
        <Button
          type="submit"
          width="200px"
          mt={4}
          borderColor="#89d3da"
          borderWidth="1px"
          _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
};
