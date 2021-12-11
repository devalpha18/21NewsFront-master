import styles from '../../styles/components/pages/home/Index.module.scss';
import Advertisement from '../../components/shared/Advertisement';
import Main from '../../components/pages/home/Main';
import Sports from '../../components/pages/home/Sports';
import Entertainment from '../../components/pages/home/Entertainment';
import Technology from '../../components/pages/home/Technology';
import Travel from '../../components/pages/home/Travel';
import Pictures from '../../components/pages/home/Pictures';
import Spinner from '../../components/shared/Spinner';

const Index = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <Main />
          <Advertisement />
          <div className={styles.hidden}>
            <Sports />
            <Entertainment />
            <Advertisement />
          </div>
          <Technology />
          <Travel />
          <Advertisement />
          <Pictures />
        </div>
      </div>
    </>
  )
}

export default Index 
