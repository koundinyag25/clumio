import { useContext } from 'react';
import logo from './logo.svg';
import sx from './App.module.scss';
import cx from 'classnames';

import { ThemeContext } from './providers/themeProvider/themeProvider';
import MovieListpage from './pages/movieListpage';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cx(sx.appContainer, sx[theme])}>
      <MovieListpage />
    </div>
  );
}

export default App;
