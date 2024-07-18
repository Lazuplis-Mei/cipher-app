import { Tabs } from 'antd';
import BaseEncodingPage from './baseEncoding/Page';
import ChineseEncodingPage from './chineseEncoding/Page';

import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Base编码',
        children: <BaseEncodingPage />,
    },
    {
        key: '2',
        label: '中文编码',
        children: <ChineseEncodingPage />,
    },
    {
        key: '3',
        label: '其他编码',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: '日文编码',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '5',
        label: '编程语言',
        children: 'Content of Tab Pane 3',
    },
];
function Page() {
    return (<Tabs defaultActiveKey="1" items={items} />);
}

export default Page;