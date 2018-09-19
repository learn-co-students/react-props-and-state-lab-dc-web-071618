import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petProp.gender === 'female' ? '♀' : '♂'}
            {this.props.petProp.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petProp.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petProp.age}</p>
            <p>Weight: {this.props.petProp.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petProp.isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(this.props.petProp.id)}>Adopt pet</button>}


        </div>
      </div>
    )
  }
}

export default Pet
