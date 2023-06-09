import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../store";
import { Checkout, ProductList } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
