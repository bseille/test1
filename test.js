//Script for the test case 6 of Botify QA Challenge step2
const timeout = 10000
//typingSpeed value is set to simulate realistic typing.
const typingSpeed = 50

describe(
  'Google search test',
  () => {
    let page
    beforeAll(async () => {
      jest.setTimeout(timeout)
	  //Launch chrome browser
      page = await global.__BROWSER__.newPage()
      await page.goto('https://google.com')
    }, timeout)

    afterEach(async () => {
      await page.waitFor(1000)
    })

    afterAll(async () => {
	  //Closing page
      await page.close()
    })

    it('Google homepage loads', async () => {
      //Type the google search
	await page.waitForSelector('input[type="text"]')
      await page.waitForSelector('input[type="submit"]')
      await page.type('input[type="text"]', '43/20', {delay: typingSpeed})
      await page.click('input[type="submit"]')
    })

    it('Verify the result of division', async () => {
	  //Check results
	  const result = await page.$eval("#cwos", el => el.textContent);
	  expect(result).toBe('2.15')
    })

  },
  timeout
)
