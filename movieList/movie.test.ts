import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test ('Adding a movie to page, crossing off, then deleting', async () => {

    let inputField = await driver.findElement(By.css('input')).sendKeys('Jurassic Park')
    let addBtn = await driver.findElement(By.css('button'))
    await addBtn.click()
     await driver.sleep(3000)

     let crossOffMovie = await driver.findElement(By.xpath('//li/span'))
     await crossOffMovie.click()
     await driver.sleep(3000)
     
     let deleteMovie = await driver.findElement(By.xpath('//li/button'))
     await deleteMovie.click()
     await driver.sleep(3000)

})
