import React from 'react'
import { NavLink, Navbar } from '../../components/Navbar';

export const dynamic = 'force-dynamic'

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return <>
  <Navbar>
    <NavLink href={'/admin'}>Dashboard</NavLink>
    <NavLink href={'/admin/products'}>Products</NavLink>
    <NavLink href={'/admin/users'}>Customer</NavLink>
    <NavLink href={'/admin/orders'}>Sales</NavLink>
  </Navbar>
  <div className='container my-6'>{children}</div>
  </>
}
