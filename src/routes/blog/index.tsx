import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHeadProps } from "@builder.io/qwik-city";
import { PostCard } from "~/components/post-card";
import { PostFrontMatter } from "~/models/post";
import { Grid, VStack } from "~/styled-system/jsx";

export const useBlogPosts = routeLoader$(async () => {
	const modules = import.meta.glob("/src/routes/blog/**/index.mdx");
	const posts: Array<PostFrontMatter> = [];

	for (const post in modules) {
		const data = (await modules[post]()) as DocumentHeadProps;
		posts.push({
			title: String(data.head.title),
			description: String(
				data.head.meta.find((m) => m.name === "description")?.content,
			),
			permalink: String(data.head.frontmatter?.permalink),
			tags: data.head.frontmatter.tags as Array<string>,
			createdAt: String(data.head.frontmatter?.createdAt),
			updatedAt: data.head.frontmatter?.updatedAt
				? String(data.head.frontmatter?.updatedAt)
				: undefined,
		});
	}

	return posts;
});

export default component$(() => {
	const posts = useBlogPosts();

	console.info(posts);

	return (
		<VStack p="4">
			<Grid columns={{ "@/xs": 1, sm: 2, xl: 3 }} gap="4">
				{posts.value.map((post) => (
					<PostCard post={post} key={post.permalink} />
				))}
			</Grid>
		</VStack>
	);
});
