import { Home, Cart, Login, ProductDetail, Purchases } from "./pages";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <HashRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product:id" element={<ProductDetail />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </HashRouter>
  );
}

export default App;
