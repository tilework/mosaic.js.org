import './Button.style.scss';

const Button = ({ children, icon, onClick }) => {
    const hasIcon = !!icon;

    return (
        <button onClick={ onClick } className={ 'Button ' + (hasIcon && 'Button_hasIcon') }>
            { children }
            { icon ? <img className="Button-Icon" src={ icon } alt="" /> : null }
        </button>
    );
}

export default Button;
