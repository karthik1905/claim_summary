import React, { Component } from "react";
import UpdateClaim from "./UpdateClaim";
import Navbar from "./Navbar";

class Claims extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UpdateClaim />
      </div>
    );
  }
}

Claims.propTypes = {};

export default Claims;
