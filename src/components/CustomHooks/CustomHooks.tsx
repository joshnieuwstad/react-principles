import { HStack } from "@chakra-ui/react";
import BookList from "./BookList";
import MovieList from "./MovieList";

function CustomHooks() {
  return (
    <HStack justifyContent="space-around" alignItems="flex-start">
      <BookList />
      <MovieList />
    </HStack>
  );
}

export default CustomHooks;
