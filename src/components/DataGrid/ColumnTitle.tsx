import React from 'react';
import clsx from 'clsx';

import { SortingDirection } from './types';

interface ColumnTitleProps {
    title?: string;
    disableSorting?: boolean;
    direction?: SortingDirection;
    selected: boolean;
    position: 'start' | 'center' | 'end' | undefined;
    disableSort?: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function ColumnTitle({
    title,
    disableSorting,
    direction,
    selected,
    position,
    disableSort,
    onClick
}: ColumnTitleProps) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            className={clsx({
                'flex cursor-pointer w-full h-full items-center': true,
                'justify-end': position === 'end',
                'justify-center': position === 'center',
                'justify-start pl-10': position === 'start'
            })}
            onMouseEnter={() => {
                if (!disableSort) {
                    setHovered(true);
                }
            }}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
        >
            <div className="relative">
                {!disableSort && (
                    <div
                        className={clsx({
                            'flex items-center justify-center absolute top-[2px] w-5 h-5 bg-disabled rounded-[15px] default-transition':
                                true,
                            'opacity-0':
                                (!hovered && !selected) || disableSorting,
                            'opacity-1':
                                (hovered || selected) && !disableSorting,
                            '!bg-primary-100': hovered,
                            '-translate-x-6':
                                position === 'end' &&
                                (hovered || selected) &&
                                !disableSorting
                        })}
                    >
                        <img
                            src="/sorting_arrow.svg"
                            alt="Sorting arrow"
                            height={14}
                            width={10}
                            className={clsx({
                                'default-transition': true,
                                'sorting-icon-default': !hovered,
                                'sorting-icon-hover': hovered,
                                'rotate-180': direction === 'desc'
                            })}
                        />
                    </div>
                )}
                <div
                    className={clsx({
                        'text-blackWhite-400 body1-bold default-transition':
                            true,
                        'translate-x-6':
                            (hovered || selected) &&
                            position !== 'end' &&
                            !disableSorting
                    })}
                >
                    {title}
                </div>
            </div>
        </div>
    );
}
