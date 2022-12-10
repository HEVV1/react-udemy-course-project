import React, { Fragment, useState } from "react";

function AppClassFunc(props) {
  const [isTrue, setIsTrue] = useState(false);

  const toggleTrue = () => {
    if (isTrue === true) {
      setIsTrue(false);
      return;
    }
    setIsTrue(true);
  };

  return (
    <Fragment>
      <h1>{props.propsMsg}</h1>
      {isTrue && (
        <Fragment>
          <p>The current value is {isTrue.toString()}</p>
        </Fragment>
      )}
      {isTrue ? <p>YUP IT'S TRUE</p> : <p>NOPE IT'S NOT TRUE</p>}
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        TOGGLE
      </a>
    </Fragment>
  );
}

export default AppClassFunc;
