import react from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./Pages/Table";
import FormPage from "./Pages/form";
import View from "./Pages/View";

function RoutePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/view" element={<View />} />
        <Route path="/form/:type" element={<FormPage />} />
      </Routes>
    </>
  );
}
export default RoutePage;
