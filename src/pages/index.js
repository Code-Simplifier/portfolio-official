import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - @shabad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-super">
        <div className="bg-site">
          <Header />
          <Hero />
        </div>
        <div className="">
          <Nav />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <div className="h-[4000px]"></div>
        </div>
      </div>
    </>
  );
}
