import { Provider } from "react-redux";
import Main from "./components/pages/Main";
import { setupStore } from "./redux/store";

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
