import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { FormEvent, FormEventHandler } from 'react';

interface SelectChainItemProps {
  items: string[]
  placeholder: string
  className?: string
  onSelectionUpdate: (event: FormEvent<HTMLDivElement>) => void
}

export function SelectChain({ items, placeholder, className, onSelectionUpdate }: SelectChainItemProps) {
  
  
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
              onChange={onSelectionUpdate}
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