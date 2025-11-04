import { BlockUI } from "@types-content";
import { StrapiSection } from "@types-content";
import { registry } from "./registry";

export function mapSection(s: StrapiSection): BlockUI | null {
  const fn = s && registry[s.__component];
  return fn ? fn(s) : null;
}
