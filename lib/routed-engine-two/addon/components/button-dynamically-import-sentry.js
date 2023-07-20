import { action } from '@ember/object';
import Component from '@glimmer/component';
// import { faker } from '@faker-js/faker';

export default class ButtonImportFakerNormally extends Component {
  @action
  async onClick() {
    // console.log(faker);
  }
}
