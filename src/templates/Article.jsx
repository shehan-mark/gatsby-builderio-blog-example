import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link/Link';

const defaultDescription = 'Edit this in your entry for a better SEO';

const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

function ArticleTemplate({ data }) {
  const models = data?.allBuilderModels;
  const pageContent = models.articlePage[0]?.content;

  console.log('ArticleTemplate::Content', pageContent);

  return (
    <>
      <Helmet>
        <title>{(pageContent && pageContent.data.title) || defaultTitle}</title>
        <meta
          name="description"
          content={
            (pageContent && pageContent.data.description) || defaultDescription
          }
        />
      </Helmet>
      <h1>Article Page Template</h1>
      {/** name of the model is landing page, change it if you decided to build*/}
      <BuilderComponent
        renderLink={Link}
        name="articlePage"
        content={pageContent}
      />
    </>
  );
}

export default ArticleTemplate;

export const ArticleTemplateQuery = graphql`
query ($path: String!) {
  allBuilderModels {
    articlePage(target: { urlPath: $path }, options: { cachebust: true }) {
      content
    }
  }
}
`
