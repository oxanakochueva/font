import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInputChange = () => {
    const { handleInputChange } = this.props
    console.log('value', this.input.current.value)
    handleInputChange(this.input.current.value)
  }

  render() {
    const { defaultValues, handleResetSearch } = this.props
    const { searchRequest } = defaultValues

    const classes = classnames({
      closeIcon: true,
      none: searchRequest === ''
      // visible: searchRequest.length > 1
    })

    return (
      <form>
        <input
          type="text"
          placeholder="I'm looking for..."
          value={searchRequest}
          ref={this.input}
          onChange={this.handleInputChange}
        ></input>

        <button
          className={classes}
          type="reset"
          onClick={handleResetSearch}
        ></button>
      </form>
    )
  }
}
