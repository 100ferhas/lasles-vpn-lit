import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('vpn-banner')
export class Banner extends LitElement {
    @property({ type: Boolean })
    reverse: boolean = false;

    static styles = css`
        .banner {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            padding: 100px 20px;

            @media screen and (min-width: 768px) {
                padding: 100px 100px;
            }

            @media screen and (min-width: 1280px) {
                padding: 100px 150px;
            }
        }

        .banner.reverse {
            flex-wrap: wrap-reverse;
        }

        .img-container {
            display: flex;
            flex: 1;
            min-width: 350px;
        }

        ::slotted(img) {
            max-width: 100%;
            flex: 1;
        }

        .content {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            gap: 20px;
            min-width: 350px;
        }
    `;

    render() {
        const image = html`<div class='img-container'><slot class='image' name='image'></slot></div>`;
        const content = html`<slot class='content' name='content'></slot>`;

        return html`
                <div class='banner ${this.reverse ? 'reverse' : ''}'>
                    ${this.reverse ? html`${content}${image}` : html`${image}${content}`}
                </div>
        `}
}
