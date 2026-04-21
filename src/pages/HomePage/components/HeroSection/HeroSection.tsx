import css from './index.module.scss';

export const HeroSection = () => {
    return (
        <section className={css.hero}>
            <div className={css.hero__content}>
                <div className={css.hero__call_to_action_wrapper}>
                    <h1 className={css.hero__title}>
                        Furniture designed to live in harmony, creating distinctive and timeless spaces
                    </h1>
                    <button className={css.hero__btn}>
                        Discover now
                    </button>
                </div>
                <div className={css.hero__badge}>
                    <span className={css.hero__badge_text}>
                        Do you know what is your decor style?
                    </span>
                </div>
            </div>
        </section>
    )
}

