import { useState } from "react";

type ArrayStateActions<T> = {
  add: (item: T) => void;
  remove: (item: T) => void;
  clear: () => void;
};

const useArrayState = <T extends { id: number | string }>(
  initialItems: T[]
): [T[], ArrayStateActions<T>] => {
  const [items, setItems] = useState(initialItems);

  const add = (item: T) => setItems([...items, item]);

  const remove = (item: T) =>
    setItems([...items.filter((i) => i.id !== item.id)]);

  const clear = () => setItems([]);

  return [items, { add, remove, clear }];
};

export default useArrayState;
