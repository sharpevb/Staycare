import React from "react"

function AddBtn(props) {
  return (
    <button type="button" className="btn btn-success" {...props} role="button" tabIndex="0">
      Add Event
    </button>
  );
}

export default AddBtn