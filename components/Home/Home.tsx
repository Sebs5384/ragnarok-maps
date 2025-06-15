import { HomeProvider } from "../../context/HomeContext";
import HeroSection from "./HeroSection";
import LocateSection from "./LocateSection";
import HowItWorks from "./HowItWorks";
import BotSection from "./BotSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <HomeProvider>
      <main className={styles.home}>
        <HeroSection />
        <LocateSection />
        <HowItWorks />
        <BotSection />
      </main>
    </HomeProvider>
  );
};

export default Home;