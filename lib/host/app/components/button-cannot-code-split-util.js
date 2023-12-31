import { action } from '@ember/object';
import Component from '@glimmer/component';
const dynamicallyImportedUtil = () =>
  import('../utils/dynamically-imported-util');

export default class ButtonCannotCodeSplitUtil extends Component {
  @action
  async onClick() {
    // Would have to be separate workspace and not in host app
    const loadedDynamicallyImportedUtil = await dynamicallyImportedUtil();
    loadedDynamicallyImportedUtil.default();
  }
}
