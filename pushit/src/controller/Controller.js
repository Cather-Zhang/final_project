import Model from '../model/Model.js';

export function move(model, dir) {
    model.puzzle.player.move(dir);
    return model.copy();
}