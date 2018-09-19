import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

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

  onChangeType = (e) => {
    const filterType = e.target.value;
    this.setState({
      filters: {
        ...this.state.filters,
        type: filterType
      }
    })
  }

  onAdoptPet = (e) => {
    const specificPet = this.state.pets.map(pet => pet.id === e ? {...pet, isAdopted: true} : pet)
    this.setState({
      ...this.state,
        pets: specificPet
    })
  }

  fetchAllPets = () => {
    fetch(`/api/pets`)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  fetchPetsByType = type => {
    if (this.state.filters.type === 'all') {
      this.fetchAllPets()
    } else {
    fetch (`/api/pets?type=${type}`)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
    }
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
                onFindPetsClick={() => this.fetchPetsByType(this.state.filters.type)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                currentPetsArray={this.state.pets}
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
