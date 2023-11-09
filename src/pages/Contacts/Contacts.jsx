import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import emptyImg from '../../images/emptyImg.png';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Box,
  Heading,
  Container,
  CircularProgress,
  Text,
  Image,
  Center,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="main"
      bg="#98b7d545"
      // h="100vh"
    >
      <Container maxW="100%" marginX="auto" paddingX="10px" bg="#98b7d545">
        <Heading
          align="center"
          pt="10px"
          mb="10px"
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize={isTabletOrMobile ? '18px' : '30px'}
          color="#497a86"
        >
          Welcom in your Personal Phonebook
        </Heading>
        <Box gap="5px" justifyItems="center" display="grid">
          <Heading
            align="center"
            fontFamily="Merriweather Sans"
            fontWeight={400}
            fontSize={isTabletOrMobile ? '16px' : '28px'}
            color="#497a86"
          >
            Please, input name & number for a creation a new contact
          </Heading>
          <ContactForm />
          <Box padding="10px" maxWidth="660px" minWidth="200px" width="100%">
            <Heading
              align="center"
              fontFamily="Merriweather Sans"
              fontWeight="bold"
              fontSize={isTabletOrMobile ? '18px' : '28px'}
              mb="10px"
              color="#497a86"
            >
              Contacts
            </Heading>
            {contacts?.length === 0 ? (
              <Center flexDirection="column">
                <Text
                  fontWeight="bold"
                  color="#497a86"
                  fontFamily="Merriweather Sans"
                  fontSize={isTabletOrMobile ? '18px' : '24px'}
                  mb="10px"
                >
                  ...Here is empty
                </Text>
                <Image
                  src={emptyImg}
                  alt="empty image"
                  boxSize="150px"
                  fill="#497a86"
                />
              </Center>
            ) : (
              <div>
                {isLoading && (
                  <CircularProgress
                    isIndeterminate
                    size="24px"
                    color="#0cc0df"
                  />
                )}
                {!isLoading && contacts.length > 0 && <Filter />}

                {error && <p>Something goes wrong</p>}
                {!isLoading && contacts.length > 0 && (
                  <Box overflowY="auto" h="230px">
                    <ContactList />
                  </Box>
                )}
              </div>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
