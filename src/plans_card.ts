/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './button.js';

const basePlanFeatures = ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"];
const standardPlanFeatures = [...basePlanFeatures, "Connect Anywere"];
const premiumPlanFeatures = [...standardPlanFeatures, "Get New Features"];

const plans = [
    {
        title: 'Free Plan',
        features: basePlanFeatures,
        price: 0
    },
    {
        title: 'Standard Plan',
        features: standardPlanFeatures,
        price: 9
    },
    {
        title: 'Premium Plan',
        features: premiumPlanFeatures,
        price: 12
    },
]

@customElement('plans-card')
export class PlansCard extends LitElement {
    @property({ type: Number })
    accessor _selectedIndex = 1;

    static styles = css`
        :host {
            width: 100%;
        }

        .plans {
            display: flex;
            gap: 20px;
            padding: 40px;
            flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
            .plans {
                flex-direction: column;
            }
        }

        .card {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            border: 2px solid #DDD;
            padding: 30px;
            gap: 50px;
            cursor: pointer;
        }

        .card.active {
            border: 2px solid #F53838;
            transition: 0.5s all;
            -webkit-transition: 0.5s all;
        }

        .box-img {
            max-width: 60%;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .title {
            color: #0B132A;
            font-size: 18px;
            font-weight: 500;
            line-height: 30px;
        }

        .features {
            display: flex;
            flex-direction: column;
            gap:10px;
        }

        .feature {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .price {
            color: #4F5665;
            font-size: 25px;
            font-weight: 400;
            line-height: 30px;
        }

        .dark {
            color: #0B132A;
        }
    `;

    render() {
        return html`
            <div class='plans'>
                ${plans.map((plan, index) => html`
                    <div class='card ${this._selectedIndex === index ? 'active' : ''}' @click=${() => { this._selectedIndex = index }}>
                        <div class='content'>
                            <img class='box-img' src=${new URL('../../assets/plan-box.svg', import.meta.url).href} alt='box' />
                            
                            <span class='title'>${plan.title}</span>

                            <div class='features'>
                                ${plan.features.map(feature => html`
                                    <div class='feature'>
                                        <img src=${new URL('../../assets/check-nobg.svg', import.meta.url).href} alt='check' />
                                        ${feature}
                                    </div>
                                `)}
                            </div>
                        </div>
                        
                        <div class='footer'>
                            ${plan.price === 0 ? html`
                            <span class='price'><strong class='dark'>Free</strong></span>
                            ` : html`
                            <span class='price'><strong class='dark'>$${plan.price}</strong> / mo</span>
                            `}

                            <vpn-button type=${index === this._selectedIndex ? 'accent' : 'primary'} .onClick=${() => { this._selectedIndex = index }}>Select</vpn-button>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}
