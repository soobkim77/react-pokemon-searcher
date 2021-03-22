import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm formSubmit={this.props.formSubmit}/>
        <br />
        <Search filterValue={this.props.onFilter} />
        <br />
        <PokemonCollection pokemon={this.props.poke}/>
      </Container>
    )
  }
}

export default PokemonPage
