import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { time } from 'console'

import { clickOnElement, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsCard } from './card'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-card>', () => {
  describe('Rendering', () => {})

  describe('API', () => {})

  describe('Accessibility', () => {})
})
