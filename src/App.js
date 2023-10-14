import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyWork />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
