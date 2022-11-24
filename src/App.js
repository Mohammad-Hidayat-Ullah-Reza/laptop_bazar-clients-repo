import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
