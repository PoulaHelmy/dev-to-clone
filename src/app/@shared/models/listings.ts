export interface Author {
  username: string;
  name: string;
  profile_image_90: string;
}

export interface ListingDetails {
  id: number;
  body_markdown: string;
  bumped_at: Date;
  category: string;
  contact_via_connect: boolean;
  expires_at?: any;
  originally_published_at: Date;
  location: string;
  processed_html: string;
  published: boolean;
  slug: string;
  title: string;
  user_id: number;
  tags: string[];
  author: Author;
}

export type ListingsResponse = { result: Listings };

export type Listings = ListingDetails[];

export type ListingCategory =
  undefined
  | "cfp"
  | "forhire"
  | "collabs"
  | "education"
  | "jobs"
  | "mentors"
  | "products"
  | "mentees"
  | "forsale"
  | "events"
  | "misc";
