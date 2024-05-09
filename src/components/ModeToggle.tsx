import { Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="overflow-hidden transition-colors cursor-pointer mob:bg-white max-mob:h-full mob:dark:bg-black rounded-2xl hover:bg-accent">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <div className="flex items-center gap-4 px-4 py-3 font-medium select-none text-card-foreground dark:hidden">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <p className="hidden md:block">Light</p>
            </div>
            <div className="items-center hidden gap-4 px-4 py-3 font-medium bg-black select-none dark:flex text-card-foreground">
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <p className="hidden md:block">Dark</p>
            </div>
            <span className="sr-only">Toggle theme</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
