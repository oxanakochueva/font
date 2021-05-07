import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { fieldAction, pairs, resetSearch, searchRequest } = this.props
    // console.log(searchRequest)

    const classes = classnames({
      closeIcon: true,
      none: searchRequest === undefined
      // visible: searchRequest.length > 1
    })

    return (
      <form>
        <input
          type="text"
          placeholder="I'm looking for..."
          onChange={fieldAction}
        ></input>
        <button className={classes} type="reset" onClick={resetSearch}></button>
      </form>
    )
  }
}
