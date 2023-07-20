import Route from '@ember/routing/route';

export default class Home extends Route {
  showButton = false;

  model() {
    return {
      showIncorrectlyCodeSplitButton:
        window.location.href === 'http://localhost:4200/',
    };
  }
}
