import './Image.style.scss';

const Image = ({ className, ...props }) => {
    return (
        <img
          className={ `Image ${ className }` }
          { ...props }
        />
    );
}

export default Image;
