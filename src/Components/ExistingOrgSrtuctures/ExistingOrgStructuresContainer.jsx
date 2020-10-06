import React from "react";
import { connect } from "react-redux";
import ExistingOrgStructure from "./OrgStructureElementContainer";
import "./Existing.css";
import {
  deleteOrg,
  updateOrg,
  createOrg,
  setOpened,
  deleteFromOpened,
} from "../../Redux/hrReducer";
import TableOfStructures from "./TableOfStructures";

const ExistingOrgStructuresContainer = (props) => {
  const createTreeObj = (data) => {
    const tree = {
      [-1]: {
        children: [],
      },
    };
    data.forEach(
      (item) =>
        (tree[item["id"]] = {
          ...item,
          quantity: item.quantity,
          children: [],
        })
    );

    data
      .filter((item) => tree[item["parent_id"]])
      .map((item) => tree[item["parent_id"]].children.push(tree[item["id"]]));

    return tree[-1].children;
  };

  const treeObj = createTreeObj(props.orgData);
  let i = 0;
  let orgDataIncapsulate = (data, i) => {
    return (
      <ul className="list">
        {data.map((org) => {
          let sum = 0;
          return (
            <li className="arrItem" key={org.id}>
              <ExistingOrgStructure
                // data from redux
                opened={props.opened}
                // data from each array item
                children={org.children}
                id={org.id}
                parentId={org.parent_id}
                orgName={org.name}
                quantity={
                  org.quantity
                    ? org.quantity
                    : org.children
                        .filter((item) => item.quantity)
                        .map((item) => {
                          sum += item.quantity;
                          if (sum === item.quantity) {
                            return "";
                          }
                          return sum;
                        })
                }
                number={org.children ? i++ : i}
                // CRUD and Open/Close Functions
                deleteOrg={props.deleteOrg}
                updateOrg={props.updateOrg}
                createOrg={props.createOrg}
                setOpened={props.setOpened}
                deleteFromOpened={props.deleteFromOpened}
              />
              {org.children && orgDataIncapsulate(org.children, i--)}
            </li>
          );
        })}
      </ul>
    );
  };

  return <TableOfStructures orgDataIncapsulate={orgDataIncapsulate} treeObj={treeObj} i={i} />;
};

let mapStateToProps = (state) => {
  return {
    orgData: state.HR.hrInfo,
    opened: state.HR.opened,
  };
};

export default connect(mapStateToProps, {
  deleteOrg,
  updateOrg,
  createOrg,
  setOpened,
  deleteFromOpened,
})(ExistingOrgStructuresContainer);
