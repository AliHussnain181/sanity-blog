import { createClient } from "next-sanity";




export const client = createClient({
    apiVersion:"v2023-05-27",
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.RNEXT_TOKEN,
    useCdn:true
})