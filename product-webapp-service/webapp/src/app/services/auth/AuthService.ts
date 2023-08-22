import { Injectable } from "@angular/core"

export const JWT_KEY = "thrive-sports-arena-jwt"
export const THRIVE_ROLE = "thrive-sports-arena-role"
export const THRIVE_USER_ID = "thrive-user-id"
export const ROLE_USER = "PLAYER"
export const ROLE_AMDIN = "OWNER"

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isUserLoggedIn(): boolean {
        return localStorage.getItem(JWT_KEY) != null && localStorage.getItem(THRIVE_ROLE) != null
    }

    saveUser(jwt: string, role: string) {
        localStorage.setItem(JWT_KEY, jwt)
        localStorage.setItem(THRIVE_ROLE, role)
    }

    clear() {
        localStorage.clear()
    }

    isAdminUser() {
        if (localStorage.getItem(THRIVE_ROLE) === ROLE_AMDIN) return true
        if (localStorage.getItem(THRIVE_ROLE) === ROLE_USER) return false
        return false
    }

    getUser() {
        return localStorage.getItem(THRIVE_USER_ID)
    }

    getRole(){
        return localStorage.getItem(THRIVE_ROLE)
    }
}
