import { Button } from "@/components/ui/button";
import { Home, Cog, User2, LucideIcon } from "lucide-react";

interface SidebarButtonProps {
  icon: LucideIcon;
  text: string;
}
const Sidebar = () => {
  const items: SidebarButtonProps[] = [
    {
      icon: Home,
      text: "Home",
    },
    {
      icon: Cog,
      text: "Settings",
    },
    {
      icon: User2,
      text: "Profile",
    },
  ];

  return (
    <div className="w-[108px] top-0 h-full z-50 fixed bg-white rounded-tl-[30px] rounded-bl-[30px] border border-zinc-300 p-3">
      <div className="flex flex-col h-full items-center gap-4">
        <img src="/vite.svg" alt="logo" className="h-10 w-10" />
        <div className=" flex flex-col items-center">
          {items.map((item) => (
            <Button
              variant="ghost"
              className="m-2  h-fit flex flex-col items-center  text-slate-600"
            >
              <item.icon className=" h-10 w-10" />
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
