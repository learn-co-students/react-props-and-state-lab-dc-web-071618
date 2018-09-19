import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  updatedPetsState = id => {
    return this.state.pets.map(pet => {
      if (pet.id === id) {
        let newPet = pet;
        newPet.isAdopted = true;
        return newPet;
      } else {
        return pet;
      }
    });
  };

  onAdoptPet = id => {
    this.setState({
      pets: this.updatedPetsState(id)
    });
  };

  onChangeType = type => {
    this.setState({
      filters: {
        type: type
      }
    });
  };

  getAllPets() {
    fetch("/api/pets")
      .then(r => r.json())
      .then(json => {
        this.setState({
          pets: Array.from(json)
        });
      });
  }

  getPetsType() {
    fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          pets: Array.from(json)
        });
      });
  }

  onFindPetsClick = () => {
    this.state.filters.type === "all" ? this.getAllPets() : this.getPetsType();
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
