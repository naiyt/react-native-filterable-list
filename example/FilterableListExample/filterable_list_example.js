import React, { Component } from 'react';

// TODO: actually include as a dependency when it's on npm
import FilterableList from './filterable_list';

export default class FilterableListExample extends Component {
  get items() {
    return [
      'Bacon',
      'ipsum',
      'dolor',
      'amet',
      'chuck',
      'ham',
      'hock',
      'tail',
      'short',
      'ribs',
      'beef',
      'ribeye',
      'corned',
      'beef',
      'hamburger',
      'strip',
      'steak',
      'burgdoggen',
      'shank'
    ]
  }

  render() {
    return (
      <FilterableList items={this.items} onPresItem={item => console.log(item)} />
    );
  }
}
