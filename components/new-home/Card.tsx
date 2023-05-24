import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface CardProps {
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
  card: CardContent;
}

export interface CardContent {
  /** @description card section background */
  sectionBackground: string;
  /** @description text card */
  text: string;
  /** @description text cta */
  cta: string;
  /** @description card content background */
  backgroundColorContent: string;
  /** @description image orientation desktop */
  left?: boolean;
  /** @description image orientation mobile */
  top?: boolean;
}

function Card(props: CardProps) {
  return <div>{props.card.text}</div>;
}

export default Card;
