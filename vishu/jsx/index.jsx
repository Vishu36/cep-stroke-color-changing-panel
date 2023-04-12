const { Color } = require("scenegraph");
const { editDocument } = require("application");
const React = require("react");
const ReactDOM = require("react-dom");

function changeStrokeColor(colorValue) {
  return editDocument(() => {
    const selection = app.selection;
    if (selection.length !== 1) {
      return;
    }
    const selectedElement = selection[0];
    if (selectedElement.strokeEnabled) {
      selectedElement.stroke = new Color(colorValue);
    }
  });
}

function Slider(props) {
  const [value, setValue] = React.useState(props.value || 0);

  return (
    <input
      type="range"
      min={0}
      max={255}
      value={value}
      style={{ width: "100%" }}
      onChange={(e) => {
        setValue(e.target.value);
        changeStrokeColor(`rgb(${e.target.value}, ${e.target.value}, ${e.target.value})`);
      }}
    />
  );
}

function App() {
  return <Slider />;
}

const root = document.createElement("div");
root.style.height = "200px";
root.style.width = "300px";
document.body.appendChild(root);

ReactDOM.render(<App />, root);
