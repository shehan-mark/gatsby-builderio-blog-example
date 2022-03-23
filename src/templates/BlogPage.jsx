import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link/Link';

const defaultDescription = 'Edit this in your entry for a better SEO';

const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

// https://forum.builder.io/t/how-to-build-dynamic-resource-pages-with-builder-and-gatsbyjs/515
function BlogPageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const blogPage = models.blogPage[0]?.content;

  console.log('BlogPageTemplate::Content', blogPage);

  return (
    <>
      <Helmet>
        <title>{(blogPage && blogPage.data.title) || defaultTitle}</title>
        <meta
          name="description"
          content={
            (blogPage && blogPage.data.description) || defaultDescription
          }
        />
      </Helmet>
      <h1>Blog Page Template</h1>
      {/** name of the model is landing page, change it if you decided to build*/}
      <BuilderComponent
        renderLink={Link}
        name="blog-page"
        content={blogPage}
      />
    </>
  );
}

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
query ($path: String!) {
  allBuilderModels {
    blogPage(target: { urlPath: $path }, options: { cachebust: true }) {
      content
    }
  }
}
`

// investigate below
// https://github.com/BuilderIO/builder/blob/main/packages/gatsby/src/constants.js
// https://github.com/BuilderIO/builder/blob/main/packages/gatsby/src/gatsby-node.js