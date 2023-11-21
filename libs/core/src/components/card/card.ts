import {gdsCustomElement, html as customElementHtml} from 'utils/helpers/custom-element-scoping'

import { LitElement } from 'lit'
import {property} from "lit/decorators";
import {stripWhitespace} from "utils/helpers/strip-white-space";

/**
 * @element gds-card
 * @status beta
 *
 * TODO: Add documentation
 */

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
const html = stripWhitespace(customElementHtml)

@gdsCustomElement('gds-card')
export class GdsCard extends LitElement {

  /**
   * The background color of the card.
   */
  @property()
  color = 'grey'

  render() {
    return html`
      <span class="${this.color}">test4</span>
    `;
  }
}
