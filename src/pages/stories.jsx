
import AdvertisementSection from '../components/HomePage/AdvertisementSection'
import ExclusiveStory from '../components/StoriesPage/ExclusiveStories'
import StorySlider from '../components/StoriesPage/StorySlider'


export default function Stories() {
  return (
    <div>
            <StorySlider/>

      <ExclusiveStory/><AdvertisementSection/>
    </div>
  )
}
