import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../redux/action';
import './header.css';
const Header = ({ title }) => {
    const dispatch = useDispatch();
    const [active, setActive] = React.useState(true);
    const iconName = active ? 'fa-expand-arrows-alt' : 'fa-compress-alt';
    return (
        <header>
            <h2>
                <i className='fab fa-free-code-camp'></i> {title}
            </h2>
            <button
                onClick={() => {
                    if (active === false) {
                        dispatch(toggleAction('origin'));
                        return setActive(!active);
                    }
                    dispatch(toggleAction(title.toLowerCase()));
                    setActive(!active);
                }}
            >
                <i className={`fas ${iconName}`}></i>
            </button>
        </header>
    );
};

export default Header;
