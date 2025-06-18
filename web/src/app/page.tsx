import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Main from "@/components/sections/main"
import Nav from "@/components/sections/nav";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";

export default function Home() {
  return (
    <div className="scrollbar flex flex-col items-center justify-center min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-950 dark:to-neutral-900">
      
      <Main />
      <About/>
      <Stack/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}
