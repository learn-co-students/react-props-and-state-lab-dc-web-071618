import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const PETSSTATE = []

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newState) => {
    this.setState({
      filters:{
        type: newState
      }
    })
  }

  onFindPetsClick = () => {
    let fetchedPets = []
    let filterState = this.state.filters.type

    // debugger

    if (filterState === "all"){
      fetch("/api/pets")
      .then(res => res.json())
      .then(jsonData => {this.setNewPets(jsonData)})
    } else {
      fetch(`/api/pets?type=${filterState}`)
      .then(res => res.json())
      .then(jsonData => {this.setNewPets(jsonData)})
    }
  }

  setNewPets = (jsonData) => {
    this.setState({
      pets: jsonData
    })
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        let newPet = {
          ...pet,
          isAdopted: true
        }
        return newPet;
      } else {
        return pet
      }
    })
    this.setState({pets: updatedPets})
  }

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
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
