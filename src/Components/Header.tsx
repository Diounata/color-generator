import styles from '../styles/Header.module.scss';

import { useColor } from '../Contexts/ColorContext';

export default function Header() {
    const { lastBackgrounds } = useColor();

    return (
        <header className={styles.headerContainer}>
            <span>
                <img src='/Palette.svg' alt='Palette' />
                Color generator
            </span>

            <div>
                {lastBackgrounds.map((background, index) => (
                    <article
                        style={{ background: `#${background}` }}
                        className={index === 0 ? styles.selected : ''}
                        title={`#${background}`}
                        key={index}>    
                    </article>
                ))}
            </div>
        </header>
    );
}
