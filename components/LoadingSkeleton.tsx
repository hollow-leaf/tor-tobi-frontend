'use client'

import { Grid, GridItem, Image, Modal, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

export function LoadingSkeleton() {
  const { onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={true} size="full" onClose={onClose}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(1px)'
        />
        <ModalContent bg='transparent'>
          <Grid className='flex absolute z-50 m-auto inset-0 text-center justify-center items-center'>
            <GridItem colSpan={1}>
              <Image src="/frontend/Kamui.svg" alt='Sharingan' className='w-80 h-80 animate-spin' />
              <Text fontSize='3xl' as='b' className='text-cat-peach400 pt-10'>Kamuiing...</Text>
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  )
}