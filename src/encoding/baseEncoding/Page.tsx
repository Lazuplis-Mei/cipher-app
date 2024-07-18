import { Tabs } from 'antd';
import Base64Page from './base64/Page'
import Base32Page from './base32/Page'
import Base16Page from './base16/Page'
import Base100Page from './base100/Page'
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Base64编码',
        children: <Base64Page />,
    },
    {
        key: '2',
        label: 'Base32编码',
        children: <Base32Page />,
    },
    {
        key: '3',
        label: 'Base16编码',
        children: <Base16Page />,
    },
    {
        key: '4',
        label: 'Base100编码',
        children: <Base100Page />,
    },
];
function Page() {
    return (<Tabs defaultActiveKey="1" items={items} />);
}

export default Page;