import { Routes, Route, BrowserRouter } from "react-router-dom";

import Authorization from "./../../../pages/ui/authorization/index";
import Home from "./../../../pages/ui/houm/ui/index";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
};