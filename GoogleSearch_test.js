Feature('GoogleSearch');

Scenario('test something',  ( { I } ) => {
    I.amOnPage('/');
    I.wait(3);
    I.see('Gmail');
    I.saveScreenshot('a.png')
});

Scenario('test something-2',  ( { I } ) => {
    I.amOnPage('http://jnnce.ac.in/jnndemo/');
    I.wait('3');
    I.see('WELCOME TO JNNCE, SHIVAMOGGA')
    I.click("Click here")
    I.wait('10');
    I.saveScreenshot('b.png')
});
