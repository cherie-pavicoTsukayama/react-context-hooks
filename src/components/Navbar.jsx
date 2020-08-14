import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemedContext';
import { AuthContext } from '../contexts/AuthContext';

// export default class Navbar extends Component {
//   //using 'static contextType = ThemContext' looks up the tree for the ThemeContext.Provider
//   //which was given a value property that is the state of the context.jsx and gives
//   //access to this compenet to the Context properties! So cool!
//   //static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={() => toggleAuth()}>
//                 { isAuthenticated ? 'Logged In' : 'Logged Out'}
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           )
//         }}</ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>

//     );
//   }
// }

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;
