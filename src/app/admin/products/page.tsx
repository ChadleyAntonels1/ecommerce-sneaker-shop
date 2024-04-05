import React from 'react'
import PageHeader from '../_components/pageHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function adminProductPage() {

  return (
    <div className='flex justify-between items-center gap-4'>
        <PageHeader>Products</PageHeader>
        <Button asChild>
            <Link href='/admin/products/new'>Add Product</Link>
        </Button>
    </div>
  )
}
