import Body from "./components/pages/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
