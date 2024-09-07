import React from "react";

const EndCollegeBlock = () => {
  return (
    <div className="flex w-full px-4 gap-4 justify-evenly items-center">
      <div className="flex flex-col py-4 w-1/2 gap-2 justify-center">
        <h1 className="text-center">First Job</h1>
        <h1>
          Later on, I joined <em>GoPlace</em> as a full time Backend Engineer
        </h1>
        <p>
          I started working on a complex CRM system built as{" "}
          <em>microservices</em>.
        </p>
        <p>
          We used <em>Golang</em>, <em>PostgreSQL</em>, <em>gRPC/Protobuf</em>,{" "}
          <em>Redis</em> and <em>Websockets</em>.
        </p>
        <p>
          This was very challenging for me to work on such complex project as my
          first job. However, I learned a lot and gained a lot of experience. I
          worked there for over <em>8 months</em>. At the end, I decided to
          leave because I had to complete my military service.
        </p>
      </div>
      <div className="flex flex-col py-4 w-1/2 gap-2 justify-center">
        <h1 className="text-center">
          My graduation project &rsquo;<em>Mawruth</em>&rsquo;
        </h1>
        <p>
          <em>Mawruth</em> is a Software-as-a-Service that helps museum visitors
          to get a very unique experience in their visit. It provides a virtual{" "}
          {""}
          <em>tour guide</em> for the museum, and it also provides an{" "}
          <em>AI</em> feature to detect the masterpieces and give full detailed
          history of it. Powered by <em>Unity3D/ARCore</em>, it provides a
          unique <em>AR</em> experience for non-visitors to see the 3D object of
          the masterpiece in real life.
        </p>
        <p>
          I built the <em>backend</em> of the project using <em>NodeJS</em>,
          <em>NestJS</em> and <em>PostgreSQL</em> as the database.
        </p>
        <p>
          Used <em>AWS</em> as a cloud provider at first, then migrated to{" "}
          <em>Azure</em> and <em>NeonDB</em> as a serverless database.
        </p>
      </div>
    </div>
  );
};

export default EndCollegeBlock;
