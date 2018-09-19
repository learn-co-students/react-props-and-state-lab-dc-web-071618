import React from 'react'

class Filters extends React.Component {

  handleChange = (event) => {
    //1. get value selected from filter
    //all of this can be written inside <select onChange={(event) => {this.props.onChangeType(event.target.value)}}
    let selection = event.target.value
    this.props.onChangeType(selection)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
