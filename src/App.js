import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CellarProvider } from "./store";
import { PageContainer } from "./components";
import GlobalStyles from "./GlobalStyles";

const Listing = lazy(() => import("./screens/Listing"));
const Item = lazy(() => import("./screens/Item"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
        <CellarProvider>
          <PageContainer>
            <Route path="/beer/:id" component={Item} />
            <Route exact path="/" component={Listing} />
          </PageContainer>
        </CellarProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
