import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { actions, pairs, defaultValues } = this.props
    const { searchRequest } = defaultValues
    const { findFont, resetSearch } = actions

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
          onChange={findFont}
        ></input>
        <button className={classes} type="reset" onClick={resetSearch}></button>
      </form>
    )
  }
}
