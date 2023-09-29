import React, { useState } from "react";
import { Book } from "../../types/book";
import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import withSearch from "../../higherOrderComponents/WithSearch";

interface WithSearchBookProps {
  items: Book[];
}

const BookList: React.FC<WithSearchBookProps> = ({ items }) => {
  return (
    <VStack mb="3">
      <UnorderedList>
        {items.map((book) => (
          <ListItem key={book.id}>
            <Text>{book.name}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default withSearch(BookList);
