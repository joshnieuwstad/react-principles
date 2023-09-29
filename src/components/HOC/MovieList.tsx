import React from "react";
import { Movie } from "../../types/movie";
import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import withSearch from "../../higherOrderComponents/WithSearch";

interface WithSearchMovieProps {
  items: Movie[];
}

const MovieList: React.FC<WithSearchMovieProps> = ({ items }) => {
  return (
    <VStack mb="3">
      <UnorderedList>
        {items.map((movie) => (
          <ListItem key={movie.id}>
            <Text>{movie.name}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default withSearch(MovieList);
