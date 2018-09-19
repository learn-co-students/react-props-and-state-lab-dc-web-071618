import React from 'react'

class Pet extends React.Component {
  render() {
    //5. this.props is the individual petData passed as props from <PetBrowser />. Use props to display info on card
      console.log('pet card', this.props)

    //6. gender - condition ? true : false

    //set onAdoptPet as an arrow function, so that when add parenthesis onAdoptPet() will not invoke it when loaded, so will be able to add id as an argument to be used in parent App on the actual onAdoptPet function

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}

          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {(this.props.pet.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)}


        </div>
      </div>
    )
  }
}

export default Pet
