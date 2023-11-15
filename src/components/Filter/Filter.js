import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Text, VStack, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    return dispatch(setFilterValue(event.target.value));
  };

  return (
    <VStack gap="5px" justify="space-between" mb="5px">
      <Text
        fontFamily="Merriweather Sans"
        fontWeight={300}
        fontSize={{ base: '16px', md: '24px' }}
        color="#497a86"
      >
        Find contacts by name:
      </Text>
      <Input
        maxW="600px"
        w="100%"
        minW="200px"
        marginInlineStart="0px"
        type="text"
        name="filter"
        onChange={handleFilterChange}
        borderColor="#89d3da"
        borderWidth="1px"
        bg="#fff"
      />
    </VStack>
  );
};
