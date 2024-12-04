import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Burger,
  MantineProvider,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <MantineProvider theme="dark">
      <Text bg="gray">My App</Text>
        <AppLayout/>
    </MantineProvider>
  );
}

export default App;
