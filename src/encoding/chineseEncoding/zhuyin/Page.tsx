import { Button, Card, Dropdown, Flex, Input, message } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { pinyin } from 'pinyin-pro';
import ZhuyinHelper from './Zhuyin'

let text = '';
function Page() {

    const [encoding, setEncoding] = useState('中文');
    const [placeholder, setPlaceholder] = useState('好(hao3)好(hao4)学习');


    const dropdownItems = [
        {
            key: '1',
            label: '中文',
        },
        {
            key: '2',
            label: '拼音',
        },
    ]
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        let item = dropdownItems.find(i => i?.key === e.key);
        if (item) {
            setEncoding(item.label);
            if (item.label === '中文') {
                setPlaceholder('好(hao3)好(hao4)学习');
            }
            else if (item.label === '拼音') {
                setPlaceholder('hao3 hao4 xve2 xi2');
            }
        }
    };
    const menuProps = {
        items: dropdownItems,
        onClick: handleMenuClick,
    };

    const [value, setValue] = useState('');
    function encode() {
        let pinyins: string[] = [];
        if (encoding === '中文') {
            let matches = text.matchAll(/[〇\u4E00-\u9FA5\uE81A-\uE863](\((?<Pinyin>[A-Za-z]{1,6}[0-4])\))?/g);
            for (const match of matches) {
                var character = match[0];
                let pinyinStr = pinyin(character, { toneType: 'num' });
                console.log(match);
                if (match.groups) {
                    let py = match.groups['Pinyin'];
                    if (py) {
                        pinyinStr = py;
                    }
                }
                pinyins.push(pinyinStr);
            }
        }
        else if (encoding === '拼音') {
            pinyins = text.split(' ');
        }

        try {
            setValue(pinyins.map(ZhuyinHelper.toZhuyin).join(''));
        } catch (error: any) {
            message.error(error.message);
        }
    };

    function decode() {

        let pinyins: string[] = [];
        let matches = text.matchAll(/[\u3105-\u3129]{1,3}[˙ˉˊˇˋ]/g);
        for (const match of matches) {
            pinyins.push(match[0]);
        }


        try {
            setValue(pinyins.map(ZhuyinHelper.fromZhuyin).join(''));
        } catch (error: any) {
            message.error(error.message);
        }
    };


    return (
        <Card>
            <Flex gap="middle" vertical={true}>
                <Input.TextArea placeholder={placeholder} onChange={e => { text = e.target.value }} style={{ minHeight: 150 }}></Input.TextArea>
                <Flex gap="middle" vertical={false} align='center'>
                    <label>输入方式</label>
                    <Dropdown menu={menuProps}>
                        <Button style={{ width: 100 }} >
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