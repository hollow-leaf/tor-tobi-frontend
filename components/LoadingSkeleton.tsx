'use client'

import { Button, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

export function LoadingSkeleton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>

      <Modal isOpen={true} size="full" onClose={onClose}>
        <ModalOverlay
          bg='RGBA(255, 255, 255, 0.18)'
          backdropFilter='blur(1px)'
        />
      </Modal>

      <Grid className='flex absolute z-50 m-auto inset-0 text-center justify-center items-center'>
        <GridItem colSpan={1}>
          <Image src="/Kamui.svg" className='w-80 h-80 animate-spin' />
          <Text className='text-cat-sky pt-5'>Kamuiing...</Text>
        </GridItem>
      </Grid>

    </>
  )
}