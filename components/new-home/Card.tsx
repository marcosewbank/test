import type {
  Image as LiveImage,
  HTML,
} from "deco-sites/std/components/types.ts";
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
  text: HTML;
  /** @description text cta */
  overlayColor?: string;
  /** @description Overlay css */
  cta: string;
  /** @description card content background */
  backgroundColorContent: string;
  /** @description image orientation desktop */
  left?: boolean;
  /** @description Content alignment */
}

function Card(props: CardProps) {
  console.log("🚀 ~ file: Card.tsx:33 ~ Card ~ props:", props.card.left);

  const alignTextToLeft = props.card.left
    ? "flex-col lg:flex-row"
    : "flex-col-reverse lg:flex-row-reverse";

  return (
    <section class={`flex ${alignTextToLeft} md:max-w-[1170px] p-10`}>
      <div class="flex flex-col h-auto text-left text-sm text-color-card p-6 lg:p-16 relative z-50">
        {props.card?.overlayColor && (
          <div
            class={`absolute w-[125%] h-full ${
              props.card.left ? "lg:left-0" : "lg:right-0"
            } top-0 z-0`}
            style={{
              backgroundColor: props.card?.overlayColor,
            }}
          />
        )}
        <div class="z-50">
          <div dangerouslySetInnerHTML={{ __html: props.card.text }} />
          <button class="text-color-card text-left uppercase text-xs mt-2.5">
            {props.card.cta}
          </button>
        </div>
      </div>
      <div class="z-50">
        <Picture preload class="max-w-screen-sm">
          <Source
            src={props.image.mobile}
            width={304}
            height={260}
            media="(max-width: 767px)"
          />
          <Source
            src={props.image.desktop}
            width={650}
            height={510}
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
