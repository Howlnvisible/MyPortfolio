import CommonCard from '../../../Components/CommonCard';
import SectionTitle from '../../../Components/SectionTitle';
import styles from './CommonCard.module.scss';

type CommonCardContainerProps = {
  commonCard: any;
  windowDimension: any;
};
const CommonCardContainer = ({
  commonCard,
  windowDimension,
}: CommonCardContainerProps) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.desktopCommonCardContainer}>
        <div className={styles.sectionTitleContainer}>
          <SectionTitle
            title={commonCard.sectionTitle.title}
            subTitle={commonCard.sectionTitle.subTitle}
            align={`right`}
            color={commonCard.sectionTitle.color}
            small={windowDimension?.width < 715 ? true : false}
          />
        </div>
        <div className={styles.flexStartContainer}>
          <CommonCard
            isSlider
            commonCardItems={commonCard.digitalItems}
          />
        </div>
        <div className={styles.flexEndContainer}>
          <CommonCard
            isSlider
            commonCardItems={commonCard.physicalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonCardContainer;
