import styles from '../../../public/css/index.module.css'

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}){
    return (
        <main className={styles.header}>
            {children}
        </main>
    )
}