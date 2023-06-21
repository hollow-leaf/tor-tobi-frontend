import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectChainItemProps {
  items: any[]
  placeholder: string
  className?: string
  setState: {
    setWalletNetwork?: any,
    setToken?: any
  }
}

export function SelectChain({ items, placeholder, className, setState }: SelectChainItemProps) {
  const handleValueChange = (value: any) => {
    if (setState.setWalletNetwork) {
      const selectedChain = items.find((item) => item.key === value);
      if (selectedChain) {
        setState.setWalletNetwork(selectedChain);
      }
    }
    if (setState.setToken) {
      const selectedToken = items.find((item) => item.key === value);
      if (selectedToken) {
        setState.setToken(selectedToken.key)
      }
    }
  };
  return (
    <>
    {/* <div className='flex-grow'>
    <div className='text-cat-text'>{placeholder}</div> */}
    <Select onValueChange={handleValueChange}>
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