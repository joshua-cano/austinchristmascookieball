import { clsx, type ClassValue } from "clsx";

import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  override: {
    classGroups: {
      "font-size": ["text-button", "text-body"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
