import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllForms from "./components/AllForms";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="w-full">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allforms" element={<AllForms />} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
