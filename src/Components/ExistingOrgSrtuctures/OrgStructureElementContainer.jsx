import React, { useState } from "react";
import "./Existing.css";
import OrgStrActions from "./components/OrgStrActions";
import OrgNameField from "./components/OrgNameField";
import OrgQuantityField from "./components/OrgQuantityField";

const OrgStructureElementContainer = (props) => {
  // change existing organization srtucture input handler
  const [change, setChange] = useState(false);
  const [name, changeName] = useState(props.orgName);

  let onValueChange = (e) => {
    changeName(e.currentTarget.value);
  };

  let saveChanges = (id, name) => {
    props.updateOrg(id, name);
    setChange(false);
    changeName("");
  };
  // create new organization srtucture input handler
  const [create, setCreate] = useState(false);
  const [newOrg, setNewOrg] = useState("");

  let onInputChange = (e) => {
    setNewOrg(e.currentTarget.value);
  };

  let createOrg = (id, name) => {
    props.createOrg(id, name);
    setCreate(false);
    setNewOrg("");
  };

  // clear tree from children on close item
  let includesOpened = (id, children) => {
    props.deleteFromOpened(id);
    mapOpenedChildren(children);
  };
  let mapOpenedChildren = (children) => {
    children.forEach((child) => {
      props.deleteFromOpened(child.id);
      child.children && mapOpenedChildren(child.children);
    });
  };

  // state of arrow icon on closing/opening
  const [arrowOpened, setArrowOpened] = useState(false);
  return (
    <div
      className="columnWidth"
      style={{
        backgroundColor: `rgba(1, 116, 223, ${props.number * 0.15})`,
        opacity: props.opened.includes(props.parentId) ? 1 : 0,
        visibility: props.opened.includes(props.parentId) ? "visible" : "hidden",
        position: props.opened.includes(props.parentId) ? "relative" : "absolute",
        transform: props.opened.includes(props.parentId) ? "translateY(0)" : "translateY(-50%)",
      }}
    >
      <OrgNameField
        id={props.id}
        children={props.children}
        opened={props.opened}
        includesOpened={includesOpened}
        setArrowOpened={setArrowOpened}
        setOpened={props.setOpened}
        change={change}
        number={props.number}
        name={name}
        onValueChange={onValueChange}
        saveChanges={saveChanges}
        orgName={props.orgName}
        arrowOpened={arrowOpened}
      />
      <OrgQuantityField
        create={create}
        id={props.id}
        newOrg={newOrg}
        onInputChange={onInputChange}
        createOrg={createOrg}
        quantity={props.quantity}
      />
      <OrgStrActions
        id={props.id}
        setCreate={setCreate}
        create={create}
        setChange={setChange}
        change={change}
        deleteOrg={props.deleteOrg}
      />
    </div>
  );
};

export default OrgStructureElementContainer;
