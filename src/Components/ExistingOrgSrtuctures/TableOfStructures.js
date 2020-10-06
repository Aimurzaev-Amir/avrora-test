import React from "react";

const TableOfStructures = (props) => {
  return (
    <div className="accordionTable">
      <div className="columnWidth view">
        <p></p>
        <p>Общее количество</p>
        <p>Действия</p>
      </div>
      {props.orgDataIncapsulate(props.treeObj, props.i)}
    </div>
  );
};

export default TableOfStructures;
