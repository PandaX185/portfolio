"use client";
import ChildhoodBlock from "@/components/ChildhoodBlock";
import EndCollegeBlock from "@/components/EndCollegeBlock";
import IntroductionBlock from "@/components/IntroductionBlock";
import MidCollegeBlock from "@/components/MidCollegeBlock";
import PostCollegeBlock from "@/components/PostCollegeBlock";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="font-mono bg-gray-950 text-white animate-fadeIn pb-4">
      <div>
        <IntroductionBlock />
      </div>
      <div className="w-full text-center my-40 text-4xl text-gray-500">
        <ReactTyped
          className="text-pink-600"
          strings={["'"]}
          showCursor={false}
        />
        <ReactTyped
          strings={["Childhood"]}
          showCursor={false}
          typeSpeed={60}
          startWhenVisible={true}
        />
      </div>
      <div>
        <ChildhoodBlock />
      </div>
      <div className="w-full text-center my-40 text-4xl text-gray-500">
        <ReactTyped
          className="text-pink-600"
          strings={["'"]}
          showCursor={false}
        />
        <ReactTyped
          strings={["Mid college"]}
          showCursor={false}
          typeSpeed={60}
          startWhenVisible={true}
        />{" "}
      </div>
      <div>
        <MidCollegeBlock />
      </div>
      <div className="w-full text-center my-40 text-4xl text-gray-500">
        <ReactTyped
          className="text-pink-600"
          strings={["'"]}
          showCursor={false}
        />
        <ReactTyped
          strings={["Graduation"]}
          showCursor={false}
          typeSpeed={60}
          startWhenVisible={true}
        />
      </div>
      <div>
        <EndCollegeBlock />
      </div>
      <div className="w-full text-center my-40 text-4xl text-gray-500">
        <ReactTyped
          className="text-pink-600"
          strings={["'"]}
          showCursor={false}
        />
        <ReactTyped
          strings={["After college..."]}
          showCursor={false}
          typeSpeed={60}
          startWhenVisible={true}
        />
      </div>
      <div>
        <PostCollegeBlock />
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
          <a
            href="https://discord.com/channels/@me/636240359508279342"
            target="_blank"
          >
            <FaDiscord
              className="size-10 p-2 rounded-lg bg-black"
              color="white"
            />
          </a>
          <a href="https://x.com/PandaX185" target="_blank">
            <FaX className="size-10 p-2 rounded-lg bg-black" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
