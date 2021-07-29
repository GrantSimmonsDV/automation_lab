import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test ('Adding a movie to page', async () => {

    let inputField = await driver.findElement(By.css('input')).sendKeys('Jurassic Park')
    let addBtn = await driver.findElement(By.css('button'))
    await addBtn.click()
     await driver.sleep(6000)
})
