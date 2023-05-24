import TopBanner, { TopBannerProps } from "./TopBanner.tsx";
import Card, { CardProps } from "./Card.tsx"

export interface Props {
  topBanner: TopBannerProps;
  cardProps: CardProps[]; 
}
function NewHome(props: Props) {
  return (
    <>
      <TopBanner {...props.topBanner} />
        {props?.cardProps?.map((card:CardProps ) => (<Card {...card} />))}   
    </>
  );
}

export default NewHome;
