import Image from "next/image";
import FadeRight from "../animations/FadeRight";

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
<FadeRight delay={0.25}>
      <Image
        src="/images/profile.png"
        alt="Mahzil Sohail"
        width={450}
        height={450}
        className="rounded-full object-cover shadow-2xl"
        priority
      />
</FadeRight>
    </div>
  );
}