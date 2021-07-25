const countriesFlex = document.querySelector('.countries-flex')
const searchInput = document.querySelector('.search-input')
const nameBtn = document.querySelector('.name')
const capitalBtn = document.querySelector('.capital')
const populationBtn = document.querySelector('.population')
const total = document.querySelector('.total')
const msg = document.querySelector('.message')
const msgTotal = document.querySelector('.msg-total')


let countries
let nameSort = 1
let capitalSort = 1
let populationSort = 1

searchInput.addEventListener('input', e => {
  e.preventDefault()
  const searchWord = searchInput.value.toLowerCase()
  const filteredCountries = filterCountries(searchWord)
  msgTotal.textContent = filteredCountries.length
  msg.style.display = 'block'
  displayCountries(filteredCountries)
})
nameBtn.addEventListener('click', e => {
  capitalSort = 1
  populationSort = 1
  e.preventDefault()
  const searchWord = searchInput.value.toLowerCase()
  const filteredCountries = filterCountries(searchWord)
  if (nameSort == 1) {
    setSortStyles(nameBtn, capitalBtn, populationBtn, 'up')
    sortAsc(filteredCountries, 'name')
    nameSort = 0
  } else if (nameSort == 0) {
    setSortStyles(nameBtn, capitalBtn, populationBtn, 'down')
    sortDsc(filteredCountries, 'name')
    nameSort = 1
  }
  displayCountries(filteredCountries)
})
capitalBtn.addEventListener('click', e => {
  nameSort = 1
  populationSort = 1
  e.preventDefault()
  const searchWord = searchInput.value.toLowerCase()
  const filteredCountries = filterCountries(searchWord)
  if (capitalSort == 1) {
    setSortStyles(capitalBtn, nameBtn, populationBtn, 'up')
    sortAsc(filteredCountries, 'capital')
    capitalSort = 0
  } else if (capitalSort == 0) {
    setSortStyles(capitalBtn, nameBtn, populationBtn, 'down')
    sortDsc(filteredCountries, 'capital')
    capitalSort = 1
  }

  displayCountries(filteredCountries)
})
/*********************************** */
populationBtn.addEventListener('click', e => {
  nameSort = 1
  capitalSort = 1
  e.preventDefault()
  const searchWord = searchInput.value.toLowerCase()
  const filteredCountries = filterCountries(searchWord)
  if (populationSort == 1) {
    setSortStyles(populationBtn, capitalBtn, nameBtn, 'up')
    sortAsc(filteredCountries, 'population')
    populationSort = 0
  } else if (populationSort == 0) {
    setSortStyles(populationBtn, capitalBtn, nameBtn, 'down')
    sortDsc(filteredCountries, 'population')
    populationSort = 1
  }

  displayCountries(filteredCountries)
})


getCountriesData()