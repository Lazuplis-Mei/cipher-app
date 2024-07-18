import { Tabs } from 'antd';
import CommercialCodePage from './commercialCode/Page'
import ZhuyinPage from './zhuyin/Page'

import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: '中文电码',
        children: <CommercialCodePage />,
    },
    {
        key: '2',
        label: '拼音注音转换',
        children: <ZhuyinPage />,
    },

];
function Page() {
    return (<Tabs defaultActiveKey="1" items={items} />);
}

export default Page;