export const API_BASE = 'https://api.chrissilich.com/wp-json/wp/v2/'

export const MEDIA_ENDPOINT = API_BASE + 'media/'

export const BLOG_ENDPOINT = API_BASE + 'posts/'
export const BLOG_ENDPOINT_ARCHIVE = BLOG_ENDPOINT
export const BLOG_ENDPOINT_SINGLE = BLOG_ENDPOINT + '?slug='

export const PROJECT_ENDPOINT = API_BASE + 'projects/'
export const PROJECT_ENDPOINT_ARCHIVE = PROJECT_ENDPOINT + '/?orderby=menu_order&order=asc'
export const PROJECT_ENDPOINT_SINGLE = PROJECT_ENDPOINT + '?slug='
