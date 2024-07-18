import { Button, Card, Dropdown, Flex, Input, message } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import base64 from 'hi-base64'
import iconv from 'iconv-lite';

let text = '';
function Page() {

    const [encoding, setEncoding] = useState('UTF-8');
    const dropdownItems = [
        {
            key: '1',
            label: 'UTF-8',
        },
        {
            key: '2',
            label: 'GBK',
        },
        {
            key: '3',
            label: 'GB18030',
        },
        {
            key: '4',
            label: 'BIG5',
        },
        {
            key: '5',
            label: 'UTF-16BE',
        },
        {
            key: '6',
            label: 'UTF-16LE',
        }
    ]
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        let item = dropdownItems.find(i => i?.key === e.key);
        if (item) {
            setEncoding(item.label);
        }
    };
    const menuProps = {
        items: dropdownItems,
        onClick: handleMenuClick,
    };

    const [value, setValue] = useState('');
    function encode() {
        var bytes = iconv.encode(text, encoding);
        setValue(base64.encode(bytes));
    };

    function decode() {
        try {
            let bytes = new Uint8Array(base64.decode.bytes(text));
            setValue(iconv.decode(bytes as any, encoding));
        } catch (error: any) {
            message.error(error.message);
        }
    };

    return (
        <Card>
            <Flex gap="middle" vertical={true}>
                <Input.TextArea onChange={e => { text = e.target.value }} style={{ minHeight: 150 }}></Input.TextArea>
                <Flex gap="middle" vertical={false} align='center'>
                    <label>编码</label>
                    <Dropdown menu={menuProps}>
                        <Button style={{ width: 120 }} >
                            <label>{encoding}</label>
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Button type="primary" onClick={encode}>编码</Button>
                    <Button type="primary" onClick={decode}>解码</Button>
                </Flex >
                <Input.TextArea style={{ minHeight: 150 }} value={value}></Input.TextArea>
            </Flex >
        </Card>
    );
}

export default Page;