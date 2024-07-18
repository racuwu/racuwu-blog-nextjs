export type Post = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    cover_image: string;
    meta_description: string;
    meta_keywords: string;
    published: number;
    published_at: string;
    featured: number;
    pinned: number;
    author?: Author;
    tags?: Tag[];
    avenues?: Avenue[];
    created_at: string;
    updated_at: string;
}

export type Author = {
    id: number;
    name: string;
    slug: string;
    email: string;
    rtr_id: string;
    bio: string;
    image: string;
}

export type Avenue = {
    id: number;
    name: string;
    slug: string;
    description: string;
    cover_image: string;
    created_at: string;
    updated_at: string;
}

export type Tag = {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export type HomeData = {
    featured: Post[],
    pinned:Post[],
    tags:Tag[],
    avenues:Avenue[]
  }

export type PaginatedPosts = {
    current_page: number;
    data: Post[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string;
        label: string;
        active: boolean;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}


export type AvenuesPaginated = {
    current_page: number;
    data: Avenue[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
export type PostsPaginated = {
    current_page: number;
    data: Post[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type AuthorsPaginated = {
    current_page: number;
    data: Author[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type TagsPaginated = {
    current_page: number;
    data: Tag[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}