import React from "react";
import { connect } from "react-redux";
import { saveState } from "./persistManager";

const PersistWrapper = props => {
  return /*#__PURE__*/React.createElement("div", null, props.children);
};

const mapStateToProps = state => {
  saveState(state);
  return { ...state
  };
};

export default connect(mapStateToProps)(PersistWrapper);