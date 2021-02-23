import { createRef, PureComponent } from 'react';
import './SubscribeForm.style.scss';

class SubscribeForm extends PureComponent {
    state = {
        email: ''
    }

    ref = createRef();

    onSubmit = (event) => {
        event.preventDefault();

        fetch('https://scandipwa.us1.list-manage.com/subscribe/post?u=2211d38cf9c565258d51eb39a&amp;id=722d91f428', {
            method: 'POST',
            body: new FormData(this.ref)
        })
    }

    render() {
        const { email } = this.state;

        return (
            <form
                className="SubscribeForm"
                ref={ (node) => { this.ref = node; } }
                onSubmit={ this.onSubmit }
            >
                <div className="SubscribeForm-Field">
                    <input
                        type="email"
                        value={ email }
                        name="EMAIL"
                        className="SubscribeForm-Email"
                        placeholder="Your email address"
                        onChange={ ({ target: { value: email } }) => this.setState({ email }) }
                    />
                    <div id="mce-responses" className="SubscribeForm-Response">
                        <div id="mce-error-response" style={{ display: 'none' }}></div>
                        <div id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                </div>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_2211d38cf9c565258d51eb39a_722d91f428" tabindex="-1" value="" />
                </div>
                <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="SubscribeForm-Button Button"
                />
            </form>
        );
    }
}

export default SubscribeForm;
