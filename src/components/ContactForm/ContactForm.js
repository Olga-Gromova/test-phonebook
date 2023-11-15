import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsContactAdded } from 'redux/contacts/selectors';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { IoPersonAddOutline } from 'react-icons/io5';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const isContactAdded = useSelector(selectIsContactAdded);
  const dispatch = useDispatch();
  const toast = useToast();

  const isNumberDublicated = number => {
    return contacts.some(contact => contact.number === number);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = contacts.find(contact => contact.name === name);
    if (newContact && isContactAdded) {
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
            Contact wiht name: {name} have already included in your phonebook
          </Box>
        ),
      });
      return;
    }

    if (isNumberDublicated(number)) {
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
            The number: {number} have already included to your phonebook
          </Box>
        ),
      });
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');

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
          The new contact wiht name: {name} was created successfully
        </Box>
      ),
    });

    form.reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Box
      as="form"
      maxWidth="660px"
      width="100%"
      minWidth="200px"
      padding="10px"
      onSubmit={handleSubmit}
      textAlign="center"
      display="flex"
      gap="15px"
      alignItems="center"
    >
      <FormControl isRequired>
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize={{ base: '18px', md: '24px' }}
          color="#497a86"
          mb="auto"
        >
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          required
          autoComplete="name"
          placeholder="Enter name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize={{ base: '18px', md: '24px' }}
          color="#497a86"
          mb="auto"
        >
          Number
        </FormLabel>
        <Input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          required
          placeholder="Enter phone number"
        />
      </FormControl>
      <Button
        borderRadius="50%"
        mt="auto"
        w={{ base: '30px', md: '50px' }}
        h={{ base: '30px', md: '50px' }}
        minWidth="auto"
        bg="#80B3FF"
        color="white"
        _hover={{
          bg: '#0cc0df',
          borderColor: 'transparent',
          color: '#fff',
        }}
        type="submit"
      >
        {!isContactAdded ? (
          <CircularProgress isIndeterminate size="24px" color="#188C69" />
        ) : (
          <Icon as={IoPersonAddOutline} w={5} h={5} color="white" />
        )}
      </Button>
    </Box>
  );
};
