import { CampusMapRenderer } from '../storage/campusMapRenderer.js';
class DisplayMapWithPath{
    // Display map with path
    static async displayMapWithPath(sourceBuildingNode, destinationBuildingNode, path) {
        const canvas = document.getElementById('mapCanvas');
        
        // Load map image first
        await CampusMapRenderer.loadMapImage('./assets/UTECH_MAP.webp', canvas);

        // Create complete map with path
        CampusMapRenderer.createMapWithPath(
            sourceBuildingNode,
            destinationBuildingNode,
            path,
            canvas
        );
    }
}

export { DisplayMapWithPath }