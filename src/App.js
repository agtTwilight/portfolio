import About from "./pages/About"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="App">
      <Header />
      <section id="body-wrap">
        <Home />
        {/* <About /> */}
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
