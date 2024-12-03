import { useState } from "react";
import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Text c={red}>My App</Text>
    </MantineProvider>
  );
}

export default App;
