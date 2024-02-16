/* eslint-disable wc/guard-super-call */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import './icon-button.js';

const reviews = [
    {
        picture: 'https://randomuser.me/api/portraits/men/79.jpg',
        name: 'Erasmo Schumm',
        location: 'Moenchester, United States',
        content: 'Lasles VPN has been an exceptional choice for my online privacy needs. With its fast servers and user-friendly interface, I can browse the internet securely and enjoy unrestricted access to geo-blocked websites. Moreover, the robust encryption ensures that my data remains protected at all times.',
        score: 4.1,
    },
    {
        picture: 'https://randomuser.me/api/portraits/women/7.jpg',
        name: 'Jeana Shields',
        location: 'Favborough, United States',
        content: 'Lasles VPN is an exceptional provider. I\'ve had a positive experience with their fast connection, unlimited bandwidth, and top-notch security features.It\'s user-friendly and reliable, ensuring my online privacy.',
        score: 4.7,
    },
    {
        picture: 'https://randomuser.me/api/portraits/women/79.jpg',
        name: 'Misha Leffler',
        location: 'Tannastad, Poland',
        content: 'Lasles VPN has exceeded my expectations with its exceptional service and strong security features. The connection is fast, stable, and provides an excellent level of protection for my online activities.',
        score: 3.9,
    },
    {
        picture: 'https://randomuser.me/api/portraits/men/34.jpg',
        name: 'Francais Von Rueden',
        location: 'Utrecht, Netherlands',
        content: 'I\'ve been using Lasles VPN for a while now, and it has been an absolute game-changer for my online security and privacy needs. The connection speed is top-notch, and the interface is user-friendly. With strong encryption and a wide range of servers to choose from, Lasles VPN ensures I can browse the web with peace of mind.',
        score: 4.2,
    },
    {
        picture: 'https://randomuser.me/api/portraits/men/41.jpg',
        name: 'Shelia Hackett',
        location: 'South Boycemouth, Canada',
        content: 'Lasles VPN has been an absolute game-changer in securing my online activities. With its user-friendly interface, lightning-fast connection, and an extensive range of server locations, it offers a hassle-free and secure browsing experience.',
        score: 4.8,
    },
    {
        picture: 'https://randomuser.me/api/portraits/women/56.jpg',
        name: 'Georgann Muller',
        location: 'Dusseldorf, Germany',
        content: 'Lasles VPN has exceeded my expectations in every way. From its seamless user interface to lightning-fast connection speeds, this VPN service stands out. With robust encryption and a vast server network, Lasles VPN ensures my privacy and access to blocked content.',
        score: 5.0,
    },
];

@customElement('vpn-reviews')
export class Reviews extends LitElement {
    @property({ attribute: false })
    accessor _selectedIndex = 0;

    @query('.container')
    private _containerDiv!: HTMLDivElement;

    @property({ attribute: false })
    accessor _reviewWidth: number = 434;

    static styles = css`
        :host {
            width: 100%;
        }

        .container {
            overflow-x: scroll;
            scrollbar-width: 0;
            -ms-overflow-style: none;
            scroll-behavior: smooth;
            padding: 30px 20px;

            &::-webkit-scrollbar {
                display: none;
            }

            @media screen and (min-width: 768px) {
                padding: 30px 100px;
            }

            @media screen and (min-width: 1280px) {
                padding: 30px 150px;
            }
        }

        .reviews {
            display: inline-flex;
            justify-content: start;
            align-items: flex-start;
            gap: 30px;
            transition: 0.5s ease-in-out;
            -webkit-transition: 0.5s ease-in-out;
        }

        .review {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            border: 2px solid #DDD;
            padding: 20px;
            width: 360px;
            height: 290px;
            transition: 0.5s ease-in-out;
            -webkit-transition: 0.5s ease-in-out;
            gap: 20px;
            cursor: pointer;
        }

        .review.active {
            border: 2px solid #F53838;
            box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 5px;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .profile {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .info {
            display: flex;
            flex-direction: column;
        }

        .title {
            color: #0B132A;
            font-size: 18px;
            font-weight: 500;
            line-height: 30px;
        }

        .subtitle {
            color: #4F5665;
            font-size: 14px;
            font-weight: 400;
            line-height: 30px;
        }

        .score {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #0B132A;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            gap: 10px;
        }

        .score img {
            width: 20px;
            height: 20px;
        }

        .content {
            color: #0B132A;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .controls {
            display: flex;
            justify-content: space-between;
            padding: 40px 20px;
            padding-top: 0;

            @media screen and (min-width: 768px) {
                padding: 40px 100px;
                padding-top: 0;
            }

            @media screen and (min-width: 1280px) {
                padding: 40px 150px;
                padding-top: 0;
            }
        }

        .selector {
            display: flex;
            align-items: center;
            gap: 10px;
            transition: 0.5s ease-in-out;
            -webkit-transition: 0.5s ease-in-out;
        }

        .select {
            width: 10px;
            height: 10px;
            background-color: #DDD;
            border-radius: 10px;
            cursor: pointer;
        }

        .select.active {
            width: 30px;
            height: 10px;
            background-color: #F53838;
        }
    `;

    private _set(value: number) {
        if (value >= 0 && value < reviews.length) {
            this._selectedIndex = value;
            this._scrollToElement();
        }
    }

    private _change(value: number) {
        if (this._selectedIndex + value >= 0 && this._selectedIndex + value < reviews.length) {
            this._selectedIndex += value;
            this._scrollToElement();
        }
    }

    private _scrollToElement() {
        this._containerDiv.querySelector(`.review[index="${this._selectedIndex}"]`)
            ?.scrollIntoView({ inline: 'center', block: 'nearest' });
    }

    private _onScroll = () => {
        const startScroll = this._containerDiv.scrollLeft <= 10;
        const endScroll = this._containerDiv.scrollLeft === this._containerDiv.scrollWidth - this._containerDiv.offsetWidth;

        if (startScroll) {
            this._selectedIndex = 0;
        } else if (endScroll) {
            this._selectedIndex = reviews.length - 1;
        } else {
            const middle = this.clientWidth / 2;
            const halfCard = this._reviewWidth / 2;
            this._selectedIndex = Math.floor((this._containerDiv.scrollLeft + middle - halfCard) / this._reviewWidth);
        }
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this._containerDiv.addEventListener("scrollend", this._onScroll);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._containerDiv.removeEventListener("scrollend", this._onScroll);
    }

    render() {
        return html`
            <div class='container'>
                <div class='reviews'>
                    ${reviews.map((review, index) => html`
                        <div index="${index}" class='review ${this._selectedIndex === index ? 'active' : ''}' @click=${() => this._set(index)}>
                            <div class='header'>
                                <img class='profile' src=${review.picture} alt='profile' />
                                <div class='info'>
                                    <span class='title'>${review.name}</span>
                                    <span class='subtitle'>${review.location}</span>
                                </div>
                                <div class='score'>
                                    ${review.score}
                                    <img src=${new URL('../../assets/star.svg', import.meta.url).href} alt='star' />
                                </div>
                            </div>

                            <div class='content'>
                                ${review.content}
                            </div>
                        </div>
                    `)}
                </div>
            </div>

            <div class='controls'>
                    <div class='selector'>
                        ${reviews.map((_review, index) => html`
                            <span @click=${() => this._set(index)} class='select ${this._selectedIndex === index ? 'active' : ''}'></span>
                        `)}
                    </div>

                    <div>
                        <vpn-icon-button .disabled=${this._selectedIndex === 0} type='primary' @click=${() => this._change(-1)} .icon=${new URL('../../assets/arrow-back.svg', import.meta.url)}></vpn-icon-button>
                        <vpn-icon-button .disabled=${this._selectedIndex === reviews.length - 1} type='primary' @click=${() => this._change(+1)} .icon=${new URL('../../assets/arrow-forward.svg', import.meta.url)}></vpn-icon-button>
                    </div>
                </div>
        `;
    }
}
