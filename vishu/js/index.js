const { Color } = require("scenegraph");

function changeStrokeColor(colorValue) {
  const selection = app.selection;
  if (selection.length !== 1) {
    return;
  }
  const selectedElement = selection[0];
  if (selectedElement.strokeEnabled) {
    selectedElement.stroke = new Color(colorValue);
  }
}

module.exports = {
  panels: {
    myPanel: {
      show(event) {
        const panel = event.node;
        panel.style.height = "200px";
        panel.style.width = "300px";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = 0;
        slider.max = 255;
        slider.value = 0;
        slider.style.width = "100%";
        slider.addEventListener("input", () => {
          const colorValue = slider.value;
          changeStrokeColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
        });

        panel.appendChild(slider);
      },
    },
  },
};
