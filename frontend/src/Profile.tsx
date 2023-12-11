import { useState } from "react";
import "./App.css";

import React from "react";

export interface IProfileProps {
  childProps: (firstName: string, lastName: string, humanAge: number) => void;
}

function Profile({ childProps }: IProfileProps): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [humanAge, setHumanAge] = useState<number>(0);

  function saveInfo(firstName: string, lastName: string, humanAge: number) {
    childProps(firstName, lastName, humanAge);
    console.log(firstName, lastName, humanAge, "CHILD PROPS");
  }

  return (
    <>
      <h1 className="firstHeader">Tell us more about yourself</h1>

      <div className="inputContainer">
        <input
          placeholder="First Name"
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          placeholder="Last Name"
          type="text"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          placeholder="Age"
          type="number"
          onChange={(event) => setHumanAge(Number(event.target.value))}
        />

        <button
          type="submit"
          className="addButton"
          onClick={() => saveInfo(firstName, lastName, humanAge)}
        >
          Save
        </button>
      </div>
    </>
  );
}
export default Profile;
