//import {useMoralis} from 'react-moralis'
import { COLLECT_SONGS } from '../../graphql/query/collectSongs'
import {lensHub} from '../../utils/lens-hub'
import {signText, signedTypeData, splitSignature} from '../../utils/ether-service'
import { apolloClient } from '../../graphql/apolo/apoloClient'
import {toast} from 'react-toastify'
import {useAccount}  from "wagmi"
  // TODO typings
const createCollectTypedData = (createCollectTypedDataRequest) => {
    return apolloClient.mutate({
      mutation: (COLLECT_SONGS),
      variables: {
        request: createCollectTypedDataRequest,
      },
    });
  };

  export const useCollect = () => {
    const {address } = useAccount()
    
    const account = address
    const collect = async (postId, profileId) => {
        if(!profileId){
            alert("connect  your  profile first")
         }
         //await Moralis.enableWeb3()
         const collectRequest = {
            publicationId: postId,
         }

         try{
            const result = await createCollectTypedData(collectRequest);
            const typedData = result.data.createCollectTypedData.typedData;
            const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
            const { v, r, s } = splitSignature(signature);
       
            const tx = await lensHub.collectWithSig({
               collector: account,
               profileId: typedData.value.profileId,
               pubId: typedData.value.pubId,
               data: typedData.value.data,
               sig: {
                 v,
                 r,
                 s,
                 deadline: typedData.value.deadline,
               },
             });
             console.log(tx.hash);
           } 
               
           
            catch (error) {
               //alert(error)
               toast(error.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                
              })
            }
    }

    return{
        collect
    }
  }
