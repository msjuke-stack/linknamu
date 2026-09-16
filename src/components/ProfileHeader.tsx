import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-[0_12px_28px_-8px_rgba(150,95,50,0.45)] ring-4 ring-white/80 dark:ring-white/10">
        <Image src={imageSrc} alt={`${name} 프로필 사진`} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[#3a2c22] dark:text-[#f3e7d9]">
          {name}
        </h1>
        <p className="text-sm text-[#8a7566] dark:text-[#b7a495]">{bio}</p>
      </div>
    </div>
  );
}
