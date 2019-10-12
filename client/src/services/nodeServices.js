class NodeServices {
    constructor() {
        this.allUrl = 'http://localhost:9999/node/'
    }

    async getAllNodes() {
        let nodesRequest = await fetch(`${this.allUrl}get/all`)
        let nodesAsJson = await nodesRequest.json()
        let nodes = await nodesAsJson.nodeInfos
        
        return nodes;
    }
}

export default NodeServices;