import React from "react";
import ExistingOrgStructuresContainer from "./ExistingOrgSrtuctures/ExistingOrgStructuresContainer";
import NewOrgSrtuctureContainer from "./NewOrgSrtuctureComponents/NewOrgStructureContainer";

const AvroraConatiner = () => {
  return (
    <div className="wrapper">
      <NewOrgSrtuctureContainer />
      <ExistingOrgStructuresContainer />
    </div>
  );
};

export default AvroraConatiner;
