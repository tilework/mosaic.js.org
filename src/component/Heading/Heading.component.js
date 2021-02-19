import './Heading.style.scss';

const Heading = ({ children, type: Element, className = '', ...props }) => {
    return (
        <Element
          className={ `Heading Heading_${ Element } ${ className }` }
          { ...props }
        >
            { children }
        </Element>
    );
}

export default Heading;
