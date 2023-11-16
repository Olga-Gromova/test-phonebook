import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { VscSaveAs } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import * as yup from 'yup';
import { FormStyled } from './EditedContact.styled';

import React from 'react';
import { Input } from '@chakra-ui/react';

const schema = yup
  .object({
    name: yup.string().min(3).max(32).required(),
    number: yup.string().min(3).max(16).required(),
  })
  .required();

const EditContact = ({ id, toggleEdit, name, number }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { name, number },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id,
    };
    dispatch(editContact(newContact));

    toggleEdit();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Input
        border="solid"
        borderColor="#89d3da"
        borderWidth="1px"
        w={{ base: '120px', md: '200px' }}
        fontSize={{ base: '14px', md: '18px' }}
        mw="100%"
        background="#fff"
        paddingX="5px"
        paddingY="5px"
        borderRadius="20px"
        color="#192655"
        _hover={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        _focus={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        _active={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        type="text"
        {...register('name')}
        autoFocus
        autoComplete="name"
      />

      <Input
        border="solid"
        borderColor="#89d3da"
        borderWidth="1px"
        w={{ base: '120px', md: '200px' }}
        fontSize={{ base: '14px', md: '18px' }}
        mw="100%"
        background="#fff"
        paddingX="5px"
        paddingY="5px"
        borderRadius="20px"
        color="#192655"
        _hover={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        _focus={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        _active={{
          borderColor: '#3182ce',
          boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, 0.4)',
        }}
        type="text"
        {...register('number')}
        autoComplete="number"
      />
      <button className="saveButton" type="submit">
        <VscSaveAs />
      </button>
    </FormStyled>
  );
};

export default EditContact;
