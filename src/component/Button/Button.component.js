import './Button.style.scss';

const Button = ({ children, icon, onClick, isPrimary }) => {
    const hasIcon = !!icon;

    return (
        <button onClick={ onClick } className={ 'Button ' + (hasIcon ? ' Button_hasIcon' : '') + (isPrimary ? ' Button_isPrimary' : '') }>
            { children }
            { icon ? <img className="Button-Icon" src={ icon } alt="" /> : null }
        </button>
    );
}

export default Button;
