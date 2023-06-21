import { useNetwork } from "wagmi"
import { kamuiAddresses } from '../utils/contract-address'

export function useKamuiContractAddressHook () {
  const { chain } = useNetwork()
  // @ts-ignore
  return chain !== undefined ? kamuiAddresses[chain!.name]: ''
}