import HeroContent from "./HeroContent";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-10 lg:px-16 xl:px-20 grid lg:grid-cols-2 gap-12.5 items-center">

        <HeroContent />

        <ProfileImage />

      </div>
    </section>
  );
}