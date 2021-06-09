import React from 'react'
import ReactDOM from 'react-dom'

import A_DesignerImage from '../01_Atoms/A_DesignerImage'
import A_Text from '../01_Atoms/A_Text'

export default class M_DesignerListItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { designer, families } = this.props
    const { userpic, name, company, description } = designer

    return (
      <div className="M_DesignerListItem">
        <div className="W_DesignerMainInfo">
          <A_DesignerImage image={userpic} />

          <div className="C_DesignerDescription">
            <A_Text type="h4" text={name} fontFamily={families[0]} />
            <A_Text type="small" text={company} fontFamily={families[1]} />
          </div>
        </div>

        <A_Text type="p" text={description} fontFamily={families[1]} />
      </div>
    )
  }
}
