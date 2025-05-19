'use client'
import Image from "next/image";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

import styles from "./page.module.css";
import { allAppData } from "@/lib/app_data/app_data";
import { AppCollapsed } from "@/lib/components/AppCollapsed/AppCollapsed";
import { useAppDetails } from "@/lib/contexts/hooks/useAppDetails";
import { AppExpanded } from "@/lib/components/AppExpanded/AppExpanded";
import { AnimatePresence } from "motion/react";

export default function Home() {

  const {selectedApp} = useAppDetails()
  
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <section id="personal_info" className={styles.personalInfo}>
          
          <div className={styles.nameContainer}>
            <h1>Edgar Martinez Chavez</h1>

            <div className={styles.personalLinks}>
              <button style={{background: "none", cursor: "pointer"}}> <FiMail /> Email</button>
              <a href="https://github.com/Edgar-M123" target="_blank"> <FiGithub /> Github</a>
              <a href="https://www.linkedin.com/in/edgar-m123" target="_blank"> <FiLinkedin /> LinkedIn</a>
            </div>

          </div>
          
          <Image
            className={styles.profilePic}
            src="/edgar_profile_pic.jpg"
            alt="Next.js logo"
            width={150}
            height={150}
            priority
          />
        </section>
        

        <section id="about_me" className={styles.ctas}>
          All I want is to make something cool that people like and use.<br/><br/>
          I tell my girlfriend that one day, I'll be building things like Iron Man.<br/><br/>
          She laughs.
        </section>

        <section id="my_apps" className={styles.appsContainer}>
          <h2>My Apps</h2>

          <div style={{display: 'flex', width: "100%", overflowX: "scroll", scrollbarWidth: "thin", scrollbarColor: "grey black"}}>
            {Object.entries(allAppData).map((value, index) => <AppCollapsed key={index} app_id={value[0]} isSelected={selectedApp == value[0]} />) }
          </div>

          <AnimatePresence>
            {selectedApp && <AppExpanded app_id={selectedApp} />}
          </AnimatePresence>


        </section>




      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
