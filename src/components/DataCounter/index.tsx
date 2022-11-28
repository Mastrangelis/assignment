import React from 'react';
import Spinner from '../Spinner';
import { DataCounterProps } from './types';

export default function DataCounter({
    isLoading,
    totalCount
}: DataCounterProps) {
    return (
        <div className="h-[62px] pl-2 flex items-center">
            <div className="grow">
                <div className="flex items-center">
                    {isLoading ? (
                        <>
                            <div className="opacity-50">
                                <Spinner />
                            </div>
                            <span className="text-blackWhite-400 pl-3">
                                processing request
                            </span>
                        </>
                    ) : (
                        <div className="flex items-center space-x-[6px]">
                            <span
                                className="text-dark body1-bold"
                                data-cy="total-count"
                            >
                                {totalCount}
                            </span>
                            <span className="text-blackWhite-400 body1">
                                results
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
