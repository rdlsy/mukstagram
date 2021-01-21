import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { useTheme } from '../hoc/useTheme';
import { theme } from '../styles/theme';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import UploadPage from '../pages/UploadPage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer/Footer';
import Auth from '../hoc/auth';

function App() {
  const [themeMode, toggleTheme] = useTheme();
  const mode = themeMode === 'light' ? theme.colors.light : theme.colors.dark
  const theme2 = { ...theme, colors: mode }

  return (
    <ThemeProvider theme={theme2}>
      <GlobalStyle />
      <HeaderContainer toggleTheme={toggleTheme} theme={theme2}  />
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)}></Route>
        <Route exact path="/post/:id" component={Auth(PostPage, null)}></Route>
        <Route exact path="/register" component={Auth(RegisterPage, false)}></Route>
        <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
        {/* <Route exact path="/map" component={MapPage}></Route> */}
        <Route path="/profile" component={Auth(ProfilePage, true)}></Route>
        <Route exact path="/upload" component={Auth(UploadPage, true)}></Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
