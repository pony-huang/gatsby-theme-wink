import React from 'react';

interface Props {
    type: string;
    mode?: 'line' | 'fill';
    className?: string;
}

// https://remixicon.com
export const Icon = (
    {
        type,
        mode = 'line',
        className = ''
    }: Props
) => (
    <i className={`remixicon-${type}-${mode} ${className}`} />
);
