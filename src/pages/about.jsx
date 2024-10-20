import AboutUsSection from "../components/AboutPage/AboutSection";
import MissionSection from "../components/AboutPage/MissionSection";
import VisionSection from "../components/AboutPage/VisionSection";
import TeamSection from "../components/AboutPage/TeamSection";
import AdvertisementSection from "../components/HomePage/AdvertisementSection";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-blue-50 to-yellow-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8 sm:py-16 sm:space-y-32">
        <AboutUsSection />
        <div className="grid md:grid-cols-2  gap-12">
          <MissionSection />
          <VisionSection />
        </div>
        <TeamSection />
      </div>
      <AdvertisementSection />
    </div>
  )
}
