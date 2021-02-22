import './List.style.scss';

const List = ({ children, className = '', ...props }) => {
    return (
        <ul
          className={ `List ${ className }` }
          { ...props }
        >
            { children }
        </ul>
    );
}

export default List;
