import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

export const ColorContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface ContextProps {
    background: string;
    lastBackgrounds: string[];
    generateColor(): void;
}

export function ColorContextProvider({ children }: ChildrenProps) {
    const [background, setBackground] = useState(null);
    const [lastBackgrounds, setLastBackgrounds] = useState([]);

    function generateColor() {
        const color = Math.floor(Math.random() * 16777215).toString(16);

        const lastColorsFiltered = lastBackgrounds.filter(
            (c, index) => index < 9
        );
        const lastColors = [color, ...lastColorsFiltered];

        setLastBackgrounds(lastColors);
        setBackground(String(color));
    }

    useEffect(() => {
        generateColor();
    }, []);

    return (
        <ColorContext.Provider
            value={{
                background,
                lastBackgrounds,
                generateColor,
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}

export function useColor() {
    return useContext(ColorContext);
}
