import "./App.css";
import Frontpage from "./components/frontpage";
import { Provider } from 'react-redux';
import { store } from "./redux/store";


function App() {
  

  return (
    <Provider store={store}>
      <Frontpage/>
    </Provider>
  );
}

export default App;
