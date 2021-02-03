import React from 'react'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { current, value } = this.props

    return (
      <form>
        <input
          type="text"
          placeholder="I'm looking for..."
          onChange={this.handleChange}
        >
          {value}
        </input>
        <button className="closeIcon" type="reset"></button>
      </form>
    )
  }
}
