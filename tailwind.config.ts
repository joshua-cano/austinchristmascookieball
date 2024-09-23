import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          snow: "hsl(var(--primary-snow))",
          solstice: "hsl(var(--primary-solstice))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          goldstar: "hsl(var(--secondary-goldstar))",
          evergreen: "hsl(var(--secondary-evergreen))",
          green: "hsl(var(--secondary-green))",
          blue: "hsl(var(--secondary-blue))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          black: "hsl(var(--neutral-black))",
          background: "hsl(var(--neutral-background))",
          forms: "hsla(var(--neutral-forms) / 90%)",
          5: "hsla(var(--neutral-5) / 5%)",
          10: "hsla(var(--neutral-10) / 10%)",
          20: "hsla(var(--neutral-20) / 20%)",
          50: "hsla(var(--neutral-50) / 50%)",
          70: "hsla(var(--neutral-70) / 70%)",
          90: "hsla(var(--neutral-90) / 90%)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        subheading: ["32px", { lineHeight: "1", letterSpacing: "1px" }],
        h1: [
          "clamp(3rem, 15vw, 5.125rem)",
          { lineHeight: "1.1", letterSpacing: "2px" },
        ],
        h2: [
          "clamp(36px, 10vw, 42px)",
          { lineHeight: "1.2", letterSpacing: "1px" },
        ],
        h3: ["24px", { lineHeight: "1.1", letterSpacing: "1px" }],
        body: ["1.5rem", { lineHeight: "1.5" }],
        bodysm: ["18px", { lineHeight: "1.1" }],
        bodyxs: ["1rem", { lineHeight: "1.5" }],
        caption: ["1rem", { lineHeight: "1.5" }],
        button: [
          "clamp(1rem, 5.5vw, 1.5rem)",
          { lineHeight: "1.5", letterSpacing: "1px", fontWeight: "600" },
        ],
        callout: [
          "50px",
          { lineHeight: "1.2", letterSpacing: "0.5px", fontWeight: "700" },
        ],
        calloutsm: [
          "clamp(29px, 4vw, 36px)",
          { lineHeight: "1.2", letterSpacing: "0.5px", fontWeight: "700" },
        ],
        schTime: ["28px", { lineHeight: "40px", fontWeight: "700" }],
        schName: ["28px", { lineHeight: "40px" }],
        schDetail: ["24px", { lineHeight: "1.2" }],
        schLocation: ["28px", { lineHeight: "40px", fontWeight: 600 }],
      },
      backgroundImage: {
        hero: 'url("/background.png")',
      },
      fontFamily: {
        sans: ["var(--font-raleway)", ...defaultTheme.fontFamily.sans],
        christmas: "var(--font-christmas)",
        bebas: "var(--font-bebasneue)",
        bevan: "var(--font-bevan)",
        heading: "var(--font-berkshireSwash)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        default: "0.875rem",
      },
    },
  },
  plugins: [animate],
};
export default config;
