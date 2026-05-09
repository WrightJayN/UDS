class CreateOutputSections{
    static createOutputSections(outputContainer) {
        outputContainer.innerHTML = `            
            <!-- Step by Step Directions -->
            <div id="textDirections" class="output-section">
                <div id="textDirectionsContent"></div>
            </div>
            
            <!-- Building and Floor Pictures -->
            <div class="output-row output-section">
                <div id="buildingPictureSection" class="output-section.half">
                    <h3>Destination Building</h3>
                    <div id="buildingPictureContent"></div>
                </div>
            </div>

            <!-- Map section -->
            <div class="output-section" id="mapSection">
                <h2>Route Map</h2>
                <div class="map-container">
                    <div id="mapContent">
                        <canvas id="mapCanvas"></canvas>
                    </div>
                </div>
            </div>

        `;
    }
}

export { CreateOutputSections }