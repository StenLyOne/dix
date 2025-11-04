export interface ButtonUI {
  label: string;
  link: string;
  type: ButtonType;
  color: ButtonColor;
}

type ButtonColor = "white" | "primary";
type ButtonType = "default" | "arrow-right" | "arrow-bottom";

export interface CardUI {
  heading?: string;
  paragraph?: string;
  image: MediaUI;
  icon: MediaUI;
}

export interface ContentUI {
  paragraph: string;
}

export interface MediaUI {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

export interface CardProp {
  heading: string;
  paragraph: string;
  image?: MediaUI;
  icon?: MediaUI;
}
