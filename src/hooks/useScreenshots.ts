import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import { Screenshot } from "../entities/Screenshot"

const useScreenshots = (gameId:number)=>{
    const apiclient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)
    return useQuery ({
        queryKey:["screenshots",gameId],
        queryFn:apiclient.getAll
    })

}
export default useScreenshots