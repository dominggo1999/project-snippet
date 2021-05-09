import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ThemeContext } from '../App';
import { initialTheme } from '../reducer/themeReducer';

const Nav = () => {
  const { theme, dispatchTheme } = useContext(ThemeContext);

  const changeTheme = (e) => {
    dispatchTheme({
      type: 'changeTheme',
      payload: e.target.value,
    });
  };

  return (
    <div className="nav-wrapper">
      <div className="nav">
        <label htmlFor="theme-select">Choose a theme</label>
        <select
          id="theme-select"
          defaultValue={initialTheme}
          onChange={changeTheme}
        >
          {
            Object.entries(themes).map((theme) => {
              return (
                <option
                  key={theme[0]}
                  value={theme[0]}
                >{theme[0]}
                </option>
              );
            })
          }
        </select>
        <NavLink
          activeClassName="link-active"
          exact
          to="/"
        >.eslintrc.json
        </NavLink>
        <NavLink
          activeClassName="link-active"
          to="/redux"
        >redux
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
