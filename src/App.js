import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Kanban from "./components/Kanban/KanbanBoard";
import { useDispatch, useSelector } from "react-redux";
import { DataFetching } from "./UserAction/Actions";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(DataFetching());
  }, [dispatch]);
  // console.log(allTickets);
  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <Navbar />
      <Kanban />
    </div>
  ) : (
    <Preloader />
  );
};

export default App;
