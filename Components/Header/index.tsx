import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClickHandler } from '../../hooks/useOutsideClickHandler';

const Header = () => {
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
            navigate: `https://github.com/Howlnvisible/MyPortfolio`
        }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeURL, setActiveURL] = useState<any>(``);
    const ref = useRef<any>();

    useEffect(() => {
        setActiveURL(window.location.href);
    }, [])

    useOutsideClickHandler(ref, () => setIsMenuOpen(false))

    const handleClick = () => {
        setIsMenuOpen((prev) => !prev);
        console.log(handleClick)
    };
    return (
        <>
            <nav className={styles.container}>
                <div className={styles.navBar}>
                    <Link href={`/`}>
                        <div className={styles.mainPageContainer}>
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
                                    <div
                                        className={`${styles.items} 
                                        ${activeURL.includes(item.title.toLowerCase())
                                                ? styles.active
                                                : ``
                                            }`}

                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.logo}>
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
                            ref={ref}
                        >
                            <Image
                                src={`/Common/menu.svg`}
                                width={28}
                                height={28}
                            />
                            <div
                                className={`${styles.mobileContainer} 
                                ${isMenuOpen
                                    ? styles.opened
                                    : ``
                                }`}
                            >
                                {navBarItems.map((item: any, index: any) => {
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
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;