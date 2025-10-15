import { Outlet } from "react-router-dom";
import Home from "./Home";
import { CartProvider } from "./cartcontext";

function App() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default App;
