import Button from '../Button';

import logo from './github-logo.png';

const GITHUB_LINK = 'https://github.com/tilework/mosaic';

const redirectToGithub = () => {
    window.location.href = GITHUB_LINK;
};

const GitHubButton = () => (
    <Button icon={ logo } onClick={ redirectToGithub }>
        GitHub
    </Button>
);

export default GitHubButton;
