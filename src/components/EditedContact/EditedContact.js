import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { VscSaveAs } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import * as yup from 'yup';
import { FormStyled } from './EditedContact.styled';




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
      <input type="text" {...register('name')} autoFocus autoComplete="name" />

      <input type="text" {...register('number')} autoComplete="number" />
      <button className="saveButton" type="submit">
        <VscSaveAs />
      </button>
    </FormStyled>
  );
};

export default EditContact;
