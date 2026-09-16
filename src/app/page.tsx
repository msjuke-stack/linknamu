import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { GithubIcon, BlogIcon, EmailIcon } from "@/components/icons";

const links = [
  {
    id: "github",
    label: "Github",
    href: "https://github.com/msjuke-stack",
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    id: "blog",
    label: "Blog",
    href: "https://blog.naver.com/knono01/224413488186",
    icon: <BlogIcon className="h-5 w-5" />,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:msjuke@gmail.com",
    icon: <EmailIcon className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fdf6ec] via-[#fbe7d6] to-[#f6d3b8] px-5 py-14 dark:from-[#241b14] dark:via-[#211a15] dark:to-[#181110] sm:px-6">
      <main className="flex w-full max-w-sm flex-col items-center gap-9 rounded-[2rem] border border-white/60 bg-white/40 px-7 py-12 shadow-[0_20px_50px_-15px_rgba(180,120,70,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:px-9 sm:py-14">
        <ProfileHeader
          name="MSJUKE"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          imageSrc="/DACC.png"
        />
        <LinkList links={links} />
        <span className="text-lg tracking-widest text-[#c9a888] dark:text-[#5a4a3d]">
          ···
        </span>
      </main>
    </div>
  );
}
