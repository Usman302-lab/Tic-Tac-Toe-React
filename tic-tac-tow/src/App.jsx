import { Grid } from "./components/Grid/Grid";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Grid numberOfCards={9} />
    </>
  );
}

export default App;
