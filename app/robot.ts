import type { MetadataRoute } from 'next'
import { baseUrl, baseUrl2 } from './resources'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
     
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl2}/sitemap.xml`, 
    ],

  }
}