import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectChainItemProps {
  items: any[]
  placeholder: string
  className?: string
  setNetwork?: any
  setWallet?: any
}

export function SelectChain({ items, placeholder, className, setNetwork, setWallet }: SelectChainItemProps) {
  const handleValueChange = (value: any) => {
    if (setWallet && setNetwork) {
      const selectedChain = items.find((item) => item.key === value);
      if (selectedChain) {
        setWallet(selectedChain.value);
        setNetwork(selectedChain.key)
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