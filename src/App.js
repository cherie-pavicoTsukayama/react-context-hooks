import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemedContext';
import ThemedContextProvider from './contexts/ThemedContext';

function App() {
  return (
    <div className="App">
      <ThemedContextProvider>
        <Navbar />
        <BookList />
      </ThemedContextProvider>

    </div>
  );
}

export default App;
