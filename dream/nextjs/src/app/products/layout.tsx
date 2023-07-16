import type { Metadata } from 'next';
import styles from './layout.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
    <nav className={styles.nav}>
      <Link href="/products/women">여성옷</Link>
      <Link href="/products/man">남성옷</Link>
    </nav>
    <section className='styles.product'>
      {children}
    </section>
   </>
  )
}
