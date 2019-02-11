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


// Pass 1

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