type PostFrontmatter = {
  title: string;
  date?: Date | string;
  slug?: string;
}

/**
 * Resolves the post URL based on a base path and the post frontmatter.
 * @param {string} basePath 
 * @param {PostFrontmatter} frontmatter 
 * @returns {string} Resolved Post Url
 */
export const resolvePostUrl = (basePath: string, frontmatter: PostFrontmatter) => {
  const { title, slug } = frontmatter;

  // Build out date bit
  const parsedDate = new Date(frontmatter.date);
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
  const date = `${parsedDate.getFullYear()}/${month}/${day}`;

  const url = slug ? `${basePath}/${date}/${slug}` : `${basePath}/${date}/${getKebabCase(title)}`;
  return url;
}

const getKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
