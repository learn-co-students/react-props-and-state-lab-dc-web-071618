import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.currentPetsArray.map(pet => <Pet petProp={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>)}
      </div>
    )
  }
}

export default PetBrowser
