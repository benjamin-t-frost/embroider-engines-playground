import { action } from '@ember/object';
import Component from '@glimmer/component';
import { faker } from '@faker-js/faker';

// This component cannot resolve correctly with static analysis turned on
export default class ButtonImportFakerNormally extends Component {
  @action
  async onClick() {
    console.log(faker);
  }
}
