import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemedContext';

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>The Way Of Kings</li>
          <li style={{ background: theme.ui }}>The Name of the Wind</li>
          <li style={{ background: theme.ui }}>The Final Empire</li>
        </ul>
      </div>
    )
  }
}
