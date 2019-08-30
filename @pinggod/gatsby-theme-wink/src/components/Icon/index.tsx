import React from 'react';

interface Props {
    type: string;
    mode?: 'line' | 'fill';
    className?: string;
    style?: React.CSSProperties;
}

// https://remixicon.com
export const Icon = (props: Props): JSX.Element => {
    const {
        type = '',
        mode = 'line',
        className = '',
        style = {},
    } = props;

    return (
        <i className={`remixicon-${type}-${mode} ${className}`} style={style} />
    );
};
