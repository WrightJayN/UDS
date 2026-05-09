import { ValidateInput } from './processing/validateInput.js';
import { FindRequiredNodes } from './processing/findRequiredNode.js';
import { FindPath } from './processing/FindPath.js';
import { DisplayTextDirections } from './output/displayTextDirections.js';
import { SuggestLocation } from './processing/suggestLocation.js';
import { GetBuildingPictures } from './processing/getBuildingPictures.js';
import { DisplayCarousel }     from './output/displayCarousel.js';
import { DisplayPicture } from './output/displayPicture.js';
import { CreateOutputSections } from './processing/createOutputSection.js';
import { GraphDatabase } from './storage/graphDatabase.js';
import { TreeDataStruct } from './storage/treeDataStruct.js';
import { DisplayMapWithPath } from './output/displayMapWithPath.js';

document.addEventListener('DOMContentLoaded', function() {
    // Preload critical assets
    const preloadImages = [
        'assets/UTECH_MAP.webp',
        'assets/UTECH_ENTRANCE.webp',
        'assets/UTECH_CREST.webp',
        'assets/UTECH_ICON.webp'
        
    ];
    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let isLastDestError = false;

    const form = document.getElementById('directions-form');
    const outputContainer = document.getElementById('output');
    const errorContainer = document.getElementById('error');
    const errorMessage = document.getElementById('errorMessage');

    
    // Initialize data structs
    const tree = new TreeDataStruct();
    const graphDB = new GraphDatabase();
    const hashMap = tree.getHashMap();

    //Autocomplete suggestions
    const sourceInput = document.getElementById('source-input');
    const sourceSuggestions = document.getElementById('source-suggestions');
    const destinationInput = document.getElementById('destination-input');
    const destinationSuggestions = document.getElementById('destination-suggestions');
    const locations = Array.from(hashMap.values()).filter(node => node.type === "building" || node.type === "room").map(node => ({
        displayName: node.name,
        abbreviation: extractAbbreviation(node.name)
    }));

    function extractAbbreviation(name){
        const match = name.match(/\(([^)]+)\)/);
        return match ? match[1] : "";
    }
    

    function initializeSuggestions(inputEl, suggestionsEl, allItems) {
        if (!inputEl || !suggestionsEl) return;
        // Only create once
        if (inputEl.dataset.suggestionsInitialized) return;
        
        new SuggestLocation(inputEl, suggestionsEl, allItems);
        inputEl.dataset.suggestionsInitialized = 'true';
    }

    sourceInput.addEventListener('focus', () => {
        initializeSuggestions(sourceInput, sourceSuggestions, locations);
    });

    destinationInput.addEventListener('focus', () => {
        initializeSuggestions(destinationInput, destinationSuggestions, locations);
    });

    // Create output sections dynamically
    CreateOutputSections.createOutputSections(outputContainer);
    
    //Directions functionality
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const buildingPictureSection = document.getElementById('buildingPictureSection');
        buildingPictureSection.style.width = "100%"; 

        if(isLastDestError){
            errorContainer.style.display = 'none';  // Hide error if it was revealed
            isLastDestError = false;
        }

        try {     
            const source = document.getElementById('source-input').value;
            const destination = document.getElementById('destination-input').value;
            
            const [validatedSource, validatedDestination] = ValidateInput.validateInputs(source, destination, hashMap);
            console.log('Step 1 - Validate Inputs:', [validatedSource, validatedDestination]);

            const sourceNode = hashMap.get(validatedSource);
            const destinationNode = hashMap.get(validatedDestination);
            console.log('Step 2 - Find Nodes from HashMap:', sourceNode, destinationNode);

            const requiredNodes = FindRequiredNodes.findRequiredNodes(sourceNode, destinationNode);
            const [sourceBuildingNode, sourceFloorNode, sourceRoomNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode] = requiredNodes;
            console.log('Step 3 - Find Building and Floor Nodes:', requiredNodes);
 
            const buildingPhotos = GetBuildingPictures.getBuildingPictures(destinationBuildingNode);
            if (buildingPhotos) {
                DisplayCarousel.render(buildingPhotos, 'buildingPictureSection');
            }           
            console.log('Step 4: Building picture:', buildingPhotos);

            const sourceBuildingNodeFromGraph = graphDB.graph.get(sourceBuildingNode.name);
            const destinationBuildingNodeFromGraph = graphDB.graph.get(destinationBuildingNode.name);
            const path = FindPath.findPath(sourceBuildingNodeFromGraph, destinationBuildingNodeFromGraph, graphDB.graph);
            
            if (!path || path.length === 0) {
                console.warn('No path found between buildings');
            } else {
                console.log('Step 5: Path found:', path);
                
                await DisplayMapWithPath.displayMapWithPath(sourceBuildingNode, destinationBuildingNode, path);
                
                console.log('Step 6: Map with path displayed');

                DisplayTextDirections.displayTextDirections(sourceBuildingNode, sourceFloorNode, sourceRoomNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode);
            }            
            outputContainer.style.display = 'block';           // Make it visible

        } catch (error) {
            // Display error
            console.error('Error:', error);
            errorMessage.textContent = error.message;
            errorContainer.style.display = 'block'; // show error section if error occured
            outputContainer.style.display = 'none'; // hide output section
            isLastDestError = true;
        }
    });
    
    // Displays current version in footer
    fetch('version.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('version').innerText = text;
        })
        .catch(err => {
            console.error('Could load versions');
            document.getElementById('version').innerText = "Couldn't load version.";
        });

});