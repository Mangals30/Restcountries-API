const getCountriesAPI = async () => {
  const countries = []
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  if (response.status == 200) {
    const data = await response.json()
    for (const country of data) {
      const lang = []
      const {
        name,
        capital,
        languages,
        flag,
        population
      } = country
      for (const language of languages) {
        lang.push(language.name.toLowerCase())
      }
      countries.push({
        name: name.toLowerCase(),
        capital: capital.toLowerCase(),
        languages: lang,
        flag,
        population
      })
    }
    return countries
  } else {
    throw new Error('Unable to fetch the countries data')
  }
}