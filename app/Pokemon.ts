import * as z from 'zod'

const pokemonSchema = z.object({
    name: z.string(),
    imgUrl: z.string()
})
export type Pokemon = z.infer<typeof pokemonSchema>
export function parse(a : any) : Pokemon {
    return pokemonSchema.parse(a)
}