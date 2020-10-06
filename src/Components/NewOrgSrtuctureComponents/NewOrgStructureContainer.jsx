import React, { useState } from "react";
import { connect } from "react-redux";
import "./OrgStructure.css";
import { createCity } from "../../Redux/hrReducer";

const NewOrgSrtuctureContainer = (props) => {
  const [active, setActive] = useState(false);
  const [newName, setNewName] = useState("");
  const onInputChange = (e) => {
    setNewName(e.currentTarget.value);
  };
  return (
    <div className="orgStructureBlock">
      <h3 className="orgStructureTitle">ОРГАНИЗАЦИОННАЯ СТРУКТУРА</h3>
      <div className="createNewCity">
        <button className="orgStructureButton" onClick={() => setActive(true)}>
          &#43; Добавить город
        </button>
        {active && (
          <form>
            <input type="text" onChange={onInputChange} value={newName} autoFocus={true} />
            <div>
              <button
                className="orgStructureButton"
                onClick={(e) => {
                  e.preventDefault();
                  props.createCity(newName);
                  setActive(false);
                  setNewName("");
                }}
              >
                create
              </button>
              <button className="orgStructureButton" onClick={() => setActive(false)}>
                cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    orgData: state.HR.hrInfo,
  };
};

export default connect(mapStateToProps, { createCity })(NewOrgSrtuctureContainer);
