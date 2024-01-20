import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import Home from "./../../../pages/houm";
import { Authorization } from "./../../../pages/authorization/ui";

export const AppRoute = () => {
  return (
   <>
      <Routes>
      <Route path="/AUTH" element={<Authorization />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
  </>
  );
};