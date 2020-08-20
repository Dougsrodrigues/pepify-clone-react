import React, { useState } from "react";
import produce from "immer";
import { loadLists } from "../../services/api";
import List from "../List";
import BoardContext from "./context";

import { Container } from "./styles";

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to, fromlist, toList) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromlist].cards[from];

        draft[fromlist].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, listIndex) => (
          <List key={list.title} data={list} listIndex={listIndex} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
