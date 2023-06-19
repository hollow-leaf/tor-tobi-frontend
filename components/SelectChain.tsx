import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectChainItemProps {
  items: any[]
  placeholder: string
  className?: string
  setWalletNetwork?: any;
}

export function SelectChain({ items, placeholder, className, setWalletNetwork }: SelectChainItemProps) {
  const handleValueChange = (value: any) => {
    if (setWalletNetwork) {
      const selectedChain = items.find((item) => item.key === value);
      if (selectedChain) {
        setWalletNetwork(selectedChain.value);
      }
    }
  };
  return (
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
  )
}