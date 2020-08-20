import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import StyleGlobal from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <StyleGlobal />
    </DndProvider>
  );
}

export default App;
