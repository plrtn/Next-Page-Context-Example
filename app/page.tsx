import Component, {PokemonContext} from "@/app/context";
import {Button, Display} from "@/app/Components";
import {getPokemon} from "@/app/fetcher";

export default async function Home() {
  const initCounter  = 1
  const initPokemon = await getPokemon(initCounter)

  return (
    <Component pokemon={initPokemon} counter={initCounter}>
      <Button />
      <Display />
    </Component>
  )
}
