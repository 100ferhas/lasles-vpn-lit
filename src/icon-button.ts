/* eslint-disable lit/no-classfield-shadowing */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('vpn-icon-button')
export class IconButton extends LitElement {
    @property()
    type!: 'primary';

    @property({ type: Boolean })
    disabled = false;

    @property({ type: Object })
    icon!: URL;

    static styles = css`
        .icon-button {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 2px solid #F53838;
            background-color: white;
            cursor: pointer;
            padding: 5px;
        }

        .primary {
            background-color: #F53838;
        }

        .icon-button.disabled {
            background-color: #DDD;
            border-color: #DDD;
            cursor: not-allowed;
        }
    `

    render() {
        return html`
            <img class='icon-button ${this.type} ${this.disabled ? 'disabled' : ''}' src=${this.icon.href} alt='icon' />
        `
    }
}