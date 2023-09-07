import Guide from '@/components/Guide'
import { trim } from '@/utils/format'
import { Button } from 'antd'
import { PageContainer } from '@ant-design/pro-components'
import { useModel, history } from '@umijs/max'
import styles from './index.less'

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const Jump = () => {
    history.push({
      pathname: '/coupon/member',
      search: '?id=123123'
    })
    /* history.push('/coupon/member', {
      id: '123123'
    }) */
  }

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <br />
        <br />
        <br />
        <Button type='primary' onClick={Jump}>jump to member coupon page</Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
