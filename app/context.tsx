"use client"
import React, {createContext, useCallback, useEffect, useState} from "react";
import {Pokemon} from "@/app/Pokemon";
import {getPokemon} from "@/app/fetcher";

export const PokemonContext = createContext<any>(undefined)

export default function Component(props : any){
    const [ counter, setCounter] = useState<number>(props.counter)
    const [ pokemon, setPokemon ] = useState<Pokemon>(props.pokemon)
    const incCounter = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [counter])

    useEffect(() => {
        (async () => {
            setPokemon(await getPokemon(counter))
        })()
    }, [counter])

    return (
        <PokemonContext.Provider value={{
            counter,
            incCounter,
            pokemon,
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}