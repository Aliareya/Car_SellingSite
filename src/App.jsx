import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StaticDataProvider } from "./context/StaticData";
import { ShopDataProvider } from "./context/ShopData";

function App() {
  return (
    <div className="w-full ">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeButton={false}
        closeOnClick
        rtl={false}
        theme="dark"
        toastClassName={() =>
          "relative flex p-4 rounded-lg bg-zinc-800 text-white shadow-xl border border-gray-500"
        }
        bodyClassName={() => "text-sm font-medium"}
      />

      {/* Main Componenet on site */}
      <StaticDataProvider>
        <ShopDataProvider>
          <AppRoutes />
        </ShopDataProvider>
      </StaticDataProvider>
    </div>
  );
}

export default App;
