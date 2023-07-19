import { action } from '@ember/object';
import Component from '@glimmer/component';

// does code split correctly
const lodash = import('lodash');

export default class Button extends Component {
  @action
  async onClick() {
    console.log('asd', await lodash);

    // not code split
    const dynamic = import('../utils/dynamic');
    if (window.location.href === 'http://localhost:4200/not-home-engine') {
      // Can't handle default exports in this setup without destructuring?
      const { default: dynamics } = await dynamic;
      console.log('asd2', await dynamics);
      dynamics();
    }
  }
}
