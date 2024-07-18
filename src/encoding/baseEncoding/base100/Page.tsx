import { Button, Card, Flex, Input, message } from 'antd';
import { useState } from 'react';
import Base100 from './Base100'

let text = '';
function Page() {

    const [value, setValue] = useState('');
    function encode() {
        var bytes = new TextEncoder().encode(text);
        setValue(Base100.toBase100(bytes));
    };

    function decode() {
        try {
            let bytes = Base100.fromBase100(text);
            setValue(new TextDecoder('utf-8').decode(bytes));
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