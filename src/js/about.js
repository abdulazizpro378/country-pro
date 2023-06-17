import '../css/main.css'

import './mode'

import request from './request'
import { createCountryInfo } from './updateUi'

const queryString = window.location.search
const urlParems = new URLSearchParams(queryString)
const country = urlParems.get('country')
const countrApi = ` https://restcountries.com/v3.1/name/${country}`

request(countrApi).then((data) => {
    createCountryInfo(data[0])
}).catch((err) => {
    alert(err.message)
})