import { useContractWrite as useContractWriteWagmi } from 'wagmi'
import { DepositParameter } from '../appModel'
import { useKamuiContractAddressHook } from '../../hooks/useContractAddress.hook'
import { useContract } from '@starknet-react/core'
import { kamuiABI } from '../contracts/Kamui'

// Wagmi Contract
// const { data, isLoading, isSuccess, write } = useContractWriteWagmi({
//     address: useKamuiContractAddressHook(),
//     abi: kamuiABI,
//     functionName: 'deposit',
//   })

// // StarkNet Contract
// const { contract } = useContract({
//     // address: ethAddress,
//     // abi: compiledErc20.abi
// })

// export async function depositWagmi (payload: DepositParameter) {
//     console.log('Deposit Wagmi')
// } 

// export async function depositStarkNet (payload: DepositParameter) {
//     console.log('Deposit StarkNet')
// } 