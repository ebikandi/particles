const PARTICLE_COUNT = 100; 

const state = {
    x: new Float32Array(PARTICLE_COUNT), // x location
    y: new Float32Array(PARTICLE_COUNT), // y location
    oldX: new Float32Array(PARTICLE_COUNT), // previous x location
    oldY: new Float32Array(PARTICLE_COUNT), // previous y location
    vx: new Float32Array(PARTICLE_COUNT), // horizontal velocity
    vy: new Float32Array(PARTICLE_COUNT), // vertical velocity
    p: new Float32Array(PARTICLE_COUNT), // pressure
    pNear: new Float32Array(PARTICLE_COUNT), // pressure near
    g: new Float32Array(PARTICLE_COUNT), // 'nearness' to neighbour
    mesh: [] // Three.js mesh for rendering
};


/**
 * Pass 1
 *  - Apply forces to the particles and advance their position based on their velocity
 *  - Store the particles' position in a spatial hash map for a fast lookup in later steps 
 */

const applyGlobalForces = (i, dt) => {
    const force = GRAVITY;
    state.vx[i] += force[0] * dt;
    state.vy[i] += force[1] * dt;
}; 



for (let i = 0; i < PARTICLE_COUNT; i++) {
        
    // Update old position
    state.oldX[i] = state.x[i];
    state.oldY[i] = state.y[i];
    applyGlobalForces(i, dt);

    // Update positions
    state.x[i] += state.vx[i] * dt;
    state.y[i] += state.vy[i] * dt;

    // Update hashmap
    const gridX = (state.x[i] / canvasRect.w + 0.5) * GRID_CELLS;
    const gridY = (state.y[i] / canvasRect.h + 0.5) * GRID_CELLS;
    hashMap.add(gridX, gridY, i);

}

const index = Math.round(cellX) + Math.round(cellY) * gridCellsInRow
const gridX = (state.x[i] / canvasRect.w + 0.5) * GRID_CELLS;
const gridY = (state.y[i] / canvasRect.h + 0.5) * GRID_CELLS; 

/**
 * Pass 2
 * - Find interesting (close enough) neighbours
 * - Calculate pressure and near-pressure for the particles' location
 * - Apply relaxation
 */


 
 /**
  * Pass 3
  * - Contain the particles within a boundary
  * - Calculate their new velocity
  */