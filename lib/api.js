import client, { previewClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
    _id,
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{name, 'avatar': avatar.asset->url},
    coverImage,
    youtube,
`;

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) { ${blogFields} }`
  );
  return results;
}

export async function getPaginatedBlogs(
  { offset = 0, date = "desc" } = { offset: 0, date: "desc" }
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) { ${blogFields} }[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type =="blog" && 
slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->},
    'comments': *[
      _type == "comment" && 
      blog._ref == ^._id && 
      approved == true] {
_id, 
name, 
email, 
comment, 
_createdAt
}
}`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));
  return result;
}
