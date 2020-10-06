import React from "react";
import "../Existing.css"

const CreateNewOrg = (props) => {
  return (
    <form name="createNewOrgStrElement">
      <input
        autoFocus={true}
        className="createInput"
        type="text"
        value={props.newOrg}
        onChange={props.onInputChange}
      />
      <button onClick={() => props.createOrg(props.id, props.newOrg)}>add</button>
    </form>
  );
};

export default CreateNewOrg;
