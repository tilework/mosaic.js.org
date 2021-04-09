import Button from '../Button';

const DOCUMENTATION_LINK = 'https://scandipwa.gitbook.io/mosaic/';

const redirectToDocs = () => {
    window.location.href = DOCUMENTATION_LINK;
};

const DocsButton = () => (
    <Button onClick={ redirectToDocs }>
        Docs
    </Button>
);

export default DocsButton;
