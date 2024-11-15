export type ProjectsListItemType = {
  dateEnd: string;
  dateStart: string;
  icon: string;
  id: string;
  imageUrl: string;
  team: string;
  title: string;
  tool: string[];
  gitUrl: string;
  blogUrl: string;
  viewUrl: string;
  order: number;
};

export type ProjectDetailType = ProjectsListItemType & {
  content: string;
  gitUrl: string;
  blogUrl: string;
  description: string;
};

export type ProjectDescType = {
  id: string;
  content: string;
};
