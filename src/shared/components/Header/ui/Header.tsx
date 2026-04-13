import { Navigation } from "@shared/components/Navigation";
import Logo from '@assets/logo.svg?react';
import css from './inex.module.scss'

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.header__content}>
        <Navigation/>
        <Logo width={'190px'} height={'34px'} className={css.logo}/>
      </div>
    </header>
  )
}
