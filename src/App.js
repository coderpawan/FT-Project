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
    <div>
      <div className="load"></div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "50px",
        }}
      >
        <div>
          <div className="line"></div>
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
        <div>
          <div className="line"></div>
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
        <div>
          <div className="line"></div>
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
        <div>
          <div className="line"></div>
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
        <div>
          <div className="line"></div>
          <Preloader />
          <Preloader />
          <Preloader />
        </div>
      </div>
    </div>
  );
};

export default App;
