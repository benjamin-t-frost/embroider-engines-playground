import { action } from '@ember/object';
import Component from '@glimmer/component';
const dynamicallyImportedUtil = () =>
  import('../utils/dynamically-imported-util');

export default class ButtonCannotCodeSplitUtil extends Component {
  @action
  async onClick() {
    const loadedDynamicallyImportedUtil = await dynamicallyImportedUtil();
    loadedDynamicallyImportedUtil.default();
  }
}
