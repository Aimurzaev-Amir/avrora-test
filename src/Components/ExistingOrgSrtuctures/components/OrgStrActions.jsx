import React from "react";
import createNew from "../img/plus 1.svg";
import update from "../img/pen 1.svg";
import remove from "../img/remove 1.svg";
import "../Existing.css";

const OrgStrActions = (props) => {
  return (
    <div className="actions">
      <img
        src={createNew}
        alt="update element of organizational structure data"
        onClick={() => props.setCreate(!props.create)}
      />
      <img
        src={update}
        alt="update element of organizational structure data"
        onClick={() => props.setChange(!props.change)}
      />
      <img
        src={remove}
        alt="delete element of organizational structure"
        onClick={() => props.deleteOrg(props.id)}
      />
    </div>
  );
};

export default OrgStrActions;
