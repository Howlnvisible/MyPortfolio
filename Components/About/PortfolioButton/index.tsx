import Link from 'next/link';
import styles from './PortfolioButton.module.scss';

type PortfolioButtonProps = {
    link: string;
    title: string;
}
const PortfolioButton = ({
    link,
    title
}:PortfolioButtonProps) => {
    return (
        <Link href={link}>
            <div className={styles.portfolioButton}>
               {title}&#8594;
            </div>
        </Link>
    )
}

export default PortfolioButton;