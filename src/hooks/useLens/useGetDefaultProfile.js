import {useQuery} from '@apollo/client'
//import { useMoralis } from 'react-moralis'
import {GET_DEFAULT_PROFILE} from '../../graphql/query/getDefaultProfile'
import {useAccount} from 'wagmi'
  export const useGetDefaultId = () => {
    //const {user} = useMoralis()
    //const address =  user?.attributes?.ethAddress
    const {address} = useAccount()
    const {data, error, loading} = useQuery(GET_DEFAULT_PROFILE, {
        variables : {
            request: {
                ethereumAddress : address
            }
        }
    })

    return {data, loading, error}

  }