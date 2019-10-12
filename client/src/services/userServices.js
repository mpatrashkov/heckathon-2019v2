class UserServices {
    constructor() {
        this.allUrl = 'http://192.168.0.179:9999/auth/'
    }

    async registerUser(body) {
        let data = await fetch(`${this.allUrl}signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        let result = await data.json()
        if(!result.username){
            return null
        }else{
              localStorage.setItem('isAdmin', result.isAdmin)
              localStorage.setItem('auth_token', result.token)
              localStorage.setItem('username', result.username)
              localStorage.setItem('userId', result.userId)
              return result;
        }
    }

    async loginUser(body) {
        let data = await fetch(`${this.allUrl}signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        let result = await data.json()
        if(!result.username){
            return null
        }else{
              localStorage.setItem('isAdmin', result.isAdmin)
              localStorage.setItem('auth_token', result.token)
              localStorage.setItem('username', result.username)
              localStorage.setItem('userId', result.userId)
              return result;
        }
    }
}

export default UserServices;
