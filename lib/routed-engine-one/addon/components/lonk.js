import Component from '@glimmer/component';

// This component cannot resolve correctly with static analysis turned on
export default class Lonk extends Component {
  something = 'yes';
}
