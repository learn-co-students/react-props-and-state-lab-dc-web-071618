import React from 'react'



class Pet extends React.Component {
  render() {
    // debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.p.gender === "female" ? '♀' : '♂')}
            {this.props.p.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.p.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.p.age}</p>
            <p>Weight: {this.props.p.weight}</p>
          </div>
        </div>
        <div className="extra content">

          <button className={(!this.props.p.isAdopted ? "ui disabled button" : "ui primary button")}>Already adopted</button>

          <button onClick={() => this.props.onAdoptPet(this.props.p.id)} className={(this.props.p.isAdopted ? "ui disabled button" : "ui primary button")}>Adopt pet</button>

        </div>
      </div>
    )
  }
}

export default Pet
