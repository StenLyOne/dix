import { Hero } from "./Hero/Hero";
import type { BlockUI } from "@types-content";
import { WhyResolve } from "./WhyResolve/WhyResolve";
import { Accordion } from "./Accordion/Accordion";

export function renderBlock(block: BlockUI, key: number) {

  switch (block?.type) {
    case "hero":
      return <Hero key={key} data={block} />;
    case "why-resolve-dtx":
      return <WhyResolve key={key} data={block} />;
    case "accordion":
      return <Accordion key={key} data={block} />;
  }
}
