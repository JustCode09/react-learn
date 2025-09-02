// Importing necessary components from react-router-dom
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink, 
  Outlet, 
  useParams 
} from "react-router-dom";

// ----------------------
// 1. Basic Page Components
// ----------------------
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

// ----------------------
// 2. Nested Routes Example (Products Page with subpages)
// ----------------------
function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      {/* Local navigation for child routes */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="car">Cars</Link> |{" "}
        <Link to="bike">Bikes</Link>
      </nav>

      {/* The <Outlet /> renders child routes here */}
      <Outlet />
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

// ----------------------
// 3. Active Link Styling Example
// ----------------------
// NavLink automatically detects if a link is "active"
// We can style it differently using a function
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px"
});

// ----------------------
// 4. URL Parameters Example
// ----------------------
// useParams() lets us grab dynamic values from the URL
function Info() {
  const { firstname } = useParams(); // Example: /customer/John → firstname = "John"
  return <h1>Hello, {firstname}!</h1>;
}

// ----------------------
// 5. Main App Component
// ----------------------
function App() {
  return (
    // BrowserRouter must wrap the whole app
    <BrowserRouter>
      {/* Global Navigation Menu */}
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink> |{" "}
        <NavLink to="/products" style={navLinkStyles}>Products</NavLink> |{" "}
        <NavLink to="/customer/Emil" style={navLinkStyles}>Emil</NavLink> |{" "}
        <NavLink to="/customer/Tobias" style={navLinkStyles}>Tobias</NavLink> |{" "}
        <NavLink to="/customer/Linus" style={navLinkStyles}>Linus</NavLink>
      </nav>

      {/* Define all routes here */}
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Nested Routes Example */}
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>

        {/* URL Parameters Example */}
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export App so it can be rendered in index.js
export default App;
