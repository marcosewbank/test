import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface TopBannerProps {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
}

function TopBanner(props: TopBannerProps) {
  const { title, subtitle, image } = props;
  return (
    <div class="grid grid-cols-1 grid-rows-1 h-screen">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          src={image.mobile}
          width={360}
          height={667}
          media="(max-width: 767px)"
        />
        <Source
          src={image.desktop}
          width={1440}
          height={200}
          media="(min-width: 767px)"
        />
        <img
          class="w-full h-full md:object-cover"
          src={image.desktop}
          alt={image.alt ?? title}
        />
      </Picture>
      <div class="container flex flex-col justify-evenly max-h-[70%] max-w-[80%] items-start col-start-1 col-span-1 row-start-1 row-span-1 w-full">
        <h1>
          <p class="text-white text-4xl">{title}</p>
        </h1>
        <div class="flex justify-end">
          <h2 class="max-w-[70%]">
            <span class="text-white text-sm">{subtitle}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
