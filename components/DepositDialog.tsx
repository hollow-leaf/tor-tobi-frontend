import Loading from "@/app/loading"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button, HStack } from "@chakra-ui/react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface DepositAlertDialogProps {
  onClick?: () => void
}

export function DepositDialog({ onClick }: DepositAlertDialogProps) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <HStack w="full" justifyContent="center" className="pt-10">
            <Button
              bg="transparent"
              borderColor="#fab387"
              borderWidth={1}
              borderRadius="5px"
              paddingLeft="10px"
              paddingTop="5px"
              paddingBottom="5px"
              paddingRight="10px"
              color="#cdd6f4"
              width="100%"
              _hover={{ bg: '#fab387', color: '#1e1e2e' }}
              spinner={<></>}
            >
              Deposit
            </Button>
          </HStack>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-cat-base text-cat-text sm:max-w-[425px]">

          <AlertDialogHeader>
            <AlertDialogTitle>Deposit</AlertDialogTitle>
            <AlertDialogDescription>
              Please double check the following transaction details.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="from" className="text-right">
                From
              </Label>
              <Input id="from" value="Pedro Duarte" className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="to" className="text-right">
                To
              </Label>
              <Input id="to" value="@peduarte" className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="token" className="text-right">
                Token
              </Label>
              <Input id="token" value="BBB" className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" type="number" value="100" className="col-span-3" disabled />
            </div>
          </div>
          <AlertDialogFooter>
            <HStack w="full" justifyContent="center" className="pt-10">
            <Button
                bg="transparent"
                borderWidth={1}
                borderRadius="5px"
                color="#cdd6f4"
                width="100%"
                _hover={{ bg: '#fab387', color: '#1e1e2e' }}
                type="submit"
              >
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              </Button>

              <Button
                bg="transparent"
                borderColor="#fab387"
                borderWidth={1}
                borderRadius="5px"
                color="#cdd6f4"
                width="100%"
                _hover={{ bg: '#fab387', color: '#1e1e2e' }}
                spinner={<></>}
                onClick={onClick}
                type="submit"
              >
                <AlertDialogAction>Deposit</AlertDialogAction>
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
