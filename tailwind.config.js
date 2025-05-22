/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))", // Adjusted in index.css
        input: "hsl(var(--input))", // Adjusted in index.css
        ring: "hsl(var(--ring))", // Adjusted in index.css
        background: "hsl(var(--background))", // e.g., #121212 or hsl(0, 0%, 7%)
        foreground: "hsl(var(--foreground))", // e.g., #E0E0E0 or hsl(0, 0%, 88%)
        primary: {
          DEFAULT: "hsl(var(--primary))", // e.g., a muted blue like hsl(210, 50%, 50%)
          foreground: "hsl(var(--primary-foreground))", // Adjusted in index.css
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // e.g., softer gray hsl(0, 0%, 40%)
          foreground: "hsl(var(--secondary-foreground))", // Adjusted in index.css
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Adjusted in index.css
          foreground: "hsl(var(--destructive-foreground))", // Adjusted in index.css
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // e.g., softer gray hsl(0, 0%, 25%)
          foreground: "hsl(var(--muted-foreground))", // Adjusted in index.css
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Adjusted in index.css (can be same as primary or a variation)
          foreground: "hsl(var(--accent-foreground))", // Adjusted in index.css
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Adjusted in index.css
          foreground: "hsl(var(--popover-foreground))", // Adjusted in index.css
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Adjusted in index.css
          foreground: "hsl(var(--card-foreground))", // Adjusted in index.css
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Removed accordion keyframes and animations as they are likely from a UI library (shadcn/ui)
      // and should be kept if used by its components.
      // If these were custom and part of the old "cyber" theme, they would be removed.
      // For now, assuming they are from the UI library.
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
