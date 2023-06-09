import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<div id="body-wrap">
				<Pages />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
