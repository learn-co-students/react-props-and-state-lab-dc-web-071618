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

  onChangeType = (selection) => {
    //2. update state filters: type
    //spread operator makes a copy
    // console.log(selection)
    this.setState({
      filters: {
        ...this.state.filters,
        type: selection
      }
    })
  }

  handleFetch = () => {
    //3. fetch data and update state pets. Pass petsData as props to <PetBrowser />

    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
      .then(response => response.json())
      //need to set state to pets array on state - pets: []
      .then(petsData => this.setState({pets: petsData}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(petsData => this.setState({pets: petsData}))
    }
  }

  onAdoptPet = (id) => {
    //onAdoptPet passed as props from parent App to <PetBrowser /> to <Pet />
    //id passed as argument from call back function on <Pet />
    console.log('adopt', id)

    const adoptedPets = this.state.pets.map(pet => {
      //return the entire ternary operator, not just return pet. The ternary operator evaluates to an expression and expressions can't contain a return statement
      return (pet.id === id) ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets: adoptedPets})
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
              <Filters onChangeType={this.onChangeType}  onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
