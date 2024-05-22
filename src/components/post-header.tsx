import { component$ } from "@builder.io/qwik";
import { Box, HStack, Stack, VStack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";
import { TagLink } from "./tag-link";

type Props = {
  title: string;
  description: string;
  tags: Array<string>;
};

export const PostHeader = component$<Props>(({ title, description, tags }) => (
  <VStack
    gap="2"
    minH={{
      smDown: "12vh",
      sm: "25vh",
    }}
    p={{
      smDown: "4",
      sm: "8",
    }}
    justifyContent="flex-end"
  >
    <Box w="full">
      <h1
        class={css({
          fontWeight: "semibold",
          fontSize: {
            smDown: "3xl",
            sm: "5xl",
          },
          textAlign: "left",
          lineHeight: "1em",
        })}
      >
        {title}
      </h1>
    </Box>
    <p
      class={css({
        fontSize: "2xl",
        fontWeight: "medium",
        color: "slate.11",
        w: "full",
        lineHeight: "1em",
      })}
    >
      {description}
    </p>
    <Stack w="full" gap="2">
      <HStack flexGrow={1}>
        {tags.map((tag) => (
          <TagLink tag={tag} key={tag} />
        ))}
      </HStack>
    </Stack>
  </VStack>
));
