import { AboutMeType } from "@/model/aboutme";
import { client, urlFor } from "./sanity";

export async function getAboutMe() {
  const data = await client
    .fetch(
      `*[_type == "aboutme"]|order(_createdAt asc)
  {
    "id":_id,
    title,
    icon,
    description,
    order,
    "imageUrl":image.asset._ref
  }`,
    )
    .then((projects) =>
      projects.map((project: AboutMeType) => ({
        ...project,
        imageUrl: urlFor(project.imageUrl),
      })),
    );
  return data;
}
