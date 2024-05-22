export type PostFrontMatter = {
  title: string;
  description: string;
  tags?: Array<string>;
  permalink: string;
  createdAt?: string;
  updatedAt?: string;
  lang?: Locale;
};

export enum Locale {
  en = "EN",
  fr = "FR",
}
