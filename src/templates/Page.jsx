import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link/Link';

const defaultDescription = 'Edit this in your entry for a better SEO';

const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const pageContent = models.page[0]?.content;

  console.log('PageTemplate::Content', pageContent);

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
      <h1>Page Template</h1>
      {/** name of the model is landing page, change it if you decided to build*/}
      <BuilderComponent
        renderLink={Link}
        name="page"
        content={pageContent}
      />
    </>
  );
}

export default PageTemplate;

export const PageTemplateQuery = graphql`
query ($path: String!) {
  allBuilderModels {
    page(target: { urlPath: $path }, options: { cachebust: true }) {
      content
    }
  }
}
`
