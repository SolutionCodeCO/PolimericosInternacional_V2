import { TopMenu, Sidebar, Footer } from '@/components';
import styles from '../../../public/css/index.module.css'

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className={styles.body}>
            <TopMenu />
            <Sidebar />

            <div className='px-0 sm:px10'>
                {children}
            </div>
            <Footer />

        </main>
    )
}