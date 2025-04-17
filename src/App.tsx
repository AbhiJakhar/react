import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setalertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setalertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="success" onClick={() => setalertVisibility(true)}>
        This Button
      </Button>
    </div>
  );
}

export default App;
