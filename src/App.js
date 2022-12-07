import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar dark color="primary">
          <div className="Container">
            <NavbarBrand href="/">
              <h2>Muhammad Naeem Raj</h2>
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default App;
