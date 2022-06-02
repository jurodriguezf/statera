import {useNavigate} from "react-router-dom";
import React from "react";

const classes = {
    buttonVariant: {
        primary: "main-page-active-button transition ease-in-out delay-100 hover:scale-105 duration-50",
        secondary: "main-page-inactive-button transition ease-in-out delay-100 hover:scale-105 duration-50"
    },
    iconVariant: {
        active: "main-page-active-icon",
        inactive: "main-page-inactive-icon"
    }
}

const renderIcon = (label, currentPage) => {
    switch(label) {
        case 'Home': return <svg className={label===currentPage ? classes.iconVariant.active : classes.iconVariant.inactive}
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>;
        case 'Favoritos': return <svg className={label===currentPage ? classes.iconVariant.active : classes.iconVariant.inactive}
                                      width="24" height="24" viewBox="0 0 24 24"
                                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                      strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"/>
        </svg>;
        case 'Crear Receta': return <svg className={label===currentPage ? classes.iconVariant.active : classes.iconVariant.inactive}
                                         width="24" height="24" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="20" x2="8" y2="16"/>
            <line x1="5" y1="13" x2="11" y2="19"/>
            <path d="M11 19l7 -7a4 4 0 0 0 -6 -6l-7 7"/>
        </svg>;
        case 'Mi Cuenta': return <svg className={label===currentPage ? classes.iconVariant.active : classes.iconVariant.inactive}
                                      fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>;
    }
}

const IconButton = (props) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(props.link)} type="button" className={props.label===props.currentPage ? classes.buttonVariant.primary : classes.buttonVariant.secondary}>
            {renderIcon(props.label, props.currentPage)}
            {props.label}
        </button>
    );

};

export default IconButton