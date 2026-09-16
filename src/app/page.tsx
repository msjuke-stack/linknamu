import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { GithubIcon, LinkedinIcon, BlogIcon } from "@/components/icons";

const links = [
  {
    label: "Github",
    href: "https://github.com/username",
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "Blog",
    href: "https://blog.example.com",
    icon: <BlogIcon className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileHeader
          name="마성수"
          bio="세계 최강 바이브코더"
          imageSrc="/avatar-placeholder.svg"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
        <span className="text-lg tracking-widest text-zinc-300 dark:text-zinc-700">
          ···
        </span>
      </main>
    </div>
  );
}
