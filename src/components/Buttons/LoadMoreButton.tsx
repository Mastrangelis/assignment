import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { LoadMoreButtonProps } from '../DataGrid/types';

import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadMoreButton({
    onLoadMore,
    isLoading
}: LoadMoreButtonProps) {
    return (
        <div
            data-cy="load-more-btn"
            className="w-full bg-alabaster flex items-center justify-center p-2.5 cursor-pointer border hover:!bg-blackWhite-200"
            onClick={onLoadMore}
        >
            {isLoading ? (
                <Skeleton containerClassName="flex items-center h-[22px] w-[110px] justify-center" />
            ) : (
                <span>Load more</span>
            )}
        </div>
    );
}
