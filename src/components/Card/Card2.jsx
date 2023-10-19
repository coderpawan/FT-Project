import React from "react";
import "./Card.css";
import { GoCircle, GoDotFill } from "react-icons/go";
import { TbClockExclamation } from "react-icons/tb";
import { HiPauseCircle } from "react-icons/hi2";
import { BsThreeDots, BsExclamationSquareFill } from "react-icons/bs";
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from "react-icons/tb";

function renderIcon(item) {
  switch (
    item // Assuming you have an "iconType" property in your data
  ) {
    case "In progress":
      return <HiPauseCircle color="orange" fontSize="20px" />;
    case "Todo":
      return <GoCircle color="grey" />;
    case "Backlog":
      return <TbClockExclamation color="red" />;
    case "No priority":
      return <BsThreeDots color="grey" />;
    case "Urgent":
      return <BsExclamationSquareFill color="#FF5733" />;
    case "Medium":
      return <TbAntennaBars4 />;
    case "Low":
      return <TbAntennaBars3 />;
    case "High":
      return <TbAntennaBars5 />;
    default:
      return null; // You can provide a default icon or handle other cases as needed
  }
}
let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];
const Card2 = ({ id, title, tag, stat, priority }) => {
  return (
    <div className="cardContainer " style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span
          style={{ textTransform: "uppercase", fontSize: "13px" }}
          className="color-grey"
        >
          {id}
        </span>
        {/* <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="UserImage" />
                {status?<div className="avaiStatus"></div>:<div className="noStatus"></div>}
                
            </div> */}
      </div>
      <div className="cardTitle" style={{ fontWeight: 200, display: "flex" }}>
        <div style={{ paddingTop: "2px" }}>{renderIcon(stat)}</div>
        <p
          className="para"
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            position: "relative",
            top: "2px",
            paddingLeft: "4px",
          }}
        >
          {title}
        </p>
      </div>
      <div className="cardTags" style={{ paddingTop: "10px" }}>
        <div className="tags color-grey">
          <div style={{ position: "relative", top: "2px" }}>
            {renderIcon(prior_list[priority])}
          </div>
        </div>
        {tag?.map((elem, index) => {
          return (
            <div
              key={index}
              className="tags color-grey"
              style={{
                fontSize: "11px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              {" "}
              <GoDotFill
                color="grey"
                style={{ fontSize: "12px", position: "relative", top: "2px" }}
              />{" "}
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card2;
