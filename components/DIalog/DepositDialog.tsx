'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { DepositParameter, Wallet } from '../../app/appModel'
import Loading from '../../app/loading'
import { ProcessButton } from '../../components/Button/ProcessButton'
import { sleep } from '../../utils/util'
import { ArrowForwardIcon } from '@chakra-ui/icons'


export interface DepositDialogProps {
  isOpen: boolean
  onClose: any
  onConfirm: any
  contractParameter: DepositParameter
  walletConfig: any
  selectedWalletNetwork: any
  chain: any
}


// export function TransitionExample() {
export function DepositDialog({ ...props }: DepositDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null)
  const handleClose = () => {
    props.onClose(false)
  }

  const handleConfirm = async() => {
    setIsLoading(true);
    switch (props.selectedWalletNetwork.value) {
      case Wallet.Wagmi: {
        console.log("depositEVM", props.chain?.name)
        await sleep(3000)
        break;
      }
      case Wallet.ArgentX: {
        console.log("depositStarkNet", props.chain?.name)
        await sleep(3000)
        break;
      }
      default: {
        await sleep(3000)
        console.log("depositDefault")
        break;
      }
    }
    setIsLoading(false)
  }
  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={handleClose}
        isOpen={props.isOpen}
        isCentered
        lockFocusAcrossFrames={true}
      >
        <AlertDialogOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(1px)'
        />
        <AlertDialogContent className="max-w-1/2 h-1/3 rounded-lg">
          {isLoading && <Loading />}
          <AlertDialogHeader className="flex items-center justify-between bg-cat-peach300 text-cat-surface rounded-t-lg">
            <div> Confirm Deposit </div>
            <button onClick={handleClose}><XIcon/></button>
          </AlertDialogHeader>
            <AlertDialogBody className='flex items-center justify-between' fontWeight='bold'> 
              <div>
                <div style={{ fontSize: 16 }}> Source: {props.contractParameter.sourceChain} </div>
                <div style={{ fontSize: 16 }}> Token: {props.contractParameter.token} </div>
              </div>
              <ArrowForwardIcon className={'pl-3 pr-3'} boxSize={'16'}/>
              <div>
                <div style={{ fontSize: 16 }}> Target: {props.contractParameter.targetChain} </div>
                <div style={{ fontSize: 16 }}> Amount: {props.contractParameter.amount} </div>
              </div>
            </AlertDialogBody>
          <AlertDialogFooter>
            <ProcessButton
              placeholder={'KAMUI'}
              loadingText={'KAMUI'}
              className='flex-grow'
              process={handleConfirm}
              walletConfig={props.walletConfig}
              loading={isLoading}
              textColor='#f67c41'
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
