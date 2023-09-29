import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface WithSearchProps {
  items: any[];
}

const withSearch = <T extends WithSearchProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  return (props: T) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchValueChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setSearchValue(e.target.value);
    };

    const filteredItems = props.items.filter((item) => {
      const searchItem = {
        ...item,
      };
      delete searchItem.id;
      return JSON.stringify(searchItem)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    return (
      <Box>
        <WrappedComponent {...props} items={filteredItems} />
        <Input value={searchValue} onChange={handleSearchValueChange} />
      </Box>
    );
  };
};

export default withSearch;
