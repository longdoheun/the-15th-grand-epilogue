export const DATABASE_GB_ID = process.env.NOTION_DATABASE_GB_ID;
export const DATABASE_PH_ID: string = process.env
  .NOTION_DATABASE_PH_ID as string;
export const DATABASE_USER_ID: string = process.env
  .NOTION_DATABASE_USER_ID as string;
export const TOKEN = process.env.NOTION_TOKEN;
export const KAKAO_API_KEY = process.env.KAKAO_API_APP_KEY;
const dev = process.env.NODE_ENV !== "production";

export const SERVER = dev
  ? "http://localhost:3000"
  : "https://the-15th-grand-epilogue.vercel.app";
