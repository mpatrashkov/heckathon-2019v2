class NodeServices {
    constructor() {
        this.allUrl = 'http://192.168.43.27:9999/node/'
    }

    async getAllNodes() {
        let nodesRequest = await fetch(`${this.allUrl}get/all`)
        let nodesAsJson = await nodesRequest.json()
        let nodes = await nodesAsJson.nodeInfos
        
        return nodes;
    }

    async getAllDevices() {
        let nodesRequest = await fetch(`${this.allUrl}get/nodes`)
        let nodesAsJson = await nodesRequest.json()
        let nodes = await nodesAsJson.nodes
        
        return nodes;
    }
}

export default NodeServices;
