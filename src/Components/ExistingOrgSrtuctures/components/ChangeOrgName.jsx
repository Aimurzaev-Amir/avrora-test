import React from "react";
import "../Existing.css";

const ChangeOrgName = (props) => {
  return (
    <form name="updateOrgStrElement">
      <input
        autoFocus={true}
        type="text"
        style={{
          marginLeft: props.number * 20,
        }}
        className="changeInput"
        value={props.name}
        onChange={props.onValueChange}
      />
      <button onClick={() => props.saveChanges(props.id, props.name)}>save</button>
    </form>
  );
};

export default ChangeOrgName;
