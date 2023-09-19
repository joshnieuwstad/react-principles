import { useState } from "react";
import useArrayState from "../hooks/useArrayState";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { generateRandomString } from "../utils/utility";

type Movie = {
  id: string;
  name: string;
};

function MovieList() {
  const [input, setInput] = useState("");
  const [movies, { add, remove, clear }] = useArrayState<Movie>([
    {
      id: generateRandomString(3),
      name: "Batman",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddMovie = () => {
    if (movies.some((movie) => movie.name === input)) {
      return;
    }
    add({
      id: generateRandomString(3),
      name: input,
    });
    setInput("");
  };

  const handleRemoveMovie = (movie: Movie) => () => remove(movie);

  return (
    <VStack spacing="5">
      <Heading as="h2" size="md">
        My Movie List
      </Heading>
      <UnorderedList>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <Box display="flex" alignItems="center">
              <Text me="3">{movie.name}</Text>
              <SmallCloseIcon onClick={handleRemoveMovie(movie)} />
            </Box>
          </ListItem>
        ))}
      </UnorderedList>

      <Input
        placeholder="Add new movie"
        value={input}
        onChange={handleInputChange}
      />

      <HStack justifyContent="space-between" w="100%">
        <Button colorScheme="blue" onClick={handleAddMovie} flex="1">
          Add Book
        </Button>
        <Button colorScheme="red" onClick={clear} flex="1">
          Clear
        </Button>
      </HStack>
    </VStack>
  );
}

export default MovieList;
