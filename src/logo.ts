import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const logo = new URL('../../assets/logo.svg', import.meta.url).href;

@customElement('vpn-logo')
export class Logo extends LitElement {
    static styles = css`
        .logo {
            font-size: 20px;
            color: #0B132A;
            display: flex;
            align-items: center;
            gap: 5px;
        }
    `;

    render() {
        return html`
            <div class='logo'>
                <img src=${logo} alt='logo' width='35' />
                <span>Lasles<strong>VPN</strong></span>
            </div>
        `;
    }
}
