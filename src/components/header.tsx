import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Header = component$(() => {
	return (
		<h2
			class={css({
				fontFamily: "spaceMono",
				fontSize: "2xl",
				color: "cyan.700",
			})}
		>
			This is the header with an awesome grouup
		</h2>
	);
});
