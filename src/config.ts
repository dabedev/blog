import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/posts",
		title: "posts",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	about: {
		path: "/about-me",
		title: "about me",
	},
};

export const SITE = {
	name: "Thoughts",
	title: "Daniel's thoughts",
	description: "My personal blog where I post what comes to my mind.",
	url: "https://blog.dabedev.xyz",
	githubUrl: "https://github.com/dabedev/blog",
	listDrafts: true,
	image:
		"https://pbs.twimg.com/profile_images/1654838606454747137/XzsSdUMH_400x400.jpg",
	ytChannelId: "",
	author: "Daniel Benitez",
	authorTwitter: "dabedev", 
	authorImage: "https://pbs.twimg.com/profile_images/1654838606454747137/XzsSdUMH_400x400.jpg",
	authorBio:
		"Jack of all trades.",
};

export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
