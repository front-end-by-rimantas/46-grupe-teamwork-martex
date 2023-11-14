import "./App.css";
import { Hero } from "./components/main/hero/Hero";
import { Header } from "./components/Header";
import { MarketingServices } from "./components/main/MarketingServices";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <MarketingServices />
    </>
  );
}
export default App;
