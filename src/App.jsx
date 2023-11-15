import "./App.css";
import { Hero } from "./components/main/hero/Hero";
import { Header } from "./components/header/Header";
import { SectionHeader } from "./components/main/section/SectionHeader";
import { Section } from "./components/main/section/Section";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionHeader />
      <Section />
    </>
  );
}

export default App;
