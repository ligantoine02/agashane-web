import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
	body: {
		description: "The body text style",
		value: {
			fontFamily: "darkerGrotesque",
			fontWeight: "medium",
			fontSize: "xl",
			lineHeight: "relaxed",
		},
	},
});
