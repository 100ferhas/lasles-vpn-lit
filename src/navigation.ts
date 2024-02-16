/* eslint-disable lit/no-classfield-shadowing */
/* eslint-disable wc/guard-super-call */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './logo.js';
import './button.js';

interface ILink {
    text: string,
    sectionSelector: string
}

const _links: ILink[] = [
    {
        text: 'About',
        sectionSelector: '.about'
    },
    {
        text: 'Features',
        sectionSelector: '.features'
    },
    {
        text: 'Pricing',
        sectionSelector: '.plans'
    },
    {
        text: 'Testimonials',
        sectionSelector: '.customers'
    },
    {
        text: 'Help',
        sectionSelector: 'footer'
    },
];

@customElement('vpn-navigation')
export class Navigation extends LitElement {
    @property({ attribute: false })
    _shadowRoot: ShadowRoot | null | undefined = null;

    @property({ attribute: false })
    _observers: IntersectionObserver[] = [];

    @property({ attribute: false })
    _navOpacity: number = 0;

    @property({ type: Number })
    activeIndex: number = 0;

    static styles = css`
        nav {
            position: fixed;
            width: 100%;
            background-color: white;
            z-index: 99;
        }

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

    connectedCallback(): void {
        super.connectedCallback();

        this._shadowRoot = document.querySelector("lasles-vpn")?.shadowRoot;

        _links.forEach((link: ILink, index: number) => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting === true) {
                    this.activeIndex = index;
                }
            }, { threshold: [0.5] });

            const element = this._shadowRoot?.querySelector(link.sectionSelector);

            if (element) {
                observer.observe(element);
                this._observers.push(observer);
            }
        });

        document.addEventListener("scroll", this._scrollListener);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this._observers.forEach(o => o.disconnect());
        this._observers = [];

        this._shadowRoot = null;

        document.removeEventListener("scroll", this._scrollListener);
    }

    private _scrollListener = () => {
        const opacity = window.scrollY / 10;
        this._navOpacity = opacity >= 10 ? 10 : opacity;
    }

    private _linkClicked = (link: ILink) => {
        this._shadowRoot?.querySelector(link.sectionSelector)?.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return html`
            <nav style="box-shadow: rgb(0 0 0 / ${this._navOpacity}%) 0px 10px 15px 5px;">
                <div class='navigation'>
                    <vpn-logo></vpn-logo>

                    <div class='links link-list'>
                        ${_links.map((link, index) => html`
                            <a href='#!' @click=${() => this._linkClicked(link)} class='${this.activeIndex === index ? 'active' : ''}'>
                            ${link.text}
                        </a>
                        `)}
                    </div>

                    <div class='links'>
                        <vpn-button>Sign in</vpn-button>
                        <vpn-button type='primary'>Sign up</vpn-button>
                    </div>
                </div>
            </nav>
        `;
    }
}