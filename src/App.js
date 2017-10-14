import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import AppLayout from './ui/layout/App';
import Articles from './ui/screens/Articles';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    const { articles } = this.state;
    return (
      <AppLayout>
        <Articles items={articles} />
      </AppLayout>
    );
  }
}

export default App;
