const ContentWrapper = ({ children, ...props }) => (
    <div style={ { maxWidth: '1200px', margin: 'auto' } } { ...props }>
        { children }
    </div>
);

export default ContentWrapper;
