import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './navigation.js';
import './banner.js';
import './button.js';
import './card_group.js';
import './plans_card.js';
import './reviews.js';

const cardGroupItems = [
  {
    icon: new URL('../../assets/user.svg', import.meta.url).href,
    title: '90+',
    subtitle: 'Users'
  },
  {
    icon: new URL('../../assets/location.svg', import.meta.url).href,
    title: '30+',
    subtitle: 'Locations'
  },
  {
    icon: new URL('../../assets/server.svg', import.meta.url).href,
    title: '50+',
    subtitle: 'Servers'
  }
];

const checkItems = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
]

@customElement('lasles-vpn')
export class LaslesVpn extends LitElement {
  static styles = css`
    .title-small {
      color: #0B132A;
      font-size: 35px;
      font-weight: 500;
      line-height: 50px; 
    }

    .title-big {
      color: #0B132A;
      font-size: 50px;
      font-weight: 500;
      line-height: 70px; 
    }

    .subtitle {
      color: #4F5665;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
    }

    .check {
      display: flex;
      gap: 10px;
      align-items: center;
      color: #4F5665;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
    }

    .plans {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      background: linear-gradient(180deg, #F8F8F8 -45.04%, rgba(248, 248, 248, 0.00) 88.56%);
      padding: 50px 20px;

      @media screen and (min-width: 768px) {
        padding: 50px 100px;
      }

      @media screen and (min-width: 1280px) {
        padding: 50px 150px;
      }
    }

    .global {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding: 50px 20px;

      img {
        max-width: 100%;
      }

      @media screen and (min-width: 768px) {
        padding: 50px 100px;
      }

      @media screen and (min-width: 1280px) {
        padding: 50px 150px;
      }
    }

    .customers {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .padding {
      padding-left: 20px;
      padding-right: 20px;

      @media screen and (min-width: 768px) {
        padding-left: 100px;
      padding-right: 100px;
      }

      @media screen and (min-width: 1280px) {
        padding-left: 150px;
      padding-right: 150px;
      }
    }

    .subscribe {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 20px;
        padding: 40px;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 5px;
        position: relative;
        background: #FFF;
        z-index: 1;

        @media screen and (min-width: 768px) {
          margin: 20px 100px;
        }

        @media screen and (min-width: 1280px) {
          margin: 20px 150px;
        }

        .content {
          display: flex;
          flex-direction: column;
        }
      }

      footer {
        display: flex;
        justify-content: space-between;
        background-color: #F8F8F8;
        margin-top: -100px;
        padding: 140px 20px 50px 20px;
        z-index: 0;
        position: relative;
        color: #4F5665;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        gap: 20px;

        @media screen and (min-width: 768px) {
          padding: 140px 100px 50px 100px;
        }

        @media screen and (min-width: 1280px) {
          padding: 140px 150px 50px 150px;
        }

        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;

          .title {
            color: #0B132A;
            font-size: 18px;
            font-weight: 500;
            line-height: 30px;
          }

          a {
            text-decoration: none;
            color: #4F5665;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;

            &:hover {
              color: #0B132A;
            }
          }

          &:nth-child(1) {
            flex: 2;
          }
        }

        .social {
          margin-top: 20px;
          display: flex;
          
          img {
            cursor: pointer;
            margin-right: -20px;
          }
        }
      }
  `;

  render() {
    return html`
      <nav>
        <vpn-navigation .activeIndex=${0}></vpn-navigation>
      </nav>

      <main>
        <vpn-banner .reverse=${true}>
          <span slot='content' class='title-big'>Want anything to be easy with <strong>LaslesVPN</strong></span>
          <span slot='content' class='subtitle'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</span>
          <vpn-button slot='content' shape='square' type='primary'>Get Started</vpn-button>
          <img slot='image' src=${new URL('../../assets/illustration-1.svg', import.meta.url).href} alt='illustration1' />
        </vpn-banner>

        <vpn-card-group .items=${cardGroupItems}></vpn-card-group>

        <vpn-banner>
          <span slot='content' class='title-small'>We Provide Many Features You Can Use</span>
          <span slot='content' class='subtitle'>You can explore the features that we provide with fun and have their own functions each feature.</span>
          ${checkItems.map(item => html`
            <div slot='content' class='check'>
              <img src=${new URL('../../assets/check.svg', import.meta.url).href} alt='check' />
              ${item}
            </div>
          `)}
          <img slot='image' src=${new URL('../../assets/illustration-2.svg', import.meta.url).href} alt='illustration2' />
        </vpn-banner>

        <section class='plans'>
          <span class='title-small'>Choose Your Plan</span>
          <span class='subtitle'>Let's choose the package that is best for you and explore it happily and cheerfully.</span>
          <plans-card></plans-card>
        </section>

        <section class='global'>
          <span class='title-small'>Huge Global Network of Fast VPN</span>
          <span class='subtitle'>See LaslesVPN everywhere to make it easier for you when you move locations.</span>
          <div>
            <img class='map' src=${new URL('../../assets/world.svg', import.meta.url).href} alt='world' />
            <img alt='sponsors' src=${new URL('../../assets/sponsored.png', import.meta.url).href} />
          </div>
        </section>

        <section class='customers'>
          <span class='title-small padding'>Trusted by Thousands of Happy Customer</span>
          <span class='subtitle padding'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</span>
          <vpn-reviews></vpn-reviews>
        </section>

        <section class='subscribe'>
          <div class='content'>
            <span class='title-small'>Subscribe Now for Get Special Features!</span>
            <span class='subtitle'>Let's subscribe with us and find the fun.</span>
          </div>
          <vpn-button class='button' type='accent' shape='square'>Subscribe Now</vpn-button>
        </section>
      </main>

      <footer>
        <div>
          <vpn-logo></vpn-logo>
          <span><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</span>
          <div class='social'>
            <img alt='fb' src=${new URL('../../assets/facebook.svg', import.meta.url).href} />
            <img alt='tw' src=${new URL('../../assets/twitter.svg', import.meta.url).href} />
            <img alt='ig' src=${new URL('../../assets/instagram.svg', import.meta.url).href} />
          </div>
          <small>©2020LaslesVPN</small>
        </div>
        <div>
          <span class='title'>Product</span>
          <a href="#!">Download</a>
          <a href="#!">Pricing</a>
          <a href="#!">Locations</a>
          <a href="#!">Server</a>
          <a href="#!">Countries</a>
          <a href="#!">Blog</a>
        </div>
        <div>
          <span class='title'>Engage</span>
          <a href="#!">LaslesVPN ?</a>
          <a href="#!">FAQ</a>
          <a href="#!">Tutorials</a>
          <a href="#!">About Us</a>
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
        </div>
        <div>
          <span class='title'>Earn Money</span>
          <a href="#!">Affiliate</a>
          <a href="#!">Become Partner</a>
        </div>
      </footer>
    `;
  }
}
