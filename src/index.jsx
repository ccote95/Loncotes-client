import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/PatronList.jsx";
import PatronDetails from "./components/PatronDetails.jsx";
import PatronForm from "./components/EditPatronForm.jsx";
import CheckoutList from "./components/CheckoutList.jsx";
import AvailableMaterials from "./components/BrowseMaterials.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import OverDue from "./components/OverdueCheckouts.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
         <Route path="patrons">
           <Route index element={<PatronList/>}/>
           <Route path=":id" element ={<PatronDetails/>}/>
           <Route path =":id/edit" element ={<PatronForm/>}/>
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList/>}/>
          <Route path="overdue" element={<OverDue/>}/>
        </Route>
        <Route path="browse">
          <Route index element={<AvailableMaterials/>}/>
          <Route path=":id" element={<CheckoutForm/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
