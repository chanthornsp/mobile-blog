export interface Paginate<T> {
    data: T[];
    current_page: number | null;
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
    links?: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
  }
  
  export interface ResourcePaginate<T> {
    data: T[];
    links?: {
        first: string | null;
        last: string | null;
        prev: string | null;
        next: string | null;
    };
    meta?: Meta;
  }
  
  export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: {
        url: null | string;
        label: string;
        active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  
  export interface Article {
    id: number
    title: string
    short_description: string
    thumbnail: string
    published_at: string
    tags: Tag[]
    content: string
    description: string
  }
  
  export interface Tag {
    id: number
    name: string
    slug: string
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }