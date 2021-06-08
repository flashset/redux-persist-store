import React from "react";
import { connect } from "react-redux";
import { saveState } from "./persistManager";

const PersistWrapper = (props) => {
  return <div>{props.children}</div>;
};
const mapStateToProps = (state) => {
  saveState(state);
};
export default connect(mapStateToProps)(PersistWrapper);
