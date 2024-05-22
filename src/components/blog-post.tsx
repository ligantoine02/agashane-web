import { component$, Slot } from "@builder.io/qwik";
import { prose } from "~/styled-system/recipes";
import { css } from "~/styled-system/css";
import { Box } from "~/styled-system/jsx";

export const BlogPost = component$(() => (
  <Box
    class={css({ textStyle: "body" })}
    px={{
      smDown: "4",
      sm: "8",
    }}
  >
    <Box class={prose({ size: "xl" })}>
      <Slot />
    </Box>
  </Box>
));
