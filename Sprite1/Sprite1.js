/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rick-astely", "./Sprite1/costumes/rick-astely.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely2", "./Sprite1/costumes/rick-astely2.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely3", "./Sprite1/costumes/rick-astely3.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely4", "./Sprite1/costumes/rick-astely4.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely5", "./Sprite1/costumes/rick-astely5.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely6", "./Sprite1/costumes/rick-astely6.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely7", "./Sprite1/costumes/rick-astely7.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely8", "./Sprite1/costumes/rick-astely8.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely9", "./Sprite1/costumes/rick-astely9.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely10", "./Sprite1/costumes/rick-astely10.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely11", "./Sprite1/costumes/rick-astely11.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely12", "./Sprite1/costumes/rick-astely12.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely13", "./Sprite1/costumes/rick-astely13.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely14", "./Sprite1/costumes/rick-astely14.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely15", "./Sprite1/costumes/rick-astely15.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely16", "./Sprite1/costumes/rick-astely16.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely17", "./Sprite1/costumes/rick-astely17.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely18", "./Sprite1/costumes/rick-astely18.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely19", "./Sprite1/costumes/rick-astely19.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely20", "./Sprite1/costumes/rick-astely20.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely21", "./Sprite1/costumes/rick-astely21.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely23", "./Sprite1/costumes/rick-astely23.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely24", "./Sprite1/costumes/rick-astely24.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely25", "./Sprite1/costumes/rick-astely25.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely26", "./Sprite1/costumes/rick-astely26.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely27", "./Sprite1/costumes/rick-astely27.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely28", "./Sprite1/costumes/rick-astely28.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely29", "./Sprite1/costumes/rick-astely29.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely30", "./Sprite1/costumes/rick-astely30.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely31", "./Sprite1/costumes/rick-astely31.png", {
        x: 250,
        y: 188
      }),
      new Costume("rick-astely32", "./Sprite1/costumes/rick-astely32.png", {
        x: 250,
        y: 188
      })
    ];

    this.sounds = [new Sound("rickroll", "./Sprite1/sounds/rickroll.mp3")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(0.01);
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone("rickroll");
      yield;
    }
  }
}
