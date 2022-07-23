import Nav from "./components/Nav";
import Main from "./components/Main";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack sx={{
      display: "flex",
      width: "100%",
      height: "100vh"
    }} direction="row">
      <Nav />
      <Main />
    </Stack>
  );
}

export default App;
