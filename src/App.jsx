import "./App.css";
import { Hero } from "./components/main/hero/Hero";
import { Header } from "./components/header/Header";
import { ServiceCard } from "./components/main/section/ServiceCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceCard />
    </>
  );
}

export default App;