import TopBanner, { TopBannerProps } from "./TopBanner.tsx";

export interface Props {
  topBanner: TopBannerProps;
}
function NewHome(props: Props) {
  return (
    <>
      <TopBanner {...props.topBanner} />
    </>
  );
}

export default NewHome;
