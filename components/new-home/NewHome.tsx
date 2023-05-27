import TopBanner, { TopBannerProps } from "./TopBanner.tsx";
import Card, { CardProps } from "./Card.tsx";
import Companies, { CompanyProps } from "./Companies.tsx";
import Footer, { FooterProps } from "./Footer.tsx";
import Header, { HeaderProps } from "../header/Header.tsx";

import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

import { useId } from "preact/hooks";

export interface Props {
  headerProps: HeaderProps;
  topBanner: TopBannerProps;
  cardProps: CardProps[];
  companyProps: CompanyProps[];
  footerProps: FooterProps;
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
      <ul class="carousel justify-center col-span-full gap-1 z-10 row-start-4 absolute bottom-5 left-1/2 translate-x-[-50%]">
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
      <Header {...props.headerProps} />
      <TopBanner {...props.topBanner} />
      <div id={id} class="relative md:hidden">
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {props?.cardProps?.map((card: CardProps, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <Card {...card} />
            </Slider.Item>
          ))}
        </Slider>
        <div class="md:hidden">
          <Dots cardProps={props.cardProps} />
        </div>
        <SliderJS rootId={id} infinite />
      </div>
      <div class="max-md:hidden">
        {props?.cardProps?.map((card: CardProps) => (
          <div class="carousel-item w-full">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div class="bg-black grid grid-cols-3 gap-2 p-10 md:hidden">
        {props.companyProps?.map((companyProps: CompanyProps) => (
          <Companies {...companyProps} />
        ))}
      </div>
      <Footer {...props.footerProps} />
    </section>
  );
}

export default NewHome;
