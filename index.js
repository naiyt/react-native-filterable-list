import React, { Component } from 'react'
import { TextInput, ListView, TouchableOpacity } from 'react-native'

export default class FilterableList {
  static get defaultProps() {
    return {
      showSearch: true,
      searchPlaceholder: 'Search...'
      onPressItem: () => { }
    }
  }

  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  _filter(items, query) {
    if(query === '') {
      return items;
    }
    else {
      const regex = new RegExp(`${query.trim()}`, 'i');
      return items.filter(item => item.search(regex) >= 0);
    }
  }

  render() {
    const filteredItems = this._filter(this.props.items, this.state.query);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const listItems = dataSource.cloneWithRows(filteredItems);

    return (
      <View>
        <TextInput placeholder={this.props.searchPlaceholder}
                   value={this.state.query}
                   onChangeText={query => this.setState({query: query})} />

        <ListView
          dataSource={listItems}
          renderRow={(item) => {
            return (
              <TouchableOpacity onPress={this.props.onPressItem.bind(this, item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          }} />
      </View>
    )
  }
}
