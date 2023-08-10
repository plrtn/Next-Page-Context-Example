import {parse} from "@/app/Pokemon";

export function getPokemon(id : number){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(x => x.json())
        .then(x => ({
            name: x.name,
            imgUrl: x.sprites.other.dream_world.front_default
        }))
        .then(parse)
}