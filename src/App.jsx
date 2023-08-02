import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ApplicationForm from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="w-full">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <ApplicationForm />
      </QueryClientProvider>
    </div>
  );
}

export default App;
