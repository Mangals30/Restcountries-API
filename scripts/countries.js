class Countries {
  constructor(countries) {
    this.countries = countries
  }
  get allCountries() {
    return this.countries
  }
}


const setSortStyles = (sorted, unsorted1, unsorted2, arrow) => {
  sorted.innerHTML = sorted.textContent + `<i class="fas fa-long-arrow-alt-${arrow} arrow"></i>`
  unsorted1.innerHTML = unsorted1.textContent
  unsorted2.innerHTML = unsorted2.textContent
}

const filterCountries = (searchWord) => {
  countriesFlex.innerHTML = ''
  const allCountries = countries.allCountries
  const filteredCountries = []
  for (const country of allCountries) {
    const {
      name,
      capital,
      languages
    } = country
    if (name.includes(searchWord) || capital.includes(searchWord)) {
      filteredCountries.push(country)
    } else {
      for (const language of languages) {
        if (language.includes(searchWord)) {
          filteredCountries.push(country)
        }
      }
    }
  }
  return filteredCountries
}

const sortAsc = (countries, field) => {
  if (field == 'name') {
    countries.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
    })
  } else if (field == 'capital') {
    countries.sort((a, b) => {
      if (a.capital < b.capital) return -1
      if (a.capital > b.capital) return 1
    })
  } else if (field == 'population') {
    countries.sort((a, b) => {
      if (a.population < b.population) return -1
      if (a.population > a.population) return 1
    })
  }
}

const sortDsc = (countries, field) => {
  if (field == 'name') {
    countries.sort((a, b) => {
      if (a.name < b.name) return 1
      if (a.name > b.name) return -1
    })
  } else if (field == 'capital') {
    countries.sort((a, b) => {
      if (a.capital < b.capital) return 1
      if (a.capital > b.capital) return -1
    })
  } else if (field == 'population') {
    countries.sort((a, b) => {
      if (a.population < b.population) return 1
      if (a.population > b.population) return -1
    })
  }

}

const displayCountries = (countries) => {
  for (const country of countries) {
    const {
      name,
      capital,
      languages,
      population,
      flag
    } = country
    const countriesDiv = document.createElement('div')
    countriesDiv.className = 'country'
    let countryDiv = `
          <div class = "flag-name">
          <img src="${flag}" alt=${name}>
          <h3>${name}</h3>
          </div>
          <div class = "text-name">
            <p>Capital: ${capital}</p>
            <p class = "langs">Languages: ${languages.join(', ')}</p>
            <p>Population: ${population}</p>
          </div>
        `
    countriesDiv.innerHTML = countryDiv
    countriesFlex.appendChild(countriesDiv)
  }

}
const getCountriesData = () => {
  getCountriesAPI().then((data) => {
    countries = new Countries(data)
    total.textContent = data.length
    displayCountries(data)
  }).catch((error) => {
    countriesFlex.innerHTML = `<h2>Unable to fetch the countries!</h2>`
  })
}