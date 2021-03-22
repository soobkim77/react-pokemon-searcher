import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends React.Component{
  state = {
    pokemon: []
  }

  fetchPoke(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => this.setState({pokemon: pokemons}))
  }

  componentDidMount(){
    this.fetchPoke()
  }

  addPoke = (configObject) => {
    fetch('http://localhost:3000/pokemon', configObject)
    .then(r => r.json())
    .then(newPoke => {
      this.fetchPoke()
    })
  }

  submitForm = (e) => {
    let pokeForm = e.target.querySelectorAll("input")
    let pokeDex = { 
      "name": pokeForm[0].value,
      "hp": parseInt(pokeForm[1].value),
      "sprites": {
        "front": pokeForm[2].value,
        "back": pokeForm[3].value
      }
    }
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pokeDex)
    }
    this.addPoke(configObject)
  }

  handleFilter = (event) => {
    if(event.charCode === 13) {
      let inputVal = event.target.value
      let newState = this.state.pokemon.filter(poke => poke.name.includes(inputVal))
      this.setState({pokemon: newState})
    }
  }
  

  // filterSearch = (event) => {
    
  // }

  render(){
    return(
    <div className="App">
      <PokemonPage poke={this.state.pokemon} onFilter={this.handleFilter} formSubmit={this.submitForm} />
    </div>
  )}
}

export default App
