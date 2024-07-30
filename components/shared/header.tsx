import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import Image from 'next/image'

interface Props {
   className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
   return <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between px-4 py-3">
         {/* Left side*/}
         <div>
            1
         </div>

         {/* Logo */}
         <div className="group flex gap-1 justify-between">
            <Image className="" src="/assets/logo/1.svg" alt="ヤ" width={40} height={40} />
            <Image className="" src="/assets/logo/2.svg" alt="マ" width={40} height={40} />
            <Image className="" src="/assets/logo/3.svg" alt="カ" width={40} height={40} />
            <Image className="" src="/assets/logo/4.svg" alt="シ" width={40} height={40} />
         </div>


         {/* Right side */}
         <div>
            1
         </div>
      </Container>
   </header>
}