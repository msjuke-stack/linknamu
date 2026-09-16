import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
        <Image src={imageSrc} alt={`${name} 프로필 사진`} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{name}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
