import { Engine, Scene, Light, Vector3, HemisphericLight, Color4, UniversalCamera } from '@babylonjs/core';

export class BabylonWrapper {
    scene: Scene;
    canvas: HTMLCanvasElement;
    engine: Engine;
    camera: UniversalCamera;
    light: Light;

    constructor(canvasElement: string) {
        this.canvas = document.querySelector(canvasElement) as HTMLCanvasElement;
        this.engine = new Engine(this.canvas, true);
    }

    createScene(): void {
        this.scene = new Scene(this.engine);

        this.scene.clearColor = new Color4(0.8, 0.8, 0.8, 1);

        this.camera = new UniversalCamera('camera1', new Vector3(0, 0, 0), this.scene);

        this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
    }

    doRender(): void {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }

    resetScene() {
        this.scene.dispose();
        this.createScene();
    }
}
