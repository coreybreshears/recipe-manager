import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RecipeList = lazy(() => import("./pages/RecipeList"));
const RecipeDetails = lazy(() => import("./pages/RecipeDetails"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
