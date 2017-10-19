import React from 'react';
import { compose, lifecycle, branch, renderComponent, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { getAll, findAll } from '../';
import Loading from '../../ui/common/Loading';
import Card from '../../ui/card/Card';
import cardWithLinks from './cardWithLinks';

const CardWithLinks = cardWithLinks(Card);

const enhanceArticles = compose(
  connect(getAll, { findAll }),
  lifecycle({
    componentWillMount() {
      this.props.findAll();
    },
  }),
  mapProps(props => ({
    ...props,
    articles: (props.articles || []).map(article =>
      <CardWithLinks key={article.id} {...article} />,
    ),
  })),
  branch(props => props.articles.length === 0, renderComponent(Loading)),
);

export default enhanceArticles;
