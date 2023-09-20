import React, { useEffect } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./layout/AppWrapper";
import PageHeader from "./components/Layout/PageHeader";
import SussForm from "./pages/Suss Form";

function App() {
  return (
    <div>
      <AppWrapper>
        <SussForm />
      </AppWrapper>
    </div>
  );
}

export default App;
