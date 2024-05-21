import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Header = component$(() => {
	return (
		<h2 class={css({ textStyle: "body" })}>
			This is the header with an awesome grouup
		</h2>
	);
});
