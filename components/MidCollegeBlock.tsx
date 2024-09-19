import React from "react";

const MidCollegeBlock = () => {
  return (
    <div className="flex flex-col gap-2 px-4 w-full items-center justify-start">
      <p className="text-2xl">
        <em>Main topics I studied </em> include OS, Databases, Networks, and
        Software Engineering.
      </p>
      <p>
        At first I joined the EgFwd program as a{" "}
        <em>Native Android Developer</em>.
      </p>
      <p>
        I built a couple of apps and learned a lot about Android development.
        Apps like <em>Hawadeet</em>, <em>Tic Tac Toe</em>,{" "}
        <em>Word Guessing Game</em> and <em>Personal Portfolio</em>.
      </p>
      <h1 className="text-2xl">Career Shift</h1>
      <p>
        I decided to shift my career to <em>Web Development</em> because I found
        my passion in it.
      </p>
      <p>
        Joined <em>Microsystem Hotspot</em> as a Backend Intern working with{" "}
        <em>Golang</em>, <em>MongoDB</em>, <em>OpenWrt</em>, <em>MQTT</em> and
        maintaing an on premise <em>CentOS</em> server.
      </p>
      <p>
        We worked on a centralized controller for hotspot management that could
        coordinate multiple access points running OpenWrt. We also made a
        controller dashboard to provide full control over the access points.
      </p>
      <br />
      <p className="text-gray-500 italic">
        I used GNU/Linux as my main OS for 4 years and have experience in{" "}
        <em>Shell(Bash,Zsh,Fish)</em> and several distros like <em>Arch</em>,{" "}
        <em>Fedora</em> and <em>Debian</em>. I&rsquo;m fond of tinkering with my
        system and trying new things.
      </p>
    </div>
  );
};

export default MidCollegeBlock;
