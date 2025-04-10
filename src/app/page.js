import Header from "../components/Header/header";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import AboutMe from "@/components/About/About";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/ProjectsSection";
import Testimonial from "@/components/Testimonials/TestimonialsSection";
import Contact from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen pt-20"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <Header />
      <main className="flex-grow">
        <Hero />
        <Carousel />

        <section id="sobre">
          <AboutMe />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="depoimentos">
          <Testimonial />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
