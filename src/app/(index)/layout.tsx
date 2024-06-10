import { TopMenu, Sidebar } from '@/components';
import styles from '../../../public/css/index.module.css'

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}){
    return (
        <main className={styles.body}>
            <TopMenu/>
            <Sidebar />

            
            {children}
        </main>
    )
}