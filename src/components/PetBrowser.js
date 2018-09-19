import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

// passAdoptPet = () => {
//   console.log("onAdoptPet was called 🐶 🐱 🐷")
// }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} p={pet} Pet key={pet.id} />)}
      </div>
    )
  }
}

export default PetBrowser
