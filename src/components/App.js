import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" component={() => <div> Home</div>} />
          <Route exact path="/Services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div> Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div> Mobile Apps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div> Websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div> Revolution</div>}
          />
          <Route exact path="/about" component={() => <div> About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div> Contact Us</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div> Estimate</div>}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
