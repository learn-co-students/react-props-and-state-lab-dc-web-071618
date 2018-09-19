import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    //4. this.props is the filtered array of pets, comes from App component, passed as props in <PetBrowser pets={this.state.pets}/>
    console.log('filtered array of pets', this.props)

    //can set <Pet /> component inside map and pass props!

    //onAdoptPet is a prop from App, so need this.props.onAdoptPet (need props) because it's not a function in PetBrowser. If onAdoptPet was a function in here, would not need props (just this.onAdoptPet)
    return (
      <div className="ui cards">
        {this.props.pets.map(petData =>
          <Pet pet={petData} onAdoptPet={this.props.onAdoptPet}/>
        )}
      </div>
    )
  }
}

export default PetBrowser
