import { HStack } from "@chakra-ui/react";
import BookList from "./BookList";
import MovieList from "./MovieList";
import { Book } from "../../types/book";
import { Movie } from "../../types/movie";

function HOC() {
  const initialBooks: Book[] = [
    {
      id: 1,
      name: "Sapiens",
    },
    {
      id: 2,
      name: "Amsterdam",
    },
  ];

  const initialMovies: Movie[] = [
    {
      id: "abc",
      name: "Intersteller",
    },
    {
      id: "def",
      name: "Tenet",
    },
  ];

  return (
    <HStack justifyContent="space-around" alignItems="flex-start">
      <BookList items={initialBooks} />
      <MovieList items={initialMovies} />
    </HStack>
  );
}

export default HOC;
