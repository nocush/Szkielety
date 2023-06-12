
import './App.css';
import { Provider } from "react-redux";
import configureStore from "@reduxjs/toolkit"
import Faq from "./reducers/Faq.jsx";
import combineReducer from "./reducers/combineReducers";

const store = configureStore({reducer: combineReducer});

const App = () => {
  return (
    <Provider store={store}>
      <Faq />
    </Provider>
  );
}

export default App;
