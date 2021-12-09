import { Fragment } from 'react';

import mealsimage from '../../assets/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsimage} alt="table with food" />
      </div>
    </Fragment>
  );
};

export default Header;
