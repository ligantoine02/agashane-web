import { component$ } from "@builder.io/qwik";
import { PostFrontMatter } from "~/models/post";
import { Box, GridItem, HStack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";
import { LuPen } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";

type Props = {
	post: PostFrontMatter;
};

export const PostCard = component$<Props>(({ post }) => (
	<Link href={post.permalink}>
		<GridItem class="group">
			<Box
				borderColor="indigo.6"
				p="4"
				borderRadius="lg"
				class={css({
					borderWidth: "1px",
				})}
				_groupHover={{
					bg: "indigo.4",
					borderColor: "indigo.7",
					cursor: "pointer",
				}}
			>
				<HStack gap="4" class={css({ alignItems: "flex-start" })}>
					<Box
						bg="indigo.4"
						borderColor="indigo.7"
						mt="1"
						p="2"
						rounded="sm"
						borderWidth="1px"
					>
						<LuPen />
					</Box>
					<h2
						class={css({
							fontWeight: "semibold",
							fontSize: "2xl",
							lineHeight: "1em",
							color: "indigo.9",
							flexGrow: 1,
						})}
					>
						{post.title}
					</h2>
				</HStack>
				<Box py="2">
					<article
						class={css({
							textStyle: "body",
							lineHeight: "1em",
							color: "slate.11",
						})}
					>
						{post.description}
					</article>
				</Box>
			</Box>
		</GridItem>
	</Link>
));
