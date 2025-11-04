import { BlockUI } from "@types-content";
import { mapHero } from "./sections/hero";
import { mapWhyResolve } from "./sections/whyResolve";

type Mapper = (raw: any) => BlockUI | null;

export const registry: Record<string, Mapper> = {
  "sections.hero": (raw) => mapHero(raw),
  "sections.why-resolve-dtx": (raw) => mapWhyResolve(raw),
};
