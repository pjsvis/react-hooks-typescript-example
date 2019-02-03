/**
 * Algolia namespace
 */
declare namespace alg{

interface Algolia {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}

interface Hit {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

interface HighlightResult {
  title: Title;
  url: Url;
  author: Author;
  story_text?: Author;
}

interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

interface Url {
  value: string;
  matchLevel: string;
  fullyHighlighted?: boolean;
  matchedWords: string[];
}

interface Title {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

}