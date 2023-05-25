import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CompanyProps {
  logo: {
    /** @description Logo company */
    mobile: LiveImage;
    /** @description Image's alt */
    alt?: string;
  };
}

function Companies(props: CompanyProps) {
  return (
    <div class="flex justify-center items-center p-5 border-solid border-[1px] border-white">
      <Image
        class=""
        src={props.logo.mobile}
        alt={props.logo.alt}
        width={80}
        height={80}
      />
    </div>
  );
}

export default Companies;
