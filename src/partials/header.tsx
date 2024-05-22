import { component$ } from "@builder.io/qwik";
import { LuBox, LuHome, LuPencilLine, LuUser } from "@qwikest/icons/lucide";

import { NavLink } from "~/components/nav-link";
import { Box, Stack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";

export const Header = component$(() => {
	return (
		<Stack
			direction="horizontal"
			gap="4"
			align="center"
			justify="space-between"
			p="4"
		>
			<Box>Agashane</Box>

			<Stack direction="horizontal" gap="4">
				<NavLink href="/">
					<LuHome q:slot="icon" class={css({ color: "indigo.10" })} />
					<span q:slot="text">Home</span>
				</NavLink>
				<NavLink href="/blog">
					<LuPencilLine q:slot="icon" class={css({ color: "indigo.10" })} />
					<span q:slot="text">Blog</span>
				</NavLink>
				<NavLink href="/about">
					<LuUser q:slot="icon" class={css({ color: "indigo.10" })} />
					<span q:slot="text">About</span>
				</NavLink>
				<NavLink href="/contact">
					<LuBox q:slot="icon" class={css({ color: "indigo.10" })} />
					<span q:slot="text">Contact</span>
				</NavLink>
			</Stack>
		</Stack>
	);
});
