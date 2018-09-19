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
    fetch('/api/pets').then(res => res.json()).then(json => this.setState({pets: json}))
  }
  changeFiltersType = (e) => {
    const newType = Array.from(e.target.children).filter(child => child.selected)[0].value
    debugger
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: newType
      })
    })
    
  }

  filterPets = () => {
    
    if(this.state.filters.type==='all'){
     
      fetch(`/api/pets`).then(res => res.json()).then(json => this.setState({pets: json}))
    }
    else {
   
      fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json()).then(json => this.setState({ pets: json }))

    }
    console.log(this.state.pets)
  }

  adoptPet = (id) => {
    const petsCopy = this.state.pets.slice()
    const pet = petsCopy.find(pet => pet.id===id)
    const petIndex = petsCopy.indexOf(pet)
    const splicedPet = petsCopy.splice(petIndex, 1)[0]
    splicedPet.isAdopted = !splicedPet.isAdopted
    petsCopy.splice(petIndex, 0, splicedPet)
    debugger
    this.setState({
      pets: petsCopy
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header" onClick={() => console.log(this.state.pets)}>React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.changeFiltersType}
              onFindPetsClick={this.filterPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
