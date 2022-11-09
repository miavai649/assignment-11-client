import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div className="font">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
