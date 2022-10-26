import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<any>(null);

    const handleClick = () => {
        setIsMenuOpen((prev) => !prev);
    };
    
    const navBarItems = [
        {
            title: `posts`,
            navigate: `/posts`
        },
        {
            title: `gallery`,
            navigate: `/gallery`
        },
        {
            title: `source`,
            navigate: `/`
        }
    ]
    return (
        <>
            <nav className={styles.container}>
                <div className={styles.navBar}>
                    <Link href={`/`}>
                        <div className={styles.logo}>
                            Aleksei Bychkov
                        </div>
                    </Link>
                    <div className={styles.navItems}>
                        {navBarItems.map((item: any, i: any) => {
                            return (
                                <Link 
                                    href={item.navigate} 
                                    key={`navBarItems-${i}`}
                                >
                                    <div className={styles.items}>
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.toggleTheme}>
                        <div>
                            <Image
                                src={`/Common/browserTheme.png`}
                                width={28}
                                height={28}
                            />
                        </div>
                        <div
                            className={styles.menuButton}
                            onClick={handleClick}
                        >
                            <Image
                                src={`/Common/menu.svg`}
                                width={28}
                                height={28}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`${styles.mobileContainer} ${isMenuOpen ? styles.opened : ``}`}>
                {navBarItems.map((item:any, index:any) => {
                    return (
                        <Link 
                            href={item.navigate} 
                            key={`navBarItems-${index}`}
                        >
                            <div 
                                className={styles.activeItem}>
                                {item.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Header;