/**
 * 注音拼音转换类
 */
export default class ZhuyinHelper {

    static singlePinyin: Map<string, string>;
    static singlePinyinInverse: Map<string, string>;
    static zhuyins: Map<string, string>;
    static zhuyinsInverse: Map<string, string>;
    static toneNotes = "˙ˉˊˇˋ";


    static initMap() {
        this.singlePinyin = new Map();
        this.singlePinyin.set('ZHI', 'ZH');
        this.singlePinyin.set('CHI', 'CH');
        this.singlePinyin.set('SHI', 'SH');
        this.singlePinyin.set('RI', 'R');
        this.singlePinyin.set('ZI', 'Z');
        this.singlePinyin.set('CI', 'C');
        this.singlePinyin.set('SI', 'S');

        this.singlePinyin.set('A', 'A');
        this.singlePinyin.set('O', 'O');
        this.singlePinyin.set('E', 'E');
        this.singlePinyin.set('ER', 'ER');
        this.singlePinyin.set('AI', 'AI');
        this.singlePinyin.set('AO', 'AO');
        this.singlePinyin.set('EI', 'EI');
        this.singlePinyin.set('OU', 'OU');
        this.singlePinyin.set('AN', 'AN');
        this.singlePinyin.set('ANG', 'ANG');
        this.singlePinyin.set('EN', 'EN');

        this.singlePinyin.set('YI', 'I');
        this.singlePinyin.set('WU', 'U');
        this.singlePinyin.set('YU', 'V');
        this.singlePinyin.set('YA', 'IA');
        this.singlePinyin.set('YAO', 'IAO');
        this.singlePinyin.set('YE', 'IE');
        this.singlePinyin.set('YOU', 'IOU');
        this.singlePinyin.set('WA', 'UA');
        this.singlePinyin.set('WAI', 'UAI');
        this.singlePinyin.set('WEI', 'UEI');
        this.singlePinyin.set('WO', 'UO');
        this.singlePinyin.set('YUE', 'VE');
        this.singlePinyin.set('YAN', 'IAN');
        this.singlePinyin.set('YANG', 'IANG');
        this.singlePinyin.set('YIN', 'IN');
        this.singlePinyin.set('YING', 'ING');
        this.singlePinyin.set('WAN', 'UAN');
        this.singlePinyin.set('WANG', 'UANG');
        this.singlePinyin.set('WEN', 'UEN');
        this.singlePinyin.set('WENG', 'UENG');
        this.singlePinyin.set('YUAN', 'VAN');
        this.singlePinyin.set('YUN', 'VN');
        this.singlePinyin.set('YONG', 'IONG');

        this.zhuyins = new Map();
        this.zhuyins.set('B', 'ㄅ');
        this.zhuyins.set('P', 'ㄆ');
        this.zhuyins.set('M', 'ㄇ');
        this.zhuyins.set('F', 'ㄈ');
        this.zhuyins.set('D', 'ㄉ');
        this.zhuyins.set('T', 'ㄊ');
        this.zhuyins.set('N', 'ㄋ');
        this.zhuyins.set('L', 'ㄌ');
        this.zhuyins.set('G', 'ㄍ');
        this.zhuyins.set('K', 'ㄎ');
        this.zhuyins.set('H', 'ㄏ');
        this.zhuyins.set('J', 'ㄐ');
        this.zhuyins.set('Q', 'ㄑ');
        this.zhuyins.set('X', 'ㄒ');
        this.zhuyins.set('ZH', 'ㄓ');
        this.zhuyins.set('CH', 'ㄔ');
        this.zhuyins.set('SH', 'ㄕ');
        this.zhuyins.set('R', 'ㄖ');
        this.zhuyins.set('Z', 'ㄗ');
        this.zhuyins.set('C', 'ㄘ');
        this.zhuyins.set('S', 'ㄙ');

        this.zhuyins.set('A', 'ㄚ');
        this.zhuyins.set('O', 'ㄛ');
        this.zhuyins.set('E', 'ㄜ');
        this.zhuyins.set('I', 'ㄧ');
        this.zhuyins.set('U', 'ㄨ');
        this.zhuyins.set('V', 'ㄩ');
        this.zhuyins.set('ER', 'ㄦ');
        this.zhuyins.set('AI', 'ㄞ');
        this.zhuyins.set('AO', 'ㄠ');
        this.zhuyins.set('EI', 'ㄟ');
        this.zhuyins.set('OU', 'ㄡ');
        this.zhuyins.set('IA', 'ㄧㄚ');
        this.zhuyins.set('IAO', 'ㄧㄠ');
        this.zhuyins.set('IE', 'ㄧㄝ');
        this.zhuyins.set('IU', 'ㄧㄡ');
        this.zhuyins.set('UA', 'ㄨㄚ');
        this.zhuyins.set('UAI', 'ㄨㄞ');
        this.zhuyins.set('UI', 'ㄨㄟ');
        this.zhuyins.set('UO', 'ㄨㄛ');
        this.zhuyins.set('VE', 'ㄩㄝ');
        this.zhuyins.set('UE', 'ㄩㄝ');
        this.zhuyins.set('AN', 'ㄢ');
        this.zhuyins.set('ANG', 'ㄤ');
        this.zhuyins.set('EN', 'ㄣ');
        this.zhuyins.set('ENG', 'ㄥ');
        this.zhuyins.set('IAN', 'ㄧㄢ');
        this.zhuyins.set('IANG', 'ㄧㄤ');
        this.zhuyins.set('IN', 'ㄧㄣ');
        this.zhuyins.set('ING', 'ㄧㄥ');
        this.zhuyins.set('UAN', 'ㄨㄢ');
        this.zhuyins.set('UANG', 'ㄨㄤ');
        this.zhuyins.set('UN', 'ㄨㄣ');
        this.zhuyins.set('ONG', 'ㄨㄥ');
        this.zhuyins.set('VAN', 'ㄩㄢ');
        this.zhuyins.set('VN', 'ㄩㄣ');
        this.zhuyins.set('IONG', 'ㄩㄥ');

        this.singlePinyinInverse = new Map();
        for (let [k, v] of this.singlePinyin) {
            this.singlePinyinInverse.set(v, k);
        }

        this.zhuyinsInverse = new Map();
        for (let [k, v] of this.zhuyins) {
            this.zhuyinsInverse.set(v, k);
        }
    }
    /**
     * 注音转换为拼音
     */
    public static fromZhuyin(zhuyin: string): string {
        if (!ZhuyinHelper.singlePinyin || !ZhuyinHelper.zhuyins) {
            ZhuyinHelper.initMap();
        }

        var tone = ZhuyinHelper.toneNotes.indexOf(zhuyin[zhuyin.length - 1]);
        if (tone === -1) {
            throw new Error("不正确的注音声调");
        }
        zhuyin = zhuyin.substring(0, zhuyin.length - 1);

        if (ZhuyinHelper.zhuyinsInverse.has(zhuyin)) {
            let pinyin = ZhuyinHelper.zhuyinsInverse.get(zhuyin) as string;

            if (ZhuyinHelper.singlePinyinInverse.has(pinyin)) {
                pinyin = ZhuyinHelper.singlePinyinInverse.get(pinyin) as string;
            } else if (pinyin === 'UN') {
                pinyin = 'UEN';
            } else if (pinyin === 'UI') {
                pinyin = 'UEI';
            } else if (pinyin === 'ONG') {
                pinyin = 'UENG';
            } else if (pinyin === 'IU') {
                pinyin = 'IOU';
            }
            return pinyin + tone;
        }
        let zhuyin1 = zhuyin[0];
        let zhuyin2 = zhuyin.substring(1);
        let pinyin = '';
        if (ZhuyinHelper.zhuyinsInverse.has(zhuyin1)) {
            pinyin = ZhuyinHelper.zhuyinsInverse.get(zhuyin1) as string;
        }
        else {
            throw new Error("不正确的注音");
        }
        if (ZhuyinHelper.zhuyinsInverse.has(zhuyin2)) {
            pinyin += ZhuyinHelper.zhuyinsInverse.get(zhuyin2) as string;
        }
        else {
            throw new Error("不正确的注音");
        }
        return pinyin + tone;
    }

    /**
     * 拼音转换为注音
     */
    public static toZhuyin(pinyin: string): string {

        if (!ZhuyinHelper.singlePinyin || !ZhuyinHelper.zhuyins) {
            ZhuyinHelper.initMap();
        }
        if (pinyin.length <= 1) {
            throw new Error("不正确的拼音");
        }

        var tone = parseInt(pinyin[pinyin.length - 1]);
        if (Number.isNaN(tone)) {
            throw new Error("不正确的拼音声调");
        }
        if (tone > 5) {
            throw new Error("不正确的拼音声调");
        }
        pinyin = pinyin.toUpperCase();
        pinyin = pinyin.substring(0, pinyin.length - 1);

        if (ZhuyinHelper.singlePinyin.has(pinyin)) {
            pinyin = ZhuyinHelper.singlePinyin.get(pinyin) as string;

            if (pinyin === 'UEN') {
                pinyin = 'UN';
            } else if (pinyin === 'UEI') {
                pinyin = 'UI';
            } else if (pinyin === 'UENG') {
                pinyin = 'ONG';
            } else if (pinyin === 'IOU') {
                pinyin = 'IU';
            }

            let zhuyin = ZhuyinHelper.zhuyins.get(pinyin) as string;
            if (!zhuyin) {
                throw new Error("不正确的拼音");
            }
            return zhuyin + ZhuyinHelper.toneNotes[tone];
        }

        if (pinyin.length < 2) {
            throw new Error("不正确的拼音");
        }
        let vowel, rhyme;;
        if (pinyin[1] === 'H') {
            vowel = pinyin.substring(0, 2);
            rhyme = pinyin.substring(2);
        }
        else {
            vowel = pinyin[0];
            rhyme = pinyin.substring(1);
        }
        let zhuyin = ZhuyinHelper.zhuyins.get(vowel);
        let zhuyin2 = ZhuyinHelper.zhuyins.get(rhyme);
        if (!zhuyin || !zhuyin2) {
            throw new Error("不正确的拼音");
        }
        return zhuyin + zhuyin2 + ZhuyinHelper.toneNotes[tone];
    }
}
