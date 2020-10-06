import React from "react";
import "../Existing.css";
import ChangeOrgName from "./ChangeOrgName";
import arrow from "../../../common/img/arrow.png";

const OrgNameField = (props) => {
  return (
    <div
      className="foldName"
      onClick={() => {
        if (props.opened.includes(props.id)) {
          props.includesOpened(props.id, props.children);
          props.setArrowOpened(false);
        } else {
          props.setOpened(props.id);
          props.setArrowOpened(true);
        }
      }}
    >
      {props.change ? (
        <ChangeOrgName
          number={props.number}
          name={props.name}
          onValueChange={props.onValueChange}
          saveChanges={props.saveChanges}
          id={props.id}
        />
      ) : (
        <p
          style={{
            paddingLeft: props.number * 20,
          }}
        >
          {props.orgName}
        </p>
      )}
      <img
        src={arrow}
        className={
          props.arrowOpened
            ? "arrowFold arrowFoldOpen"
            : "arrowFold " && props.children.length !== 0
            ? "arrowFold"
            : "arrowFold arrowFoldOpen"
        }
        alt="arrow icon accordion"
      />
    </div>
  );
};

export default OrgNameField;
