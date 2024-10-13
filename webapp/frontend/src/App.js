import PropertyCard from "./components/Property_Card";
import Search from "./components/Search";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <Search />
      <Category />
      <About />
      <PropertyCard />
      <Contact />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
