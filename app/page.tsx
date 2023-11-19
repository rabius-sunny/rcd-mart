import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

export default function Home() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='secondary'>Open</Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you are done.
            </SheetDescription>
          </SheetHeader>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className='my-2' key={i}>
              this is link
            </div>
          ))}
          <SheetFooter>
            {/* <SheetClose asChild> */}
            <Button type='submit'>Save</Button>
            <Button type='submit' variant='secondary'>
              Save
            </Button>
            <Button type='submit' variant='ghost'>
              Save
            </Button>
            <Button type='submit' variant='outline'>
              Save
            </Button>
            {/* </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
