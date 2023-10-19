import React, { useEffect, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import {IoIosArrowDown} from "react-icons/io"
import "./TopNav.css";
import { useDispatch, useSelector} from "react-redux";
import { selectData } from "../../Actions/DataAction";

const getGroup = () => {
  // console.log(localStorage.getItem("group"));

  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}
const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if(valueBool){
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    }else{
      setOrderValue(e.target.value);
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(groupValue === 'user'||groupValue==="status"||groupValue==="priority"){
      dispatch(selectData(groupValue, {
        allTickets, allUser
      }, orderValue))
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);
 
  
  return (
    <div className="top-header">
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          style={{fontSize: "15px"}}
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          {" "}
          <VscSettings style={{transform: 'rotate(90deg)', position: "relative" , top: "3px"}} /> Display <IoIosArrowDown style={{position: "relative" , top: "3px"}}/>
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span style={{fontWeight:"bold", color:"#a0a1a2", fontSize: "14px"}}>Grouping</span>
                <select  value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span style={{fontWeight:"bold", color:"#a0a1a2", fontSize: "14px"}}>Ordering</span>
                <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
