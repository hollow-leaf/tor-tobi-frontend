import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectChainItemProps {
  items: string[]
  placeholder: string
}

export function SelectChain({ items, placeholder }: SelectChainItemProps) {
  return (
    <Select>
      <SelectTrigger className="grow bg-cat-sky">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-cat-sky">
        {
          items.map((item, index) => (
            <SelectItem
              key={index}
              value={item}
              className='hover:bg-cat-blue'
            >
              {item}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}