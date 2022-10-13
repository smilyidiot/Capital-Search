import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectValue: countryAndCapitalsList[0].id,
  }

  render() {
    const {selectValue} = this.state
    console.log(selectValue)

    const dropdown = event => {
      this.setState({selectValue: event.target.value})
    }

    const country = countryAndCapitalsList.find(obj => {
      if (obj.id === selectValue) {
        return obj.country
      }
      return false
    })

    console.log('capital', country.id)
    console.log('capital', country.capitalDisplayText)

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="head">Countries And Capitals</h1>
          <div>
            <select onChange={dropdown} className="select">
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country" className="question">
              {' '}
              is capital of which country?
            </label>
          </div>
          <h1 className="country">{country.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
