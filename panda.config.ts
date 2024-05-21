import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
	jsxFramework: "qwik",

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				fonts: {
					darkerGrotesque: { value: "var(--font-darker-grotesque)" },
					chivoMono: { value: "var(--font-chivo-mono)" },
					spaceMono: { value: "var(--font-space-mono)" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",

	presets: [pandaPreset],
});
