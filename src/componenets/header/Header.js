import classes from './Header.module.css';
import meals from '../../assets/meals.png';

const LANGS = ["ENG","KA"];


function Header({onChangeLang}) {

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={meals}/>
            </div>
            <div className={classes.LANGS} >
                <select className={classes['language-bar']} onChange={onChangeLang}>
                    {LANGS.map(lang => (
                        <option key={lang} className={classes["lang-item"]} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Header;