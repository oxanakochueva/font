rowCenterSpaceBetween = () => {
  let frame = figma.createFrame()
  frame.fills = background
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  frame.itemSpacing = 6
  return frame
}

////
rowCenterCenter = () => {
  let frame = figma.createFrame()
  // frame.cornerRadius = 7
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.itemSpacing = 6
  frame.fills = background
  return frame
}
////
columnFixed = () => {
  let frame = figma.createFrame()
  // pairInfoFrame.x = 44
  // pairInfoFrame.y = 97
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.layoutAlign = 'STRETCH'
  // pairInfoFrame.itemSpacing = 60 //не у всех
  // pairInfoFrame.paddingTop = 20 //не у всех
  // pairInfoFrame.paddingRight = 40 //не у всех
  // pairInfoFrame.paddingBottom = 40 //не у всех
  // pairInfoFrame.paddingLeft = 40 //не у всех
  frame.fills = background
  return frame
}

columnAuto = () => {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background
  return frame
}

////////текст кнопки назад
let buttonBackText = figma.createText()
buttonBackText.characters = 'Back'
buttonBackText.fontSize = 14
buttonBackText.fills = black

//////заголовок
headingText = heading => {
  let name = figma.createText()
  name.fontSize = 40
  name.fontName = { family: fontElements[0].heading, style: 'Bold' }
  name.fills = black
  name.characters = heading
  return name
}
//////подзаголовок
subheadingText = text => {
  let name = figma.createText()
  name.fontSize = 20
  name.fontName = { family: fontElements[0].heading, style: 'Bold' }
  name.fills = black
  name.characters = text
  return name
}

//////подпись
subText = text => {
  let name = figma.createText()
  name.fontSize = 10
  name.fontName = { family: fontElements[1].heading, style: 'Regular' }
  name.fills = black
  name.characters = text
  return name
}

//основной текст (добавить цикл)
mainText = text => {
  paragraph = figma.createText()
  paragraph.fontSize = 16
  paragraph.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  paragraph.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  paragraph.layoutAlign = 'STRETCH'
  paragraph.fills = black
  paragraph.characters = text
}
