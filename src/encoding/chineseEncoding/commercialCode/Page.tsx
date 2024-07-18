import { Button, Card, Flex, Input, message } from 'antd';
import { useState } from 'react';
import CommercialCode from './CommercialCode'

let text = '';
function Page() {

    const [value, setValue] = useState('');
    function encode() {
        setValue(CommercialCode.toCodesString(text));
    };

    function decode() {
        try {
            setValue(CommercialCode.fromCodeString(text));
        } catch (error: any) {
            message.error(error.message);
        }
    };

    return (
        <Card>
            <Flex gap="middle" vertical={true}>
                <Input.TextArea onChange={e => { text = e.target.value }} style={{ minHeight: 150 }}></Input.TextArea>
                <Flex gap="middle" vertical={false} align='center'>
                    <Button type="primary" onClick={encode}>编码</Button>
                    <Button type="primary" onClick={decode}>解码</Button>
                </Flex >
                <Input.TextArea style={{ minHeight: 150 }} value={value}></Input.TextArea>
            </Flex >
        </Card>
    );
}

export default Page;