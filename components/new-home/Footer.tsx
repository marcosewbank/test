import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface FooterProps {
  /** @description Title Footer*/
  title: string;
  /** @description subTitle Footer */
  subtitle: string;
  /** @description description Footer */
  description: string;
  /** @description logo Footer */
  logoFooter: LiveImage;
  /** @description logo Footer */
  alt?: string;
}

function Footer(props: FooterProps) {
  return (
    <section>
      <div class="h-screen flex justify-center flex-col px-8">
        <p class="pb-8 text-xl">{props.title}</p>
        <span class="text-sm">{props.subtitle}</span>
        <strong class="text-sm mt-5">{props.description}</strong>
      </div>
      <div class="m-5 flex justify-end">
        <Image
          class="m-5"
          src={props.logoFooter}
          alt={props.alt}
          width={180}
          height={40}
        />
      </div>
    </section>
  );
}

export default Footer;
