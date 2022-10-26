import CommonCard from '../../../Components/CommonCard';
import SectionTitle from '../../../Components/SectionTitle';
import styles from './WorksInProgress.module.scss';

type WorksInProgress = {
    worksInProgress: any;
    windowDimension: any;
}
const WorksInProgress = ({
    worksInProgress,
    windowDimension
}:WorksInProgress) => {
    return (
        <div className={styles.container}>
                <SectionTitle 
                    title={worksInProgress.title}
                    color={worksInProgress.color}
                    small={windowDimension?.width <= 715 ? true : false}
                />
            <div className={styles.cardContainer}>
                {worksInProgress.cardInfoItems.map((item:any, i:any) => {
                    return (
                        <CommonCard 
                            src={item.src}
                            title={item.title}
                            progress={item.progress}
                            navigate={item.navigate}
                            button
                            status={item.status}
                            state={item.state}
                            key={`worksInProgress-${i}`}
                            >
                                {item.children}
                        </CommonCard>
                     
                    )
                })}
            </div>
        </div>
    )
}

export default WorksInProgress;