import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create the QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient to your app
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-center text-2xl font-bold my-4">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
