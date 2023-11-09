import { useDispatch } from 'react-redux';
import { LuClipboardEdit } from 'react-icons/lu';
import { deleteContact } from 'redux/contacts/operations';
import {
  Flex,
  HStack,
  VStack,
  Avatar,
  Text,
  Circle,
  Icon,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import LoaderSpinner from 'components/Loader/Loader';
import EditContact from 'components/EditedContact/EditedContact';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const onDelete = id => {
    setIsDelete(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => setIsDelete(false));
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const firstLetter = name.charAt(0);

  return (
    <Flex
      as="li"
      borderBottom="1px"
      paddingY="8px"
      justify="space-between"
      align="center"
    >
      {isEdit ? (
        <EditContact
          id={id}
          toggleEdit={toggleEdit}
          name={name}
          number={number}
        />
      ) : (
        <>
          <HStack>
            <Avatar
              name={firstLetter}
              color="white"
              w={{ base: '30px', md: '50px' }}
              h={{ base: '30px', md: '50px' }}
              borderRadius="50%"
              bg="#80B3FF"
            />
            <VStack
              justify="flex-start"
              align="self-start"
              minW="100px"
              mr="10px"
            >
              <Text
                fontFamily="Merriweather Sans"
                fontWeight={300}
                fontSize={{ base: '14px', md: '18px' }}
              >
                {name}
              </Text>
              <Text
                fontFamily="Merriweather Sans"
                fontWeight={300}
                fontSize={{ base: '14px', md: '18px' }}
              >
                {number}
              </Text>
            </VStack>
          </HStack>
          <HStack justify="flex-end" align="self-end">
            <Circle
              size={{ base: '30px', md: '50px' }}
              bg="#80B3FF"
              color="white"
              type="button"
              onClick={toggleEdit}
              _hover={{
                bg: '#0cc0df',
                borderColor: 'transparent',
                color: '#fff',
              }}
            >
              <Icon as={LuClipboardEdit} w={5} h={5} color="white" />
            </Circle>
            <Circle
              size={{ base: '30px', md: '50px' }}
              bg="#80B3FF"
              color="white"
              type="button"
              disabled={isDelete}
              onClick={() => onDelete(id)}
              _hover={{
                bg: '#0cc0df',
                borderColor: 'transparent',
                color: '#fff',
              }}
            >
              {isDelete ? <LoaderSpinner /> : <DeleteIcon />}
            </Circle>
          </HStack>
        </>
      )}
    </Flex>
  );
};
