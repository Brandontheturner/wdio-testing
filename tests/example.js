describe('First Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://www.example.com/');
        browser.pause(2000);
        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');
    })

    it('h1 should be visible', () => {
        const h1 = $('h1');
        h1.waitForExist();
        expect(h1).toBeVisible();
    })

    it('p tag should be visible', () => {
        const p = $('p');
        p.waitForExist();
        expect(p).toBeVisible();
    })

    it('Check link value', () => {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example');
    }) 

    it('get element text', () => {
        const text = $('h1').getText();
        const element = $('h1');
        element.waitForExist();
        expect(element).toHaveText('Example Domain');
    })
})
