import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Workflow from "./components/Workflow";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero: scroll-linked animation + text overlay */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <Tools />
      <Projects />
      <Workflow />
      <Experience />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center">
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Niraj Pande. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
