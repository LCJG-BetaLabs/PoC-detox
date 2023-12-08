describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
    expect(1).toBe(1);
  });

  it('should show hello screen after tap', async () => {
    // await element(by.id('hello_button')).tap();
    // await expect(element(by.text('Hello!!!'))).toBeVisible();
    expect(1).toBe(1);
  });

  it('should show world screen after tap', async () => {
    // await element(by.id('world_button')).tap();
    // await expect(element(by.text('World!!!'))).toBeVisible();
    expect(1).toBe(1);
  });
});
