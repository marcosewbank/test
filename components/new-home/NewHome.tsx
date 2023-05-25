import TopBanner, { TopBannerProps } from "./TopBanner.tsx";
import Card, { CardProps } from "./Card.tsx";
import Companies, { CompanyProps } from "./Companies.tsx";

import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

import { useId } from "preact/hooks";

export interface Props {
  topBanner: TopBannerProps;
  cardProps: CardProps[];
  companyProps: CompanyProps[];
}

function Dots({ cardProps }: { cardProps: CardProps[] }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-1 z-10 row-start-4">
        {cardProps?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div class="w-3.5 h-3.5 rounded-full border-solid border-2 border-dot bg-transparent group-disabled:bg-dot" />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function NewHome(props: Props) {
  const id = useId();
  return (
    <section>
      <TopBanner {...props.topBanner} />
      <div id={id}>
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {props?.cardProps?.map((card: CardProps, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <Card {...card} />
            </Slider.Item>
          ))}
        </Slider>
        <Dots cardProps={props.cardProps} />
        <SliderJS rootId={id} infinite />
      </div>
      <div class="bg-black grid grid-cols-3 gap-2 py-10">
        {props.companyProps?.map((companyProps: CompanyProps) => (
          <Companies {...companyProps} />
        ))}
      </div>
    </section>
  );
}

export default NewHome;
