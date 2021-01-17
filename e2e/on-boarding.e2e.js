describe('OnBoarding flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have onboarding screens', async () => {
    // onboarding screen 1
    await expect(element(by.id('onboarding-next-button'))).toBeVisible();
    await expect(element(by.id('onboarding-skip-button'))).toBeVisible();
    await expect(element(by.text('React Native Commons Collection'))).toBeVisible();
    await element(by.id('onboarding-next-button')).tap();

    // onboarding screen 2
    await expect(element(by.id('onboarding-next-button'))).toBeVisible();
    await expect(element(by.id('onboarding-skip-button'))).toBeVisible();
    await expect(element(by.text('React Native UI Collection'))).toBeVisible();
    await element(by.id('onboarding-next-button')).tap();

    // onboarding screen 3
    await expect(element(by.id('onboarding-next-button'))).toBeVisible();
    await expect(element(by.id('onboarding-skip-button'))).toBeVisible();
    await expect(element(by.text('React Native Icon Collection'))).toBeVisible();
    await element(by.id('onboarding-next-button')).tap();

    // onboarding screen 4
    await expect(element(by.text('React Native Logo Collection'))).toBeVisible();
  });
});
