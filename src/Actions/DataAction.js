import axios from "axios";

export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );

    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE" });
  }
};

export const selectData =
  (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: "SELECT_DATA_REQUEST" });

      let user = false;
      let mySet = new Set();
      let arr = [],
        selectedData = [],
        myuser = [];
      const mp = new Map();
      if (group === "status") {
        myuser = allTickets.allUser;
        // eslint-disable-next-line array-callback-return
        myuser.map((item) => {
          //   console.log(item);
          mp.set(item.id, item);
        });
        // console.log(allTickets);
        allTickets?.allTickets.forEach((elem) => {
          mySet.add(elem.status);
        });

        arr = [...mySet];

        arr.forEach((elem, index) => {
          let arr = allTickets?.allTickets.filter((fElem) => {
            return elem === fElem.status;
          });
          let arr2 = [];
          arr.forEach((item) => {
            let user = mp.get(item.userId);
            arr2.push({ ...item, user });
          });
          //   console.log(arr2);
          selectedData.push({
            [index]: {
              title: elem,
              category: "status",
              value: arr2,
            },
          });
          //   console.log(selectData);
        });
      } else if (group === "user") {
        user = true;
        allTickets?.allUser?.forEach((elem, index) => {
          arr = allTickets?.allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });

          //   console.log(elem);
          selectedData.push({
            [index]: {
              title: elem.name,
              available: elem.available,
              value: arr,
            },
          });
        });
      } else {
        myuser = allTickets.allUser;
        // eslint-disable-next-line array-callback-return
        myuser.map((item) => {
          //   console.log(item);
          mp.set(item.id, item);
        });
        let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

        prior_list.forEach((elem, index) => {
          arr = allTickets.allTickets.filter((fElem) => {
            return index === fElem.priority;
          });
          let arr2 = [];
          arr.forEach((item) => {
            let user = mp.get(item.userId);
            arr2.push({ ...item, user });
          });
          selectedData.push({
            [index]: {
              title: elem,
              value: arr2,
            },
          });
        });
      }

      if (orderValue === "title") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (orderValue === "priority") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: "SELECT_DATA_SUCCESS",
        payload: { selectedData, user },
      });
    } catch (error) {
      dispatch({ type: "SELECT_DATA_FAILURE", payload: error.message });
    }
  };
