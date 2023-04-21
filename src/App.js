import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="body-wrap">
        <Home />
      </section>
      <Footer />
    </div>
  );
}

export default App;
