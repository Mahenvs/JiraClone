import faq from "@/data/faq.json";

import Carousell from "@/components/carousell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  AxeIcon,
  BotIcon,
  BoxIcon,
  BugIcon,
  CircuitBoardIcon,
  DamIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Kanban Board",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <CircuitBoardIcon size={60} />,
  },
  {
    title: "Sprint Planning",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <BugIcon size={60} />,
  },
  {
    title: "Kanban Board",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <AxeIcon size={60} />,
  },
  {
    title: "Reporting ",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <BoxIcon size={60} />,
  },
  {
    title: "Kanban Board",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <BotIcon size={60} />,
  },
  {
    title: "Sprint Planning",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nesciunt est illo nulla provident fugit quas modi. Ullam facilis
            totam natus, ratione provident labore laboriosam sit quo repellat
            voluptatum cumque.`,
    icon: <DamIcon size={60} />,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container p-20 text-center sm:px-6 sm:mx-auto">
        <h1 className="gradient-text text-6xl mb-10 ">
          JIRA CLONE - Power your project with this Management Solution
        </h1>

        <Link href="/sign-in">
          <Button size={"lg"} className="mr-4" variant={"default"}>
            Get Started
          </Button>
        </Link>
        <Link href={"/learn"}>
          <Button variant={"link"}>Learn more</Button>
        </Link>
      </section>
      <section className="flex flex-col bg-[#090e1d] p-10 ">
        <h2 className="text-3xl font-bold text-center py-6 mb-5">
          Key Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 py-12">
          {features?.map((feature, index) => {
            return (
              <Card key={feature.title + index} className="p-5 bg-slate-700 ">
                <CardContent className="px-0 text-blue-300 text-start py-2 text-xl">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                </CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center py-6 mb-5">
          Trusted Partners
        </h2>
        <Carousell></Carousell>
      </section>
      <section className="py-5 px-5">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold text-center py-6">
            {" "}
            Frequently asked questions
          </h3>
          {faq.map((question, index) => {
            return (
              <Accordion
                key={`item-${index}`}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </section>
    </div>
  );
}
