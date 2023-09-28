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
import useArrayState from "../../hooks/useArrayState";
import { useState } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Book } from "../../types/book";

const BookList = () => {
  const [input, setInput] = useState("");
  const [books, { add, remove, clear }] = useArrayState<Book>([
    {
      id: 1,
      name: "Sapiens",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddBook = () => {
    if (books.some((book) => book.name === input)) {
      return;
    }
    add({
      id: Math.random() * 10e4,
      name: input,
    });
    setInput("");
  };

  const handleRemoveBook = (book: Book) => () => remove(book);

  return (
    <VStack spacing="5">
      <Heading as="h2" size="md">
        My Book List
      </Heading>
      <UnorderedList>
        {books.map((book) => (
          <ListItem key={book.id}>
            <Box display="flex" alignItems="center">
              <Text me="3">{book.name}</Text>
              <SmallCloseIcon onClick={handleRemoveBook(book)} />
            </Box>
          </ListItem>
        ))}
      </UnorderedList>

      <Input
        placeholder="Add new book"
        value={input}
        onChange={handleInputChange}
      />

      <HStack justify="space-between" w="100%">
        <Button colorScheme="blue" onClick={handleAddBook} flex="1">
          Add Book
        </Button>
        <Button colorScheme="red" onClick={clear} flex="1">
          Clear
        </Button>
      </HStack>
    </VStack>
  );
};

export default BookList;
