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

const getRandomColor = () => {
  const darkColors = ["#007BFF", "#6610F2", "#343A40", "#333333"];
  return darkColors[Math.floor(Math.random() * darkColors.length)];
};

const ProfileImage = ({ name }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join("");

  const backgroundColor = getRandomColor();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {initials}
    </div>
  );
};

let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

const Card3 = ({ id, title, tag, name, status, priority }) => {
  console.log(priority);
  return (
    <div className="cardContainer " style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span
          style={{ textTransform: "uppercase", fontSize: "13px" }}
          className="color-grey"
        >
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <ProfileImage name={name} />
          {status ? (
            <div className="avaiStatus"></div>
          ) : (
            <div className="noStatus"></div>
          )}
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200, display: "flex" }}>
        <p className="para" style={{ fontSize: "13px", fontWeight: "bold" }}>
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

export default Card3;
