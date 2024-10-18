import AdvertisementSection from "../components/HomePage/AdvertisementSection";
import ExclusivePoetry from "../components/PoetryPage/ExclusivePoetry";
import PoetrySlider from "../components/PoetryPage/PoetrySlider";

export default function Poetry() {
  return (
    <div>

      <PoetrySlider/>
      <ExclusivePoetry/>
      <AdvertisementSection/>
    </div>
  )
}
