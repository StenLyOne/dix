import { ButtonUI } from "@types-ui";
import { ContentUI } from "@types-ui";
import { CardUI } from "@types-ui";
import { MediaUI } from "@types-ui";

export type HeroUI = {
  type: "hero";
  heading?: string;
  sub_heading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  image_sreens_desktop: MediaUI | null;
  image_watch_desktop: MediaUI | null;
  image_mobile: MediaUI | null;
};

export type WhyResolveUI = {
  type: "why-resolve-dtx";
  heading?: string;
  subHeading?: string;
  content?: ContentUI[];
  ctas?: ButtonUI[];
  cards: CardUI[];
};

export type BlockUI = HeroUI | WhyResolveUI | null;

export interface PageUI {
  slug: string;
  title: string;
  sections: BlockUI[];
}
