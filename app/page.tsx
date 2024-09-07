"use client";
import ChildhoodBlock from "@/components/ChildhoodBlock";
import EndCollegeBlock from "@/components/EndCollegeBlock";
import IntroductionBlock from "@/components/IntroductionBlock";
import MidCollegeBlock from "@/components/MidCollegeBlock";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const sectionStyle = "flex flex-col items-center justify-center h-screen";

  return (
    <div className="font-mono bg-gray-950 text-white animate-fadeIn">
      <div className={sectionStyle}>
        <IntroductionBlock />
      </div>

      <div className={sectionStyle}>
        <ChildhoodBlock />
      </div>

      <div className={sectionStyle}>
        <MidCollegeBlock />
      </div>
      <div className={sectionStyle}>
        <EndCollegeBlock />
      </div>
      <div className="fixed bottom-5 right-5">
        <div className="flex flex-row-reverse gap-2">
          <a
            href="https://www.linkedin.com/in/abdullah-aly-967635211/"
            target="_blank"
          >
            <FaLinkedinIn
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
          <a href="https://www.youtube.com/@pandax_185" target="_blank">
            <FaYoutube
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
          <a href="https://github.com/PandaX185" target="_blank">
            <FaGithub
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
          <a href="https://www.instagram.com/mouss3abbb" target="_blank">
            <FaInstagram
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
          <a href="https://www.facebook.com/a105ofc" target="_blank">
            <FaFacebook
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
