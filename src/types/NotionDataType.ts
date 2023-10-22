export type NotionDataType = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Object;
  last_edited_by: Object;
  cover: any; // need more study about ts
  icon: null;
  parent: Object;
  archived: boolean;
  properties: any; // need more study about ts
  url: string;
};
