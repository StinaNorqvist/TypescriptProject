import { useEffect, useState } from "react";
import "./App.css";
import TrashIcon from "./Icons/TrashIcon";
import DogIcon from "./Icons/DogIcon";
import CatIcon from "./Icons/CatIcon";
import Profile from "./Profile";
import React from "react";
import FoodButton from "./FoodButton";

interface IDatabasePets {
  id: number;
  name: string;
  age: number;
  species: string;
}

function App(): JSX.Element {
  const [allPets, setALlPets] = useState<IDatabasePets[]>([]);
  const [newName, setName] = useState<string>("");
  const [newAge, setAge] = useState<number>(0);
  const [newSpecies, setSpecies] = useState<string>("");
  const [showProfile, setShowProfile] = useState<Boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // FETCH ALL PETS
  useEffect(() => {
    fetchAllPets();
  }, []);

  const fetchAllPets = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((data: IDatabasePets[]) => {
        setALlPets(data);
        console.log(data, "DATA");
      });
  };

  // POST NEW PET TO BACKEND
  const postNewPet = (newName: string, newAge: number, newSpecies: string) => {
    const data = {
      name: newName,
      age: newAge,
      species: newSpecies,
    };
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data: IDatabasePets[]) => {
        setALlPets(data);
        fetchAllPets();
      })
      .catch((error) => {
        console.log(error, "Failed posting a new pet");
      });
  };

  // DELETE A PET
  const deletePet = (id: number) => {
    fetch("/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data: IDatabasePets[]) => {
        setALlPets(data);
        fetchAllPets();
      })
      .catch((error) => {
        console.log(error, `Failed to delete pet with id ${id}`);
      });
  };

  function recieveProps(
    firstName: string,
    lastName: string,
    humanAge: number
  ): void {
    console.log(firstName, lastName, humanAge, "PARENT PROPS");
    setFirstName(firstName);
    setLastName(lastName);
  }

  return (
    <>
      {firstName && lastName && (
        <h1 className="firstHeader">
          Hello {firstName} <span />
          {lastName}!
        </h1>
      )}

      <button
        className="petsButton"
        onClick={() => setShowProfile(!showProfile)}
      >
        Click here to{" "}
        {showProfile ? "go to your profile!" : "see your animals!"}
      </button>

      {showProfile ? (
        <div className="inputContainer">
          <div className="inputContainer">
            <div className="headerContainer">
              <DogIcon />
              <h1 className="firstHeader">Add a new pet</h1>
              <CatIcon />
            </div>

            <input
              placeholder="Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Age"
              type="number"
              onChange={(event) => setAge(Number(event.target.value))}
            />
            <input
              placeholder="Species"
              type="text"
              onChange={(event) => setSpecies(event.target.value)}
            />

            <button
              type="submit"
              className="addButton"
              onClick={() => postNewPet(newName, newAge, newSpecies)}
            >
              Add a new pet
            </button>
          </div>

          <h1 className="secondHeader">Your pets</h1>
          <div className="petContainer">
            {allPets.map((pet) => (
              <div key={pet.id} className="petDiv">
                <p className="petName">{pet.name}</p>
                <p className="petSpecies">{pet.species}</p>
                <p className="petAge">{pet.age} years old</p>
                <button
                  className="trashButton"
                  key={pet.id}
                  onClick={() => deletePet(pet.id)}
                >
                  <TrashIcon />
                </button>
                <FoodButton />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Profile childProps={recieveProps} />
      )}
    </>
  );
}
export default App;
