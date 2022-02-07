import PageLayout from "./components/compounds/PageLayout";
import Homescreen from "./pages/Homescreen";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<PageLayout>
				<Homescreen />
			</PageLayout>
		</Provider>
	);
}

export default App;
