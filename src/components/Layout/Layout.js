import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner, Flex } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <Flex w="100%" h="100%" align="center" justify="center">
            <Spinner
              size="xl"
              color="#188C69"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
            />
          </Flex>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
