import { action } from '@ember/object';
import Component from '@glimmer/component';

// included in main bundle not vendors????
import { faker } from '@faker-js/faker';

export default class Button extends Component {
  @action
  async onClick() {
    console.log(faker);
  }
}
