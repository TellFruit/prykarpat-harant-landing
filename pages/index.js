import { withLayout } from "../src/layout/Layout";
import { MainSection } from "../src/sections/MainSection/MainSection";
import About from "../src/sections/About/About";
// import Contacts from "../src/sections/Contacts/Contacts";
import Activities from "../src/sections/Activities/Activities.jsx";

function Home() {
  return (
    <>
      <MainSection />
      <About />
      <Activities />
    </>
  );
}

export default withLayout(Home);
