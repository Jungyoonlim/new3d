import * as THREE from 'three';

// Convert 3D position to 2D screen coordinates 
export const toScreenPosition = (position: {x: number, y: number, z: number} , camera: THREE.Camera, canvas: HTMLCanvasElement) => {
    // Create a new vector in world coordinates
    const vector = new THREE.Vector3(position.x, position.y, position.z); 

    // Project the vector from world space to NDC 


    // Convert NDC to screen coordinates

    // Round the values for pixel coordinates

}