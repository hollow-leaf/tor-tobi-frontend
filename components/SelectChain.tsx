import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectChainItemProps {
  items: string[]
  placeholder: string
  className?: string
}

export function SelectChain({ items, placeholder, className }: SelectChainItemProps) {
  return (
    <Select>
      <SelectTrigger className={className ? className : "grow bg-cat-mantle text-cat-text"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-cat-mantle text-cat-text">
        {
          items.map((item, index) => (
            <SelectItem
              key={index}
              value={item}
              className='hover:bg-cat-neutral500'
            >
              {item}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}