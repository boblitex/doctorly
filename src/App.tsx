import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MedConatainer from "./containers/MedContainer";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>doctorly test</h1>
        </header>
        <MedConatainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
