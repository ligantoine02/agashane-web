import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";

export const Footer = component$(() => {
	return (
		<h2
			class={css({
				fontSize: "xl",
			})}
		>
			This is the footer
		</h2>
	);
});
