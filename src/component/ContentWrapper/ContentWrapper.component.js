import './ContentWrapper.style.scss';

const ContentWrapper = ({ children, className, ...props }) => (
    <div className={ `ContentWrapper ${ className }` } { ...props }>
        { children }
    </div>
);

export default ContentWrapper;
