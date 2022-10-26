import styles from './LatestNewsCard.module.scss';
import Button from '../Button';
import Image from 'next/image';

interface INews {
  src: string;
  tag: string;
  date: string;
  info: string;
}
type LatestNewsCardProps = {
  news: INews;
  onClick?: () => void;
};
const LatestNewsCard = ({
  news,
  onClick,
}: LatestNewsCardProps) => {
  const { src, tag, date, info } = news;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src={src}
          width={380}
          height={380}
          objectFit='cover'
          style={{borderRadius: 16}}
        />
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.textSection}>
          <div className={styles.firstRow}>
            <div className={styles.newsContainer}>{tag}</div>
            <div className={styles.dateContainer}>{date}</div>
          </div>
          <div className={styles.secondRow}>{info}</div>
        </div>
        <Button
          onClick={onClick}
          min
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default LatestNewsCard;
