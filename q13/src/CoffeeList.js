import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffees } from "../redux/coffeeSlice";
import { Grid, Box, Image, Text, Spinner, Center } from "@chakra-ui/react";

const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffees, loading, error } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffees()); // Fetch coffee data on mount
  }, [dispatch]);

  if (loading) return <Center><Spinner size="xl" /></Center>;
  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} p={5}>
      {coffees.map((coffee) => (
        <Box key={coffee.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
          <Image src={coffee.image} alt={coffee.name} boxSize="200px" mx="auto" />
          <Text fontSize="xl" fontWeight="bold">{coffee.name}</Text>
          <Text>Price: ${coffee.price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default CoffeeList;
