// import { SimplePost } from "@/model/post";
import { ProjectsListItem } from "@/model/project";
import { client, urlFor } from "./sanity";

// export async function addUser({ id, username, email, image, name }: OAuthUser) {
//   return client.createIfNotExists({
//     _id: id,
//     _type: "user",
//     username,
//     email,
//     name,
//     image,
//     following: [],
//     followers: [],
//     bookmarks: [],
//   });
// }

export async function getProjectList() {
  const data = await client
    .fetch(
      `*[_type == "projects"]|order(_createdAt asc)
  {
    "id":_id,
    title,
    icon,
    "dateStart": datestart,
    "dateEnd" : dateend,
    team,
    order,
    tool,
    "imageUrl":image.asset._ref
  }`,
    )
    .then((projects) =>
      projects.map((project: ProjectsListItem) => ({
        ...project,
        imageUrl: urlFor(project.imageUrl),
      })),
    );
  return data;
  // 로그인한 정보가 없다면 인증 관련 에러 보냄(코드 401)
}
