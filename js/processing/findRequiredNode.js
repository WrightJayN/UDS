class FindRequiredNodes {

    static findBuildingNode(node) {
        if(node.type === 'room'){
            return node.parent.parent;
        }else if(node.type === 'floor'){
            return node.parent;
        }else if(node.type === 'building'){
            return node;
        }
    }

    static findFloorNode(node) {
        if(node.type === 'room'){
            return node.parent;
        }else if(node.type === 'floor'){
            return node;
        }else if(node.type === 'building'){
            return null;
        }
    }

    static findRoomNode(node){
        if(node.type === 'room'){
            return node;
        }else if(node.type === 'floor'){
            return null;
        }else if(node.type === 'building'){
            return null;
        }
    }

    static findRequiredNodes(sourceNode, destinationNode) {
        const sourceBuildingNode = this.findBuildingNode(sourceNode);
        const sourceFloorNode = this.findFloorNode(sourceNode);
        const sourceRoomNode = this.findRoomNode(sourceNode);
        const destinationBuildingNode = this.findBuildingNode(destinationNode);
        const destinationFloorNode = this.findFloorNode(destinationNode);    
        const destinationRoomNode = this.findRoomNode(destinationNode);    
        
        return[sourceBuildingNode, sourceFloorNode, sourceRoomNode, destinationBuildingNode, destinationFloorNode, destinationRoomNode];
    }
}

export { FindRequiredNodes };