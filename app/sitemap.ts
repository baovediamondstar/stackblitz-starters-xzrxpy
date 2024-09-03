// app/sitemap.js
import { fetchAPI } from '@/lib/graphql';
import { gql } from 'graphql-request';
import { MetadataRoute } from 'next';


// Define TypeScript interfaces for your data structures
interface GetSitemapData {
    pages: {
        nodes: {
            slug: string;
            modifiedGmt: string; // or Date, depending on your GraphQL implementation
        }[];
    };
    posts: {
        nodes: {
            slug: string;
            modifiedGmt: string; // or Date
        }[];
    };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const result = await fetchAPI(gql`
    query GetSitemapData {
        pages(where: { notIn: ["cG9zdDozMg=="] }) {
          nodes{
            slug
            modifiedGmt
          }
        }
        posts {
          nodes {
            slug
            modifiedGmt
          }
        }
      }
    `) as GetSitemapData; // Type assertion to ensure correct data structure
        const { pages, posts } = result;
        const SITE_HOME_URL = "https://www.dichvubaovetakedashingen.vn/"

        const routes = [
            { url: SITE_HOME_URL, lastModified: new Date().toISOString() },

        ];

        return [...routes,
        ...pages.nodes.map((node) => ({
            url: `${SITE_HOME_URL}${node.slug}`,
            lastModified: new Date(node.modifiedGmt).toISOString(),
        })),
        ...posts.nodes.map((node) => ({
            url: `${SITE_HOME_URL}${node.slug}`,
            lastModified: new Date(node.modifiedGmt).toISOString(),
        })),
            // Add other routes as needed
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return [];
    }
}