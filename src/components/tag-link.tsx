import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";

type Props = {
  tag: string;
};

export const TagLink = component$<Props>(({ tag }) => (
  <Link href={`/topics/${tag}`}>
    <span
      class={css({ color: "indigo.9", fontSize: "xl", fontWeight: "medium" })}
    >
      #
    </span>
    <span
      class={css({
        color: "slate.11",
        fontSize: "xl",
        fontWeight: "medium",
        _hover: { color: "indigo.9" },
      })}
    >
      {tag}
    </span>
  </Link>
));
