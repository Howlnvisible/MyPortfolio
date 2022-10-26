import LatestNewsCard from '../../../Components/LatestNewsCard';
import SectionTitle from '../../../Components/SectionTitle';
import styles from './LatestNews.module.scss';

type LatestNewsProps = {
    latestNews: any;
    windowDimension: any;
}
const LatestNews = ({
    latestNews,
    windowDimension
}:LatestNewsProps) => {
    return (
        <div className={styles.container}>
            <SectionTitle
                title={latestNews.title}
                color={latestNews.color}
                small={windowDimension?.width <= 715 ? true : false}
            />
            <div className={styles.newsContainer}>
                {latestNews.latestNewsItems.map((item:any, i:any) => {
                    return (
                        <LatestNewsCard 
                            news={item}
                            onClick={() => window.open(item.navigate)}
                            key={`latestNews-${i}`}                         
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestNews;