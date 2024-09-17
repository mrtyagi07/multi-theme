"use client";

import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const themes = [
  {
    name: "Default",
    value: "default",
    colors: [
      "hsl(240, 5.9%, 10%)", // --primary
      "hsl(240, 4.8%, 95.9%)", // --secondary
      "hsl(240, 4.8%, 95.9%)", // --accent
      "hsl(240, 5.9%, 90%)", // --border
    ],
  },
  {
    name: "Dark",
    value: "shadcn-dark",
    colors: [
      "hsl(0, 0%, 98%)", // --primary
      "hsl(240, 3.7%, 15.9%)", // --secondary
      "hsl(240, 3.7%, 15.9%)", // --accent
      "hsl(240, 3.7%, 15.9%)", // --border
    ],
  },
  {
    name: "Terra",
    value: "terra-theme",
    colors: [
      "hsl(30, 60%, 45%)", // --primary
      "hsl(20, 40%, 65%)", // --secondary
      "hsl(10, 70%, 55%)", // --accent
      "hsl(30, 30%, 70%)", // --border
    ],
  },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <RadioGroup value={theme} onValueChange={setTheme} className="space-y-2">
      {themes.map((themeOption) => (
        <div key={themeOption.value} className="flex items-center space-x-2">
          <RadioGroupItem value={themeOption.value} id={themeOption.value} />
          <Label
            htmlFor={themeOption.value}
            className="flex items-center space-x-2"
          >
            <span>{themeOption.name}</span>
            <div className="flex">
              {themeOption.colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-6 h-6 border border-gray-300"
                />
              ))}
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
