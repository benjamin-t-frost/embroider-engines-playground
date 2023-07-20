import { module, test } from 'qunit';
import { setupRenderingTest } from 'host/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | button-cannot-code-split-util',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ButtonCannotCodeSplitUtil />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ButtonCannotCodeSplitUtil>
        template block text
      </ButtonCannotCodeSplitUtil>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
