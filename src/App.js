import React, { Fragment, useEffect, useState } from "react";

function App(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const toggleTrue = () => {
    if (isTrue === true) {
      setIsTrue(false);
      return;
    }
    setIsTrue(true);
  };

  useEffect(() => {
    console.log("USEEFFECT FIRED!");
    let people = [
      {
        id: 1,
        firstName: "Mary",
        lastName: "Jones",
        dob: "1997-05-02",
      },
      {
        id: 2,
        firstName: "Mary",
        lastName: "Smith",
        dob: "1999-02-04",
      },
    ];
    setCrowd(people);
  }, []);

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
      <hr />
      <h3>People</h3>
      <ul>
        {crowd.map((m) => (
          <li key={m.id} className="list-group-item">
            {m.firstName} {m.lastName}
          </li>
        ))}
      </ul>
      <hr />

      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label" htmlFor="first-name">
            <input
              className="form-control"
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="first-name-new"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
      </form>
      <div>
        <span>First Name: {firstName}</span>
        <br />
        <span>Last Name: {lastName}</span>
        <br />
        <span>Dob: {dob}</span>
      </div>
    </Fragment>
  );
}

export default App;