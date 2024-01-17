import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './logo.js';
import './button.js';

@customElement('vpn-navigation')
export class Navigation extends LitElement {
    private _links = ['About', 'Features', 'Pricing', 'Testimonials', 'Help'];

    @property({ type: Number })
    activeIndex!: number;

    static styles = css`
        .navigation {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;

            @media screen and (min-width: 768px) {
                padding: 20px 100px;
            }

            @media screen and (min-width: 1280px) {
                padding: 20px 150px;
            }
        }

        .links {
            display: flex;
            gap: 30px;

            @media screen and (max-width: 468px) {
                gap: 5px;
            }
        }

        a {
            text-decoration: none;
            color: #4F5665;
            font-size: 16px;
            font-weight: 400;
        }

        a.active {
            color: #F53855 !important;
        }

        a:hover {
            color: #0B132A;
        }

        @media (max-width: 1024px) {
            .link-list {
                display: none;
            }
        }
    `;

    render() {
        return html`
            <div class='navigation'>
                <vpn-logo></vpn-logo>

                <div class='links link-list'>
                    ${this._links.map((link, index) => html`
                        <a href='#!' @click=${() => { this.activeIndex = index }} class='${this.activeIndex === index ? 'active' : ''}'>${link}</a>
                    `)}
                </div>

                <div class='links'>
                    <vpn-button>Sign in</vpn-button>
                    <vpn-button type='primary'>Sign up</vpn-button>
                </div>
            </div>
        `;
    }
}
