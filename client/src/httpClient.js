import axios from 'axios';
import jwtDecode from 'jwt-decode';

const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/login', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
        })
}

httpClient.getUser = function (id){
    return this({method: "get", url: `/api/users/${id}`})
}

httpClient.updateUser = function (id, fields){
    return this({method: "patch", url: `/api/users/${id}`, data: fields})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}


httpClient.createResume = function (resume){
    return this({method: "post", url: "/api/resumes", data: resume})
}

httpClient.getAllResumes = function (){
    return this({method: "get", url: "/api/resumes"})
}

httpClient.getResume = function (id){
    return this({method: "get", url: `/api/resumes/${id}`})
}

httpClient.deleteResume = function (id){
    return this({method: "delete", url: `/api/resumes/${id}`})
}

httpClient.defaults.headers.common.token = httpClient.getToken()                                        

export default httpClient