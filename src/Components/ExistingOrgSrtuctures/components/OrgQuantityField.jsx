import React from "react";
import "../Existing.css";
import CreateNewOrg from "./CreateNewOrg";

const OrgQuantityField = (props) => {
  return (
    <div className="quantity">
      {props.create ? (
        <CreateNewOrg
          id={props.id}
          newOrg={props.newOrg}
          onInputChange={props.onInputChange} 
          createOrg={props.createOrg}
        />
      ) : (
        <div>
          <p>{props.quantity}</p>
        </div>
      )}
    </div>
  );
};

export default OrgQuantityField;
