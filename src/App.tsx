import { Provider } from "react-redux";
import { store } from "./store";
import { ProductList } from "./pages";

export const App = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};
