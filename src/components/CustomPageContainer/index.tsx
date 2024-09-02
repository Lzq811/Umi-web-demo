import { PageContainer } from '@ant-design/pro-components'
import { Button } from 'antd'
import tabsOpts from './tabs'

const CustomPageContainer = ({ children }: any) => {
  return (
    <PageContainer
      tabList={tabsOpts.tabsList}
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>
      ]}
    >
      {children}
    </PageContainer>
  )
}

export default CustomPageContainer
