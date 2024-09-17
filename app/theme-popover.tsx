import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { ThemeSelector } from "./theme-toggles";
import { Label } from "@/components/ui/label";

export function ThemePopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="">
          <Settings className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-2">
          <Label>Theme</Label>
          <ThemeSelector />
        </div>
      </PopoverContent>
    </Popover>
  );
}
