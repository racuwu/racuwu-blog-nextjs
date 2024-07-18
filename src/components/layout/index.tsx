import React from 'react';
import { Header } from '../header'
import { Footer } from '..';
// import Footer from './footer'
interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className='p-4 md:px-12 py-4'>
            <Header />
            < main className='container mx-auto'> {children}</main>
            <Footer/>
        </div>
    )
}