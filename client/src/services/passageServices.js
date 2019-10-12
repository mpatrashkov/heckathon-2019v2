class PassageService {
    constructor() {
        this.allUrl = 'http://192.168.0.179:9999/passage/'
    }

    async getAllPassages() {
        let passagesRequest = await fetch(`${this.allUrl}get/all`)
        let passagesAsJson = await passagesRequest.json()
        let passages = await passagesAsJson.passages
        
        return passages;
    }
}

export default PassageService
