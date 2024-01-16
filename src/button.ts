import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './logo.js'

@customElement('vpn-button')
export class Button extends LitElement {
    @property()
    type?: 'primary' | 'accent';

    @property()
    shape?: 'rounded' | 'square' = 'rounded';

    @property({ attribute: false })
    onClick!: Function;

    static styles = css`
        .button {
            display: inline-block;
            white-space: nowrap;
            color: #0B132A;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            padding: 10px;
        }

        .button.primary {
            color: #F53855;
            border: 1px solid #F53855;
            border-radius: 50px;
            padding: 10px 40px;
        }

        .button.primary:hover {
            background-color: #F53855;
            color: white;
            transition: 0.2s ease-in-out;
            -webkit-transition: 0.2s ease-in-out;
        }

        .button.accent {
            background-color: #F53855;
            color: white;
            border: 1px solid #F53855;
            border-radius: 50px;
            padding: 10px 40px;
        }

        .button.square {
            border-radius: 10px;
            background-color: #F53838;
            color: white;
            box-shadow: rgb(246 56 56 / 20%) 0px 10px 15px 6px;
        }
    `;

    render() {
        return html`
            <a href='#!' @click=${this.onClick} class='button ${this.type} ${this.shape}'>
                <slot></slot>
            </a>
        `;
    }
}
