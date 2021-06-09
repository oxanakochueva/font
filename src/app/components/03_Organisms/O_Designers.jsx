import React from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../01_Atoms/A_Text'
import M_DesignerListItem from '../02_Molecules/M_DesignerListItem'

export default class O_Designers extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, font } = this.props
    const { families } = pair
    const { fontDesigners } = font
    const designerListElements = []
    let heading = 'Designer'

    if (fontDesigners.length > 1) {
      heading = 'Designers'
    }

    fontDesigners.forEach((designer, i) => {
      designerListElements.push(
        <M_DesignerListItem designer={designer} families={families} key={i} />
      )
    })

    return (
      <div className="O_Designers">
        <A_Text type="h3" text={heading} fontFamily={families[0]} />
        <div className="C_DesignerList">{designerListElements}</div>
      </div>
    )
  }
}
