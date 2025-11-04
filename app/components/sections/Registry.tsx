import { Hero } from "./Hero/Hero";
import type { BlockUI } from "@types-content";
import { WhyResolve } from "./WhyResolve/WhyResolve";

export function renderBlock(block: BlockUI, key: number) {
  switch (block?.type) {
    case "why-resolve-dtx":
      return <WhyResolve key={key} data={block} />;
    case "hero":
      return <Hero key={key} data={block} />;
  }
}
