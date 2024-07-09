import { ProjectsListItemType } from "@/model/project";
import { client, urlFor } from "./sanity";

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
    "gitUrl" : githuburl,
    "blogUrl" : blogurl,
    "viewUrl" : viewurl,
    "imageUrl":image.asset._ref
  }`,
    )
    .then((projects) =>
      projects.map((project: ProjectsListItemType) => ({
        ...project,
        imageUrl: urlFor(project.imageUrl),
      })),
    );
  return data;
}

export async function getProjectDetail(id: string) {
  const data = await client
    .fetch(
      `*[_type == "projects" && _id == "${id}"]
  {
    "id":_id,
    title,
    icon,
    "dateStart": datestart,
    "dateEnd" : dateend,
    team,
    order,
    tool,
    "gitUrl" : githuburl,
    "blogUrl" : blogurl,
    content,description,
    "imageUrl":image.asset._ref
  }`,
    )
    .then((projects) =>
      projects.map((project: ProjectsListItemType) => ({
        ...project,
        imageUrl: urlFor(project.imageUrl),
      })),
    );
  return data;
  // 로그인한 정보가 없다면 인증 관련 에러 보냄(코드 401)
}
