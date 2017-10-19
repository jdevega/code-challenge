import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { graphql } from 'react-apollo';
import { ARTICLES_QUERY } from '../queries';
import Loading from '../../ui/common/Loading';
import Card from '../../ui/card/Card';
import cardWithLinks from './cardWithLinks';

const CardWithLinks = cardWithLinks(Card);

const enhanceArticles = compose(
  graphql(ARTICLES_QUERY, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: ({ data }) => ({
      articles: (data.articles || []).map(article => (
        <CardWithLinks key={article.id} {...article} />
      )),
    }),
  }),
  branch(props => props.articles.length === 0, renderComponent(Loading)),
);

export default enhanceArticles;
