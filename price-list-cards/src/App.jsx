import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import Navbar from "./components/Navbar/Navbar";
import PhoneBarChart from "./components/PhoneBarChart/PhoneBarChart";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <h1 className="text-7xl text-purple-600 mt-8 mb-8 text-center ">
        Welcome to Tailwind CSS{" "}
      </h1> */}
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBarChart></PhoneBarChart>
    </>
  );
}

export default App;
