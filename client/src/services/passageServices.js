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

    async addPassages(body) {
        let data = await fetch(`${this.allUrl}create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
            },
            body: JSON.stringify(body)
        })
        let result = await data.json()
        if (!result.passage) {
            return null;
        } else {
            return result.passage;
        }
    }
}

export default PassageService
