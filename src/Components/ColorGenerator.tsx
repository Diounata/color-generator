import styles from '../styles/ColorGenerator.module.scss';

import { useColor } from '../Contexts/ColorContext';

export default function ColorGenerator() {
    const { background, generateColor } = useColor();

    return (
        <main className={styles.container} style={{ background: `#${background}` }} >
            <div>
                <span>#{background}</span>
                <button onClick={generateColor}>Generate color</button>
            </div>
        </main>
    );
}
