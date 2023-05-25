import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

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
  return (
    <section
      class="p-4"
      style={
        props.card.sectionBackground
          ? { backgroundColor: `${props.card.sectionBackground}` }
          : undefined
      }
    >
      <div>
        <p class="text-sm text-color-card">{props.card.text}</p>
        <button class="text-color-card uppercase text-xs mt-2.5">
          {props.card.cta}
        </button>
      </div>
      <div>
        <Picture preload class="">
          <Source
            src={props.image.mobile}
            width={304}
            height={260}
            media="(max-width: 767px)"
          />
          <Source
            src={props.image.desktop}
            width={1440}
            height={200}
            media="(min-width: 767px)"
          />
          <img
            class="w-full"
            src={props.image.desktop}
            alt={props.image.alt ?? ""}
          />
        </Picture>
      </div>
    </section>
  );
}

export default Card;
