"use client"
import {Pokemon} from "@/app/Pokemon";
import Image from "next/image";
import React, {useContext} from "react";
import {PokemonContext} from "@/app/context";

export function Display(){
    const { pokemon } = useContext(PokemonContext)
    return <>
        <div>
            <label>{pokemon.name}</label>
            <Image src={pokemon.imgUrl} alt={"image of a pokemon"} width={100} height={100} />
        </div>
    </>
}

export function Button(){
    const { counter, incCounter } = useContext(PokemonContext)
    return (
        <button onClick={ incCounter }>{ counter }</button>
    )
}
