import React from 'react';

import './header.styles.scss';
import CustomInput from '../custom-input/custom-input.component';

const Header = () => (
    <div className="header">
        <div className="header-container">
            <CustomInput />
        </div>
    </div>
)

export default Header;