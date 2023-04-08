import nf from './NotFound.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { NavLink } from 'react-router-dom';

let NotFound = () => {
  return (
    <div>
      <Header>
        <h1>This page does not exists</h1>
      </Header>
      <Main>
        <h1 className={nf.error}>Error 404 not found</h1><br/>
        <p>Go to <NavLink to="/">main page</NavLink></p>
      </Main>
    </div>
  );
}

export default NotFound;
