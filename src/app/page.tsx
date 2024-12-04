import Hero from "../app/components/hero";
import Skill from "../app/components/skills";
import Contact from "../app/components/contact";
import About from "../app/components/about";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}