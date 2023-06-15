export interface Media {
	id: number
	date: Date
	date_gmt: Date
	guid: GUID
	modified: Date
	modified_gmt: Date
	slug: string
	status: string
	type: string
	link: string
	title: Caption
	author: number
	comment_status: string
	ping_status: string
	template: string
	meta: any[]
	acf: any[]
	description: Caption
	caption: Caption
	alt_text: string
	media_type: string
	mime_type: string
	media_details: MediaDetails
	post: number
	source_url: string
	_links: Links
}

export interface Links {
	self: About[]
	collection: About[]
	about: About[]
	author: Author[]
	replies: Author[]
}

export interface About {
	href: string
}

export interface Author {
	embeddable: boolean
	href: string
}

export interface Caption {
	rendered: string
}

export interface GUID {
	rendered: string
}

export interface MediaDetails {
	width: number
	height: number
	file: string
	filesize: number
	sizes: Sizes
	image_meta: ImageMeta
}

export interface ImageMeta {
	aperture: string
	credit: string
	camera: string
	caption: string
	created_timestamp: string
	copyright: string
	focal_length: string
	iso: string
	shutter_speed: string
	title: string
	orientation: string
	keywords: any[]
}

export interface Sizes {
	medium: Large
	large: Large
	thumbnail: Large
	medium_large: Large
	full: Full
}

export interface Full {
	file: string
	width: number
	height: number
	mime_type: string
	source_url: string
}

export interface Large {
	file: string
	width: number
	height: number
	filesize: number
	mime_type: string
	source_url: string
}
