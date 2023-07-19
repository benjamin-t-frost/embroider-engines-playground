import { action } from '@ember/object';
import Component from '@glimmer/component';

// does code split correctly
// const lodash = import('lodash');
export default class Modal extends Component {
  @action
  confirm() {
    // console.log('modal', lodash);
    this.modals.open('example-modal');
  }
}
