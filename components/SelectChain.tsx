import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useEffect, useState } from "react";

interface SelectChainItemProps {
  items: any[]
  placeholder: string
  className?: string
  setWalletNetwork?: any;
}

export function SelectChain({ items, placeholder, className, setWalletNetwork}: SelectChainItemProps) {
  return (
    <Select onValueChange={setWalletNetwork}>
      <SelectTrigger className={className ? className : "grow bg-cat-mantle text-cat-text"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-cat-mantle text-cat-text">
        {
          items.map((item, index) => (
            <SelectItem
              key={index}
              value={item.value}
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