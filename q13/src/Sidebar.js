import React from "react";
import { useDispatch } from "react-redux";
import { fetchCoffees } from "../redux/coffeeSlice";
import { VStack, Button } from "@chakra-ui/react";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(fetchCoffees(order)); // Fetch sorted data
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Button colorScheme="blue" onClick={() => handleSort("name")}>Sort by Name</Button>
      <Button colorScheme="blue" onClick={() => handleSort("price")}>Sort by Price</Button>
    </VStack>
  );
};

export default Sidebar;
