figma.showUI(__html__);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function showFonts(fonts) {
  figma.ui.postMessage({
    type: 'get-font-list',
    message: fonts,
  });

  let styles = [];

  fonts.forEach((font, i) => {
    styles.push(font.fontName.style);
  });

  styles = styles.filter(onlyUnique);

  console.log(styles);
}

figma.ui.onmessage = msg => {
  if (msg.type === 'create-rectangles') {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'create-rectangles',
      message: `Created ${msg.count} Rectangles`,
    });

    figma.closePlugin();
  }

  if (msg.type === 'get-font-list') {
    let fonts = figma.listAvailableFontsAsync();

    fonts.then(showFonts);
  }
};
