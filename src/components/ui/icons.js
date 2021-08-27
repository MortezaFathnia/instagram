import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Resources/icons/logo.png';

export const appLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width:props.width,
            height:props.height,
            background:`url(${logo}) no-repeat`
        }}></div>;
    if (props.link) {
        return (
            <Link to={props.link} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template;
    }
}