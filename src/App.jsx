import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Routing from "./route/route";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing></Routing>
      </Provider>
    </div>
  );
}

export default App;
