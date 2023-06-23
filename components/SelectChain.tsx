import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@chakra-ui/react'

interface SelectChainItemProps {
  items: any[]
  placeholder: string
  className?: string
  disabled?: boolean
  setState: {
    setWalletNetwork?: any,
    setToken?: any,
    setContractParameter?: any
  }
}

interface InputAmountProps {
  disabled?: boolean
  setState: {
    setContractParameter: any
  }
}

export function SelectChain({ items, placeholder, className, setState, disabled }: SelectChainItemProps) {
  const handleValueChange = (value: any) => {
    let selectedSourceChain
    let selectedTargetChain: any
    if (setState.setWalletNetwork) {
      selectedSourceChain = items.find((item) => item.key === value);
      if (selectedSourceChain) {
        setState.setWalletNetwork(selectedSourceChain);
      }
    }
    if (setState.setToken) {
      const selectedToken = items.find((item) => item.key === value);
      if (selectedToken) {
        setState.setToken(selectedToken)
      }
    }
    if (setState.setContractParameter) {
      selectedTargetChain = items.find((item) => item.key === value);
      if (selectedTargetChain) {
        setState.setContractParameter((preState:any) => ({
          ...preState,
          targetChain: selectedTargetChain.key
        }))
      }
    }
  };
  return (
    <>
    <Select onValueChange={handleValueChange} disabled={disabled ? disabled : false}>
      <SelectTrigger className={className ? className : "grow bg-cat-mantle text-cat-text"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-cat-mantle text-cat-text">
        {
          items.map((item, index) => (
            <SelectItem
              key={index}
              value={item.key}
              className='hover:bg-cat-neutral500'
            >
              {item.key}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
    {/* </div> */}
    </>
  )
}

export function InputAmount({ disabled, setState }: InputAmountProps) {
  return (
    <>
      <Input 
        className='bg-cat-mantle text-cat-text' 
        type='number' placeholder='0.00' 
        disabled={disabled ? disabled : false}
        onChange={(e) => {     
          const amount = e.target.value
          if(Number(amount) > 0) {
            setState.setContractParameter((preState:any) => ({
              ...preState,
              amount: amount
            }))
          } else {
            setState.setContractParameter((preState:any) => ({
              ...preState,
              amount: ''
            }))
          }
        }}
      />
    </>
  )
}
