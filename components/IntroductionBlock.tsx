import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const IntroductionBlock = () => {
  return (
    <div className="flex w-full h-screen items-center justify-around">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="lg:text-6xl md:text-4xl text-xl">It&rsquo;s</h1>
          <ReactTyped
            className="lg:text-6xl md:text-4xl text-xl text-pink-600"
            strings={["'PandaX", "'mouss3abbb", "'Abdullah"]}
            typeSpeed={100}
            backSpeed={80}
            backDelay={3000}
            showCursor={false}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>I&rsquo;m a 22 year old backend developer from Egypt.</p>
          <p>
            <em className="text-pink-600">Main Stack</em> includes Golang,
            NodeJS and Java.
          </p>
          <p>
            Lately I&rsquo;m experimenting with new technologies like{" "}
            <em className="text-pink-600">Elixir Phoenix</em> and{" "}
            <em className="text-pink-600">Laravel</em>.
          </p>
          <p>
            Also playing a little in the{" "}
            <em className="text-pink-600">frontend</em> using React and NextJS.
          </p>
        </div>
      </div>
      <div>
        <Image
          className="rounded-full lg:w-[20rem] lg:h-[20rem] lg:min-w-[19rem] md:min-w-[15rem] min-w-[10rem] md:w-[17rem] md:h-[16rem] w-[13rem] h-[11rem] border-2 border-pink-400 animate-pulse hover:animate-none hover:border-8 duration-200 hover:border-pink-20  0"
          src="/pfp.jpg"
          alt="Picture of the author"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default IntroductionBlock;
