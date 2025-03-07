import React from "react";
import { Provider } from "react-redux";
import store from "store";
import CoffeeList from "CoffeeList";
import Sidebar from "Sidebar";
import { Flex, Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Provider store={store}>
      <Flex direction={{ base: "column", md: "row" }} p={5}>
        <Box w={{ base: "100%", md: "20%" }} p={4}>
          <Sidebar />
        </Box>
        <Box flex="1">
          <CoffeeList />
        </Box>
      </Flex>
    </Provider>
  );
};

export default App;
