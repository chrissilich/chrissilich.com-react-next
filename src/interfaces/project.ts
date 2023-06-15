import { Media } from '@/interfaces/media'

export interface Project {
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
	title: Title
	content: Content
	featured_media: number
	template: string
	project_categories: any[]
	acf: Acf
	_links: Links
	main_image_media: Media | null
}

export interface Links {
	self: About[]
	collection: About[]
	about: About[]
	'wp:attachment': About[]
	'wp:term': WpTerm[]
	curies: Cury[]
}

export interface About {
	href: string
}

export interface Cury {
	name: string
	href: string
	templated: boolean
}

export interface WpTerm {
	taxonomy: string
	embeddable: boolean
	href: string
}

export interface Acf {
	main_image: number
	alternate_title_an_page: string
	client: string
	medium: string
	description_on_home: string
	flipped: boolean
	project_pad: number
	description_columns: number
	image_columns: number
}

export interface Content {
	rendered: string
	protected: boolean
}

export interface GUID {
	rendered: string
}

export interface Title {
	rendered: string
}
