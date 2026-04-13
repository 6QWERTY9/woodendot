
import css from './index.module.scss';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <ul className={css.navigation__list}>
        <li className={css.navigation__list__items}>
          <a href='#'className={css.navigation__list__items__link}>Wooden Furniture</a>
        </li>
        <li className={css.navigation__list__items}>
          <a href='#'className={css.navigation__list__items__link}>About</a>
        </li>
        <li className={css.navigation__list__items}>
          <a href='#'className={css.navigation__list__items__link}>Stories</a>
        </li>
      </ul>
    </nav>
  )
}
