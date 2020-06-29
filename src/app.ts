import { BabylonWrapper } from './babylon/babylon-wrapper';

class App {
    private babylon: BabylonWrapper;

    init(babylon: BabylonWrapper) {
        this.babylon = babylon;
        this.initScene();
    }

    initScene() {
        this.babylon.createScene();
        this.babylon.doRender();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new App();

    app.init(new BabylonWrapper('#babylon'));
});
