import React from 'react';
import * as S from "./index.style";

const Logo = (): React.ReactElement => {
    return (
        <div>
            <S.LogoIcon />
            <img src="/avatar.jpg" alt="" />
        </div>
    );
};

export default Logo;
