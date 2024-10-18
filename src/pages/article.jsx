import AdvertisementSection from "../components/HomePage/AdvertisementSection";
import ExclusiveNews from "../components/NewsPage/ExclusiveNews";
import NewsSlider from "../components/NewsPage/NewsSlider";
export default function Article() {
  return (
    <div>
      <NewsSlider />
      <ExclusiveNews/>
      <AdvertisementSection/>
    </div>
  );
}
