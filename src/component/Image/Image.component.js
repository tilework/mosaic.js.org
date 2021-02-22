import './Image.style.scss';

const Image = ({ className, ...props }) => {
    return (
        <img
          alt=""
          className={ `Image ${ className }` }
          { ...props }
        />
    );
}

export default Image;
