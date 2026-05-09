class MinHeap {
    constructor() {
        this.heap = [];
    }
    getHeapLength() {
        return this.heap.length;
    }
    isHeapEmpty() {
        return this.heap.length === 0;
    }
    insertElementIntoHeap(node, priority) {
        this.heap.push({ node, priority });
        this.moveElementUpHeap(this.heap.length - 1);
    }
    extractMinValueFromHeap() {
        if (this.isHeapEmpty()) return null;
        
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.moveElementDownHeap(0);
        
        return min;
    }
    moveElementUpHeap(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            
            if (this.heap[parentIndex].priority <= this.heap[index].priority) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            
            index = parentIndex;
        }
    }
    moveElementDownHeap(index) {
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.heap.length && 
                this.heap[leftChild].priority < this.heap[smallest].priority) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && 
                this.heap[rightChild].priority < this.heap[smallest].priority) {
                smallest = rightChild;
            }

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            
            index = smallest;
        }
    }
}

class FindPath {

    static calculateDistance(node1, node2) {
        if (!node1 || !node2) return Infinity;
        
        const dx = node2.x_coor - node1.x_coor;
        const dy = node2.y_coor - node1.y_coor;
        
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Finds shortest path using OPTIMIZED Dijkstra's algorithm with MinHeap
     * 
     * @param {Object} startNode - Starting graph node
     * @param {Object} endNode - Destination graph node
     * @param {Map} graph - Graph containing all nodes
     * @returns {Array|null} Array of nodes representing the path, or null if no path exists
     */
    static findPath(startNode, endNode, graph) {
        // Handle null or undefined inputs
        if (!startNode || !endNode || !graph) {
            return null;
        }

        // Handle same start and end node
        if (startNode === endNode) {
            return [startNode];
        }

        // Initialize data structures for Dijkstra's algorithm
        const distances = new Map(); // Distance from start to each node
        const previous = new Map();  // Previous node in optimal path
        const visited = new Set();   // Set of visited nodes
        const minHeap = new MinHeap(); // Priority queue for efficient minimum finding

        // Initialize all nodes with infinite distance
        for (const [nodeName, node] of graph) {
            distances.set(node, Infinity);
            previous.set(node, null);
        }

        // Distance to start node is 0
        distances.set(startNode, 0);
        
        // Add start node to priority queue
        minHeap.insertElementIntoHeap(startNode, 0);

        // Dijkstra's algorithm main loop with MinHeap optimization
        while (!minHeap.isHeapEmpty()) {
            // OPTIMIZATION: MinHeap gives us minimum distance node in O(log V) time
            const { node: currentNode, priority: currentDistance } = minHeap.extractMinValueFromHeap();

            // Skip if already visited (can happen with duplicate entries in heap)
            if (visited.has(currentNode)) {
                continue;
            }

            // Mark current node as visited
            visited.add(currentNode);

            // If we reached the end node, we can stop early
            if (currentNode === endNode) {
                break;
            }

            // CRITICAL FIX: Skip if this node is unreachable (prevents infinite loop)
            // If the current node has infinite distance, no path exists to any remaining nodes
            if (currentDistance === Infinity) {
                break;
            }

            // Check all neighbors of current node
            if (currentNode.neighbors && Array.isArray(currentNode.neighbors)) {
                for (const neighbor of currentNode.neighbors) {
                    // Skip visited neighbors
                    if (visited.has(neighbor)) {
                        continue;
                    }

                    // CRITICAL FIX: Verify neighbor exists in the graph
                    // This prevents issues with disconnected or malformed graph structures
                    if (!distances.has(neighbor)) {
                        continue;
                    }

                    // Calculate distance to neighbor through current node
                    const edgeWeight = this.calculateDistance(currentNode, neighbor);
                    
                    // Skip if edge weight is invalid
                    if (edgeWeight === Infinity || isNaN(edgeWeight)) {
                        continue;
                    }

                    const distanceThroughCurrent = distances.get(currentNode) + edgeWeight;

                    // If this path is shorter, update it
                    if (distanceThroughCurrent < distances.get(neighbor)) {
                        distances.set(neighbor, distanceThroughCurrent);
                        previous.set(neighbor, currentNode);
                        
                        // OPTIMIZATION: Add to heap with new distance
                        // Heap will automatically keep smallest distances at top
                        minHeap.insertElementIntoHeap(neighbor, distanceThroughCurrent);
                    }
                }
            }
        }

        // Check if end node was reached
        if (!visited.has(endNode)) {
            // End node was never visited, meaning no path exists
            return null;
        }

        // Reconstruct path from end to start
        const path = [];
        let current = endNode;

        // Check if a path was found
        if (previous.get(endNode) === null && endNode !== startNode) {
            return null; // No path exists
        }

        // Build path by following previous pointers
        while (current !== null) {
            path.unshift(current); // Add to front of array
            current = previous.get(current);
        }

        // Verify path starts with startNode and ends with endNode
        if (path.length > 0 && path[0] === startNode && path[path.length - 1] === endNode) {
            return path;
        }

        return null; // Path not found or invalid
    }
}
export { FindPath };