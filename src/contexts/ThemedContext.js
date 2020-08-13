import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemedContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  }

  
}
