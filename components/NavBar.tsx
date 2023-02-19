import React from 'react';
import ActiveLink from './ActiveLink';
import styles from './NavBar.module.css'

const menuItems = [
  {text:'Home',href:'/'},
  {text:'About',href:'/about'},
  {text:'Contact',href:'/contact'},
  {text:'Pricing',href:'/pricing'},
]

const NavBar = () => {
  return (
    // <nav style={{ marginRight:'10px'}}>
    // <nav className={styles.menu}>
    <nav className={styles['menu-container']}>
    
    {
    menuItems.map( ({text,href}) =>(
            <ActiveLink key={href} text={text} href={href}></ActiveLink>  
            )
        )
    }

    {/* <ActiveLink text='Home' href='/'></ActiveLink>
    <ActiveLink text='About' href='/about'></ActiveLink>
    <ActiveLink text='Contact' href='/contact'></ActiveLink>
    <ActiveLink text='Pricing' href='/pricing'></ActiveLink> */}
  </nav>
  );
}

export default NavBar;
