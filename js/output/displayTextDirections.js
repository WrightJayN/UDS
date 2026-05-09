class DisplayTextDirections{
    static goingToRoomInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>Exit ${sourceBuildingNode.name}</li>
                    <li>Follow the yellow path on the map to ${destinationBuildingNode.name}</li>
                    <li>Enter ${destinationBuildingNode.name}</li>
                    <li>Navigate to ${destinationFloorNode.name}</li>
                    <li>Locate ${destinationRoomNode.name}</li>
                </ol>
            </div>
        `;
    }

    static goingToFloorInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>Exit ${sourceBuildingNode.name}</li>
                    <li>Follow the yellow path on the map to ${destinationBuildingNode.name}</li>
                    <li>Enter ${destinationBuildingNode.name}</li>
                    <li>Navigate to ${destinationFloorNode.name}</li>
                </ol>
            </div>
        `;
    }

    static goingToBuildingInDifferentBuilding(sourceBuildingNode, destinationBuildingNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>Exit ${sourceBuildingNode.name}</li>
                    <li>Follow the yellow path on the map to ${destinationBuildingNode.name}</li>
                    <li>Enter ${destinationBuildingNode.name}</li>
                </ol>
            </div>
        `;
    }

    static goingToRoomInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode, destinationRoomNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>You are in ${sourceBuildingNode.name}</li>
                    <li>Navigate from ${sourceFloorNode.name} to ${destinationFloorNode.name}</li>
                    <li>Locate ${destinationRoomNode.name}</li>                                
                </ol>
            </div>
        `;
    }

    static goingToFloorInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>You are in ${sourceBuildingNode.name}</li>
                    <li>Navigate from ${sourceFloorNode.name} to ${destinationFloorNode.name}</li>
                </ol>
            </div>
        `;
    }

    static goingToRoomInDifferentRoom(sourceFloorNode, sourceRoomNode, destinationRoomNode){
    return `
        <div class="direction-instructions">
            <h2>Step-by-Step:</h2>
            <ol>
                <li>You are on ${sourceFloorNode.name}</li>
                <li>Navigate from ${sourceRoomNode.name} to ${destinationRoomNode.name}</li>
            </ol>
        </div>
    `;
    }

    static goingToRoomInSameBuilding(sourceBuildingNode, destinationFloorNode, destinationRoomNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>You are in ${sourceBuildingNode.name}</li>
                    <li>Navigate to ${destinationFloorNode.name}</li>
                    <li>Locate ${destinationRoomNode.name}</li>
                </ol>
            </div>
        `;
    }
    
    static goingToFloorInSameBuilding(sourceBuildingNode, destinationFloorNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>You are in ${sourceBuildingNode.name}</li>
                    <li>Navigate to ${destinationFloorNode.name}</li>
                </ol>
            </div>
        `;
    }    

    static goingToRoomInSameFloor(sourceFloorNode, destinationRoomNode){
        return `
            <div class="direction-instructions">
                <h2>Step-by-Step:</h2>
                <ol>
                    <li>You are on ${sourceFloorNode.name}</li>
                    <li>Locate ${destinationRoomNode.name}</li>
                </ol>
            </div>
        `;
    }

    static goingToTheSamePlace(destinationCode){
        switch (destinationCode) {
            case 1:
                return `
                    <div class="direction-instructions">
                        <h2>Step-by-Step:</h2>
                        <ol>
                            <li>You are already in the right room</li>
                        </ol>
                    </div>
                `;
            case 2:
                return `
                    <div class="direction-instructions">
                        <h2>Step-by-Step:</h2>
                        <ol>
                            <li>You are already on the right floor</li>
                        </ol>
                    </div>
                `;
            case 3:
                return `    
                    <div class="direction-instructions">
                        <h2>Step-by-Step:</h2>
                        <ol>
                            <li>You are already at the right building</li>
                        </ol>
                    </div>
                `;
            default:
                break;
        }


        return `
        <div class="direction-instructions">
            <h2>Step-by-Step:</h2>
            <ol>
                <li>You are already at your destination</li>
            </ol>
        </div>
        `;
    }

    static getSourceCode(sourceBuildingNode, sourceFloorNode, sourceRoomNode){
        if(sourceRoomNode !== null){
            return 1;
        } else if(sourceFloorNode !== null){
            return 2;
        } else if(sourceBuildingNode !== null){
            return 3;
        }
    }
    
    static getDestinationCode(destinationBuildingNode, destinationFloorNode, destinationRoomNode){
        if(destinationRoomNode !== null){
            return 1;
        } else if(destinationFloorNode !== null){
            return 2;
        } else if(destinationBuildingNode !== null){
            return 3;
        }
    }

    // Updates text directions based on source and destination inputs
    static displayTextDirections(sourceBuildingNode, sourceFloorNode, sourceRoomNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode) {
        const content = document.getElementById('textDirectionsContent');
        let html = "";
        
        let sourceCode = this.getSourceCode(sourceBuildingNode, sourceFloorNode, sourceRoomNode);
        let destinationCode = this.getDestinationCode(destinationBuildingNode, destinationFloorNode, destinationRoomNode);

        if(sourceCode == 1 && destinationCode == 1){ // room to room
            if (sourceBuildingNode.name !== destinationBuildingNode.name) { // different buildings
                html += this.goingToRoomInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode);
            } else if (sourceFloorNode.name !== destinationFloorNode.name) { // different floors
                html += this.goingToRoomInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode, destinationRoomNode);
            } else if(sourceRoomNode.name !== destinationRoomNode.name){ // different rooms
                html += this.goingToRoomInDifferentRoom(sourceFloorNode, sourceRoomNode, destinationRoomNode);
            } else if(sourceRoomNode.name === destinationRoomNode.name){ // same rooms
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 2 && destinationCode == 2){ // floor to floor
            if (sourceBuildingNode.name !== destinationBuildingNode.name) { // different buildings
                html += this.goingToFloorInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode);
            } else if (sourceFloorNode.name !== destinationFloorNode.name) { // different floors
                html += this.goingToFloorInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode);
            } else if (sourceFloorNode.name === sourceFloorNode.name){ // same floors
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 3 && destinationCode == 3){ // building to building
            if (sourceBuildingNode.name !== destinationBuildingNode.name) { // different buildings
                html += this.goingToBuildingInDifferentBuilding(sourceBuildingNode, destinationBuildingNode);
            } else if(sourceBuildingNode.name === destinationBuildingNode.name){ // same buildings
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 1 && destinationCode == 2){ // room to floor
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToFloorInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode);
            } else if(sourceFloorNode.name !== destinationFloorNode.name){ // different floors
                html += this.goingToFloorInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode);
            } else if(sourceFloorNode.name === destinationFloorNode.name){ // same floors
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 1 && destinationCode == 3){ // room to building
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToBuildingInDifferentBuilding(sourceBuildingNode, destinationBuildingNode);
            } else if(sourceBuildingNode.name === destinationBuildingNode.name){ // same buildings
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 2 && destinationCode == 1){ // floor to room
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToRoomInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode);
            } else if(sourceFloorNode.name !== destinationFloorNode.name){ // different floors
                html += this.goingToRoomInDifferentFloor(sourceBuildingNode, sourceFloorNode, destinationFloorNode, destinationRoomNode);
            } else if(sourceFloorNode.name === destinationFloorNode.name){ // same floors
                html += this.goingToRoomInSameFloor(sourceFloorNode, destinationRoomNode);
            }
        } 
        else if(sourceCode == 2 && destinationCode == 3){ // floor to building
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToBuildingInDifferentBuilding(sourceBuildingNode, destinationBuildingNode);
            } else if(sourceBuildingNode.name === destinationBuildingNode.name){ // same buildings
                html += this.goingToTheSamePlace(destinationCode);
            }
        }
        else if(sourceCode == 3 && destinationCode == 1){ // building to room
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToRoomInDifferentBuilding(sourceBuildingNode, destinationBuildingNode,destinationFloorNode, destinationRoomNode);
            } else if(sourceBuildingNode.name === destinationBuildingNode.name){ // same buildings
                html += this.goingToRoomInSameBuilding(sourceBuildingNode, destinationFloorNode, destinationRoomNode);
            }
        } 
        else if(sourceCode == 3 && destinationCode == 2){ // building to floor
            if(sourceBuildingNode.name !== destinationBuildingNode.name){ // different buildings
                html += this.goingToFloorInDifferentBuilding(sourceBuildingNode, destinationBuildingNode, destinationFloorNode);
            } else if(sourceBuildingNode.name === destinationBuildingNode.name){ // same buildings
                html += this.goingToFloorInSameBuilding(sourceBuildingNode, destinationFloorNode);
            }
        }

        content.innerHTML = html;
    }
}

export { DisplayTextDirections }