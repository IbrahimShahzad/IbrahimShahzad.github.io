import { siteMetadata } from "./config";
import tailwindConfig from "./tailwind.config";
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`,
    {
        resolve: "gatsby-plugin-feed",
        options: {
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                     site_url: siteUrl
                  }
                }
              }
            `,
            feeds: [
                {
                    title: "My Personal Blog RSS Feed",
                    output: "rss.xml",
                    query: `
                      {
                        allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                          nodes {
                            frontmatter {
                              title
                              date
                              description
                            }
                            html
                            slug: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__title}")
                          }
                        }
                      }
                    `,
                    serialize: ({ query: { site, allMarkdownRemark } }) => {
                        return allMarkdownRemark.nodes.map(node => {
                            return Object.assign({}, node.frontmatter, {
                                url: `${site.siteMetadata.siteUrl}${node.slug}`,
                                guid: `${site.siteMetadata.siteUrl}${node.slug}`,
                            })
                        })
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        // Class prefix for <pre> tags containing syntax highlighting;
                        // defaults to 'language-' (e.g. <pre class="language-js">).
                        // If your site loads Prism into the browser at runtime,
                        // (e.g. for use with libraries like react-live),
                        // you may use this to prevent Prism from re-processing syntax.
                        // This is an uncommon use-case though;
                        // If you're unsure, it's best to use the default value.
                        classPrefix: "language-",
                        // This is used to allow setting a language for inline code
                        // (i.e. single backticks) by creating a separator.
                        // This separator is a string and will do no white-space
                        // stripping.
                        // A suggested value for English speakers is the non-ascii
                        // character '›'.
                        inlineCodeMarker: null,
                        // This lets you set up language aliases.  For example,
                        // setting this to '{ sh: "bash" }' will let you use
                        // the language "sh" which will highlight using the
                        // bash highlighter.
                        aliases: {},
                        // This toggles the display of line numbers globally alongside the code.
                        // To use it, add the following line in gatsby-browser.js
                        // right after importing the prism color scheme:
                        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                        // Defaults to false.
                        // If you wish to only show line numbers on certain code blocks,
                        // leave false and use the {numberLines: true} syntax below
                        showLineNumbers: false,
                        // If setting this to true, the parser won't handle and highlight inline
                        // code used in markdown i.e. single backtick code like `this`.
                        noInlineHighlight: false,
                        // This adds a new language definition to Prism or extend an already
                        // existing language definition. More details on this option can be
                        // found under the header "Add new language definition or extend an
                        // existing language" below.
                        languageExtensions: [
                            {
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            },
                        ],
                        // Customize the prompt used in shell output
                        // Values below are default
                        prompt: {
                            user: "root",
                            host: "localhost",
                            global: false,
                        },
                        // By default the HTML entities <>&'" are escaped.
                        // Add additional HTML escapes by providing a mapping
                        // of HTML entities and their escape value IE: { '}': '&#123;' }
                        escapeEntities: {},
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/contents/blog/`,
        },
    },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: "gatsby-remark-typescript",
                    options: {
                        // configure the JSX component that the plugin should check for
                        wrapperComponent: "CodeBlockWrapper",
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `portfolio`,
            path: `${__dirname}/contents/portfolio/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `basepages`,
            path: `${__dirname}/contents/basepages`,
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [".mdx", ".md"],
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-highlight-code`,
                    options: {
                        terminal: "carbon",
                        theme: "vscode",
                        editable: false,
                        lineNumbers: true,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [
                tailwindcss(tailwindConfig),
                autoprefixer,
                ...(process.env.NODE_ENV === `production`
                    ? [require(`cssnano`)]
                    : []),
            ],
        },
    },
]

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus,
        },
    } as any)
}

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
