import React from 'react';

const Logo = (): React.ReactElement => {
    const style = {
        width: '16px',
        height: '16px',
    };

    return (
        <img src="/logo.jpg" alt="logo" style={style} />
    );
};

export default Logo;
