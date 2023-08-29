import React, { useState } from "react";
import "./Box.css";
function Box({ i, j, piece, empty, reveal, side, display }) {
  //i
  //j
  //peice
  //empty to highlight if king in check so no moves valid
  //

  //coloring logic
  let color = null;

  if (i % 2 !== 0) {
    //green
    if (j % 2 === 0) {
      color = "#53A257";
    }
    //light yellow
    else {
      color = "beige";
    }
  } else {
    if (j % 2 !== 0) {
      color = "#53A257";
    } else {
      color = "beige";
    }
  }

  if (display) {
    color = "#D25D5D";
  }

  return (
    <div
      className="box-dark"
      style={{ background: color }}
      onClick={() => reveal(i, j)}
    >
      {" "}
      {piece}
    </div>
  );
}

export default Box;
