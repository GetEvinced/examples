import { expect, browser, $ } from '@wdio/globals'

describe('Evinced Test', () => {
    it('uses the evinced webdriverio sdk', async () => {        
        await browser.activateApp(`com.evinced.demoapp`)

        const selector = 'new UiSelector().text("Where to?")'
        const demoAppElement = $(`android=${selector}`)
        await (await demoAppElement).waitForDisplayed({ timeout: 20000 })           

        const buttonSelector = 'new UiSelector().resourceId("com.evinced.demoapp:id/destination_input")'
        const buttonElement = $(`android=${buttonSelector}`)
        await buttonElement.click()
    })
})