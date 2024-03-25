// import Circles from '~/components/Circles';
import Header from "~/components/Header";
import Home from "~/components/Home";
import About from "~/components/About";
import History from "~/components/History";
import Vision from "~/components/Vision";
import Project from "~/components/Project";
import Expertise from "~/components/Expertise";
import Location from "~/components/Location";
import Inquiry from "~/components/Inquiry";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen  max-w-[1920px] relative mx-auto">
        <Header />
        <main>
          <Home />
          <About />
          <History />
          <Vision />
          <Project />
          <Expertise />
          <Location />
          <Inquiry />
        </main>
      </div>
      <Footer />
    </>
  );
}
