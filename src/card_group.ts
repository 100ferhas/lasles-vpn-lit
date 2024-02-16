/* eslint-disable lit/no-classfield-shadowing */
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface CardGroupModel {
    icon: string,
    title: string,
    subtitle: string
}

@customElement('vpn-card-group')
export class CardGroup extends LitElement {

    @property({ type: Array })
    items!: CardGroupModel[];

    static styles = css`
        .card-group {
            padding: 30px;
            display: flex;
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 5px;
            margin: 0 20px;

            @media screen and (min-width: 768px) {
                margin: 0px 100px;
            }

            @media screen and (min-width: 1280px) {
                margin: 0px 150px;
            }
        }

        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            gap: 20px;
            padding: 20px;
        }

        .card:not(:last-child) {
            border-right: 2px solid #EEEFF2;
        }

        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FFECEC;
            width: 55px;
            height: 55px;
            border-radius: 50%;
        }

        .content {
            display: flex;
            flex-direction: column;
        }

        .title {
            color: #0B132A;
            font-size: 25px;
            font-weight: 700;
            line-height: 30px;
        }

        .subtitle {
            color: #4F5665;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
        }

        @media (max-width: 900px) {
            .card-group {
                flex-direction: column;
            }

            .card {
                justify-content: start;
            }

            .card:not(:last-child) {
                border-right: none;
                border-bottom: 2px solid #EEEFF2;
            }
        }
    `

    render() {
        return html`
        <div class='card-group'>
            ${this.items.map(item => html`
                        <div class='card'>
                            <div class='icon'>
                                <img src=${item.icon} alt=${item.title} />
                            </div>
                            <div class='content'>
                                <span class='title'>${item.title}</span>
                                <span class='subtitle'>${item.subtitle}</span>
                            </div>
                        </div>
                    `)}
        </div>
        `;
    }

}