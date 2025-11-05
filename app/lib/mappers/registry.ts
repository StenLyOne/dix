import type { BlockUI } from "@types-content";
import type {
  StrapiHero,
  StrapiWhyResolve,
  StrapiAccordion,
} from "@types-content";
import { mapHero } from "./sections/hero";
import { mapWhyResolve } from "./sections/whyResolve";
import { mapAccordion } from "./sections/accordion";

type Mapper<T> = (raw: T) => BlockUI | null;

export const registry = {
  "sections.hero": mapHero as Mapper<StrapiHero>,
  "sections.why-resolve-dtx": mapWhyResolve as Mapper<StrapiWhyResolve>,
  "sections.accordion": mapAccordion as Mapper<StrapiAccordion>,
};
