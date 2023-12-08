describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show step one section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should show see your change section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();

  });

  it('should show debug section', async () => {

    await expect(element(by.text('Debug'))).toBeVisible();
  });
});
