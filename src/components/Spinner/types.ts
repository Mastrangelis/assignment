type SpinnerSize = 'sm' | 'md';

type SpinnerColor = 'light' | 'default' | 'disabled';

interface SpinnerProps {
    size?: SpinnerSize;
    color?: SpinnerColor;
}

export type { SpinnerProps };
