import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return { headers: { Authorization: `Bearer ${getToken()}` } }
}

export function getAllArticles() {
  return axios.get(`${baseUrl}/articles/`)
}

export function getOneArticle(id) {
  return axios.get(`${baseUrl}/articles/${id}`)
}

export function createArticle(formdata) {
  return axios.post(`${baseUrl}/articles/`, formdata, headers())
}

export function deleteArticle(id) {
  return axios.delete(`${baseUrl}/articles/${id}`, headers())
}

export function createArticleComment(id, formdata) {
  return axios.post(`${baseUrl}/articles/${id}/`, formdata, headers())
}

// * Auth Requests

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}