import Button from '../Button';

const DOCUMENTATION_LINK = '#get-support';

const redirectToDocs = () => {
    window.location.href = DOCUMENTATION_LINK;
};

const SupportButton = () => (
    <Button onClick={ redirectToDocs }>
        Commercial Support
    </Button>
);

export default SupportButton;
