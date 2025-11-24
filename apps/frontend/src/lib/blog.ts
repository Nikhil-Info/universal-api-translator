import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    readingTime?: string;
    content: string;
    headings: { id: string; text: string; level: number }[];
    tags?: string[];
    image?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog/release');

export function getAllPosts(): BlogPost[] {
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            // Extract headings from content
            const headings: { id: string; text: string; level: number }[] = [];
            const headingRegex = /^(#{2,3})\s+(.*)$/gm;
            let match;
            while ((match = headingRegex.exec(content)) !== null) {
                const level = match[1].length;
                const text = match[2];
                const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                headings.push({ id, text, level });
            }

            return {
                slug,
                title: data.title || 'Untitled',
                description: data.description || '',
                date: data.date || new Date().toISOString(),
                author: data.author || 'Anonymous',
                readingTime: '5 min read', // You could calculate this based on word count
                content: content,
                headings,
                tags: data.tags || [],
                image: data.image,
            };
        });

    // Sort by date descending (newest first)
    return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            return undefined;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Extract headings from content
        const headings: { id: string; text: string; level: number }[] = [];
        const headingRegex = /^(#{2,3})\s+(.*)$/gm;
        let match;
        while ((match = headingRegex.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2];
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            headings.push({ id, text, level });
        }

        return {
            slug,
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Anonymous',
            readingTime: '5 min read',
            content: content,
            headings,
            tags: data.tags || [],
            image: data.image,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return undefined;
    }
}
