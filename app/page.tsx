import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Profile from "./components/ProfileSideBar";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <TechStack />
      <Portfolio />
      <AboutMe />
      <ContactForm />
    </main>
  );
}
