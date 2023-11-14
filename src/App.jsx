import "./App.css";
import { Hero } from "./components/main/hero/Hero";
import { Header } from "./components/header/Header";
import { ServiceItem } from "./components/main/ServiceItem";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceItem />
    </>
  );
}

export default App;
