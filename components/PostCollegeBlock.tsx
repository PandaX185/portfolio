import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  CardFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const PostCollegeBlock = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-screen p-4">
      <CardBlock
        title="Library Management API"
        description=" Full library management api built with Java, Spring Boot, JPA, AOP, Mockito, JUnit and
          PostgreSQL."
        imageUrl="/library-api.png"
        link="https://github.com/PandaX185/library-management"
      />
      <CardBlock
        title="Task Manager"
        description=" Fullstack task manager built with Elixir, Phoenix, LiveView, HEEX and PostgreSQL"
        imageUrl="/task-manger.png"
        link="https://github.com/PandaX185/task-manager"
      />
      <CardBlock
        title="Shared Code Editor"
        description=" Collaborative realtime code editor built with Hasura, GraphQL, NextJS and Apollo"
        imageUrl="/shared-editor.png"
        link="https://github.com/PandaX185/shared-editor"
      />
      <CardBlock
        title="Realtime Chat App"
        description="Realtime chat application built with React, NodeJS, Express, SocketIO and SQLite"
        imageUrl="/realtime-chat.png"
        link="https://github.com/PandaX185/real-time-chat"
      />
      <CardBlock
        title="SAS Viya"
        description="Started learning SAS Viya and building some visual analytics projects with it."
        imageUrl="/sas.png"
        link="https://github.com/PandaX185/real-time-chat"
      />
    </div>
  );
};

export default PostCollegeBlock;

interface CardBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

function CardBlock({ title, description, imageUrl, link }: CardBlockProps) {
  return (
    <Card>
      <CardBody>
        <Image
          className="h-44 w-auto rounded-sm hover:border-blue-400 hover:border-8 duration-200 hover:rounded-none"
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
        />
        <Stack spacing={3} mt={8}>
          <Heading className="text-lg text-blue-400">{title}</Heading>
          <Text className="text-gray-500 italic">{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter className="mt-6">
        <a
          href={link}
          target="_blank"
          className="bg-pink-500 px-8 py-2 rounded-full"
        >
          Visit
        </a>
      </CardFooter>
    </Card>
  );
}
