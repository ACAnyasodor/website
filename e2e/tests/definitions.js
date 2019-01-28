// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT
const puppeteer = require('puppeteer')

let page
let browser

describe('Definitions page', () => {
  beforeAll(async () => {
    if (process.env.NODE_ENV === 'debug') {
      browser = await puppeteer.launch({ headless: false, slowMo: 80 })
      page = await browser.newPage()
    }
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto(`${__HOST__}/definitions`, { timeout: 40000, waitUntil: 'domcontentloaded' })
  })

  afterAll(() => {
    browser.close()
  })

  test('should display "Available definitions" text on page', async () => {
    await expect(page).toMatch('Available definitions')
  })

  test(
    'user can type a definition text and should display a component in the list',
    async () => {
      await page.waitForSelector('.rbt-input-main')
      await page.click('.rbt-input-main')
      await page.type('.rbt-input-main', 'async')
      await page.waitFor(2000)
      await page.waitForSelector('.rbt-menu>li')
      let element = await page.$('.rbt-menu li:nth-child(1) a')
      element.click()
      await page.waitForSelector('.components-list')
      await page.waitForSelector('.components-list div:nth-child(0n+1) .component-row')
      const componentTitle = await page.$('.component-name')
      const text = await (await componentTitle.getProperty('textContent')).jsonValue()
      await expect(text).toMatch('async')
      await page.waitForSelector(`.list-image`)
      await page.waitForSelector(`.list-activity-area`)

      const codeButtonElement = await page.$(`.add-source-component > i`)
      const codeButtonContent = await (await codeButtonElement.getProperty('className')).jsonValue()
      await expect(codeButtonContent).toMatch('fas fa-code')

      const inspectButtonElement = await page.$(`.inspect-component > i`)
      const inspectButtonContent = await (await inspectButtonElement.getProperty('className')).jsonValue()
      await expect(inspectButtonContent).toMatch('fas fa-search')

      const copyButtonElement = await page.$(`.copy-url-button > i`)
      const copyButtonContent = await (await copyButtonElement.getProperty('className')).jsonValue()
      await expect(copyButtonContent).toMatch('fas fa-copy')

      const switchButtonElement = await page.$(`.switch-or-add-component > i`)
      const switchButtonContent = await (await switchButtonElement.getProperty('className')).jsonValue()
      await expect(switchButtonContent).toMatch('fas fa-exchange-alt')

      const undoButtonElement = await page.$(`.revert-componentChanges > i`)
      const undoButtonContent = await (await undoButtonElement.getProperty('className')).jsonValue()
      await expect(undoButtonContent).toMatch('fas fa-undo')

      const removeButtonElement = await page.$(`.remove-component > i`)
      const removeButtonContent = await (await removeButtonElement.getProperty('className')).jsonValue()
      await expect(removeButtonContent).toMatch('fas fa-times list-remove')
    },
    10000
  )

  test(
    'should display the detail after clicking on a component in the list',
    async () => {
      const firstElement = '.components-list > .ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1)'
      await page.click(firstElement)
      await page.waitForSelector(`${firstElement} > div.two-line-entry > div.list-panel`)
      const component = `${firstElement} > div.two-line-entry > div.list-panel > div`
      const declaredElement = await page.$(`${component} > div.col-md-5 > div:nth-child(1) > div.col-md-2 > b`)
      const declaredContent = await (await declaredElement.getProperty('textContent')).jsonValue()
      await expect(declaredContent).toMatch('Declared')
      const sourceElement = await page.$(`${component} > div.col-md-5 > div:nth-child(2) > div.col-md-2 > b`)
      const sourceContent = await (await sourceElement.getProperty('textContent')).jsonValue()
      await expect(sourceContent).toMatch('Source')
      const releaseElement = await page.$(`${component} > div.col-md-5 > div:nth-child(3) > div.col-md-2 > b`)
      const releaseContent = await (await releaseElement.getProperty('textContent')).jsonValue()
      await expect(releaseContent).toMatch('Release')
      const discoveredElement = await page.$(`${component} > div.col-md-7 > div:nth-child(1) > div.col-md-2 > b`)
      const discoveredContent = await (await discoveredElement.getProperty('textContent')).jsonValue()
      await expect(discoveredContent).toMatch('Discovered')
      const attributionElement = await page.$(`${component} > div.col-md-7 > div:nth-child(2) > div.col-md-2 > b`)
      const attributionContent = await (await attributionElement.getProperty('textContent')).jsonValue()
      await expect(attributionContent).toMatch('Attribution')
      const filesElement = await page.$(`${component} > div.col-md-7 > div:nth-child(3) > div.col-md-2 > b`)
      const filesContent = await (await filesElement.getProperty('textContent')).jsonValue()
      await expect(filesContent).toMatch('Files')
    },
    10000
  )

  test(
    'should edit a license of a component in the list',
    async () => {
      await page.waitForSelector(`[name="licensed.declared"] > span > span`)
      await page.click(`[name="licensed.declared"] > span > span`)
      await page.waitForSelector(`.spdx-picker`)

      const inputValue = await page.$eval(
        `.spdx-input-picker > div.rbt-input.form-control > .rbt-input-wrapper > div > .rbt-input-main`,
        el => el.value
      )
      await page.click(
        `.spdx-input-picker > div.rbt-input.form-control > .rbt-input-wrapper > div > .rbt-input-main`,
        'MIT'
      )
      for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace')
      }
      await page.type(
        `.spdx-input-picker > div.rbt-input.form-control > .rbt-input-wrapper > div > .rbt-input-main`,
        'MIT'
      )
      await page.click('#rbt-menu-item-1')
      await page.click('.spdx-picker-header-buttons.col-md-2 > button.btn.btn-success')
      await page.waitForSelector(`[name="licensed.declared"] > span > span.editable-field.bg-info`)
    },
    10000
  )

  test(
    'should open a modal while attempt to change a source location of a component in the list',
    async () => {
      await page.waitForSelector(`[name="described.sourceLocation"] > .fas.fa-pencil-alt.editable-marker`)
      await page.click(`[name="described.sourceLocation"] > .fas.fa-pencil-alt.editable-marker`)
      await page.waitForSelector(`.sourcePicker`)
      await page.waitForSelector(`.sourcePicker__button--select`)
      await page.click(`.sourcePicker__button--select`)
    },
    10000
  )

  test(
    'should show an input field while attempting to change the release date of a component in the list',
    async () => {
      await page.waitForSelector(`[name="described.releaseDate"] > .fas.fa-pencil-alt.editable-marker`)
      await page.click(`[name="described.releaseDate"] > .fas.fa-pencil-alt.editable-marker`)
      await page.waitForSelector(`[name="described.releaseDate"] > input`)
    },
    10000
  )

  test(
    'should display a modal after clicking on the inspect button of a definition the list',
    async () => {
      await page.waitForSelector('.inspect-component')
      await page.click('.inspect-component')
      await page.waitForSelector('.fullDetaiView__modal')
      await page.waitForSelector('.fullDetaiView__modal .save-button')
      await page.click('.fullDetaiView__modal .save-button')
    },
    10000
  )

  test(
    'should open the contribution modal',
    async () => {
      await page.waitForSelector('.contribute-button')
      await page.click('.contribute-button')
      await page.waitForSelector('.contributePrompt__modal')
      await page.select('.contributePrompt__modal select[name="type"]', 'missing')
      await page.type(`.contributePrompt__modal input[name="summary"]`, 'AUTOMATION TEST')
      await page.type(`.contributePrompt__modal textarea[name="details"]`, 'AUTOMATION TEST')
      await page.type(`.contributePrompt__modal textarea[name="resolution"]`, 'AUTOMATION TEST')
      await page.waitForSelector('.contributePrompt__modal .contributePrompt__modal--contribute-button')
      await page.click('.contributePrompt__modal .contributePrompt__modal--contribute-button')
      await page.waitForSelector('.contribution__success')
      const contributionNotice = await page.$(`.contribution__success`)
      const contributionNoticeContent = await (await contributionNotice.getProperty('textContent')).jsonValue()
      await expect(contributionNoticeContent).toMatch('Successfully contributed')
    },
    20000
  )
})
