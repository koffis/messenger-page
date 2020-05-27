import React from 'react';
import s from './Search.module.css'

const Search = (props) => {
    return (
        <div>
            <div className={s.yourAvatar}>
                <img alt={'user avatar'} src={'https://p.kindpng.com/picc/s/65-653274_workers-compensation-law-social-security-disability-user-icon.png'}/>
            </div>
            <div>
                <input type={'search'}/>
            </div>
        </div>

    );
};

export default Search;