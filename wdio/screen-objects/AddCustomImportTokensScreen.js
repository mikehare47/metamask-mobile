/* eslint-disable no-undef */
import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';
import {
  TOKEN_ADDRESS_INPUT_BOX_ID,
  TOKEN_ADDRESS_SYMBOL_ID,
  TOKEN_IMPORT_BUTTON_ID,
} from './testIDs/Screens/AddCustomToken.testIds';

class AddCustomImportToken {
  get customTokenAddressField() {
    return Selectors.getElementByPlatform(TOKEN_ADDRESS_INPUT_BOX_ID);
  }

  get importButton() {
    return Selectors.getElementByPlatform(TOKEN_IMPORT_BUTTON_ID);
  }

  get symbolField() {
    return Selectors.getElementByPlatform(TOKEN_ADDRESS_SYMBOL_ID);
  }

  async typeCustomTokenAddress(text) {
    await Gestures.typeText(this.customTokenAddressField, text);
  }
  async scrollToImportButton() {
    await Gestures.swipe({ x: 300, y: 1000 }, { x: 300, y: 10 });
  }

  async tapImportButton() {
    await driver.pause(2000);
    await this.scrollToImportButton(); // because the bottom nav is blocking the import button
    await Gestures.waitAndTap(this.importButton);
  }

  async tapTokenSymbolField() {
    await Gestures.waitAndTap(this.symbolField);
  }

  async isTokenSymbolDisplayed() {
    await Gestures.waitAndTap(this.symbolField);
    await expect(this.symbolField).toBeDisplayed();
  }

  async tapTokenSymbolFieldAndDismissKeyboard() {
    await this.tapTokenSymbolField();
    await driver.pause(2000);
    await driver.hideKeyboard();
  }
}
export default new AddCustomImportToken();
