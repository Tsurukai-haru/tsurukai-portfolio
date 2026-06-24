import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden" style={{ background: "linear-gradient(135deg, #fef6f0 0%, #f8f2ff 55%, #eef6ff 100%)" }}>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t px-8 py-6" style={{ borderColor: "#e8d8f0" }}>
      <p className="text-center text-[11px]" style={{ color: "#7a6888" }}>
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Tsurukai Haru — All rights reserved.
      </p>
    </footer>
  );
}
