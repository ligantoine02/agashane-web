import { Slot, component$ } from "@builder.io/qwik";
import { Link as QwikLink } from "@builder.io/qwik-city";

import { styled, HStack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";

type Props = {
  href?: string;
};

export const NavLink = component$<Props>(({ href = "#" }) => (
  <QwikLink href={href}>
    <HStack
      py="1"
      px="4"
      gap="2"
      borderRadius="sm"
      class={css({ alignItems: "center" })}
      _hover={{ bg: "indigo.4", cursor: "pointer" }}
    >
      <Slot name="icon" />
      <styled.button
        fontSize="xl"
        fontWeight="medium"
        color="slate.12"
        _hover={{ cursor: "pointer", color: "indigo.9" }}
      >
        <Slot name="text" />
      </styled.button>
    </HStack>
  </QwikLink>
));
