import React from 'react';
import { Tabs } from 'antd';
import EncodingPage from "./encoding/Page";
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '编码转换',
    children: <EncodingPage />,
  },
  {
    key: '2',
    label: '替代密码',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: '换位密码',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: '二维换位',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: '计算密码',
    children: 'Content of Tab Pane 3',
  },
];

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default App;
