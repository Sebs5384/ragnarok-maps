import { HomeProvider } from "../context/HomeContext";
import HeroSection from "../components/Home/HeroSection";
import LocateSection from "../components/Home/LocateSection";
import HowItWorks from "../components/Home/HowItWorks";
import BotSection from "../components/Home/BotSection";
import styles from "../components/Home/Home.module.css";

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