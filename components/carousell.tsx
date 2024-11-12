"use client";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import companies from "@/data/companies.json";

const Carousell = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-6"
    >
      <CarouselContent className="flex gap-6 sm:gap-20 items-center ">
        {companies.map((company) => {
          return (
            <CarouselItem
              key={company.id}
              className="mx-2 py-5 text-4xl basis-1/3 lg:basis-1/6"
            >
              <span>{company.name.toWellFormed()}</span>
              {/* <Image src={company.path} width={100} alt="company" /> */}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Carousell;
