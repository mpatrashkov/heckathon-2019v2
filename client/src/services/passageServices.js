class PassageService {
    constructor() {
        this.allUrl = 'http://localhost:9999/passage/'
    }

    async getAllPassages() {
        let passagesRequest = await fetch(`${this.allUrl}get/all`)
        let passagesAsJson = await passagesRequest.json()
        let passages = await passagesAsJson.passages
        
        return passages;
    }
}

export default PassageService
