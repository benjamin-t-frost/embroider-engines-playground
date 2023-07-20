import { action } from '@ember/object';
import Component from '@glimmer/component';
const lodash = () => import('lodash');

export default class Button extends Component {
  @action
  async onClick() {
    const loadedLodash = await lodash();
    console.log(loadedLodash);
  }
}
