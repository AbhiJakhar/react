import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Button color="success" onClick={() => console.log("Clicked")}>
        This Button
      </Button>
    </div>
  );
}

export default App;
