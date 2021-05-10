import React from "react";
import style from './app.module.scss';
import './custom.css';
import cs from 'classnames';

const App = () => {
    return(
        <div className={cs(style.header, 'color-whitesmoke')}>
            Hello, I react App Component!
        </div>
    )
}

export default App;

