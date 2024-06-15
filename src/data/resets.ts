// src/data/resets.ts
import reset1 from '../assets/images/L220.png';
import reset2 from '../assets/images/L355.png';
import reset3 from '../assets/images/L365.png';
import reset4 from '../assets/images/L375.png';
import reset5 from '../assets/images/L380.png';
import reset6 from '../assets/images/L395.png';
import reset7 from '../assets/images/L3110.png';
import reset8 from '../assets/images/L3150.png';
import reset9 from '../assets/images/L3210.png';
import reset10 from '../assets/images/L3250.png';
import reset11 from '../assets/images/L4150.png';
import reset12 from '../assets/images/L4160.png';
import reset13 from '../assets/images/L4260.png';
import reset14 from '../assets/images/M105.png';
import reset15 from '../assets/images/M205.png';

export interface Reset {
    name: string;
    image: string;
    download: string;
}
    
export const resets: Reset[] = [
    {
        name: 'Epson L220',
        image: reset1,
        download: 'https://www.mediafire.com/file/i3xt96i8gqyksnx/Reset_L130-L220-L310-L360-L365.rar/file',
    },
    {
        name: 'Epson L355',
        image: reset2,
        download: 'https://www.mediafire.com/file/di5x2z49u7by6ax/Reset_L110-L210-L350-L300-L355.rar/file',
    },
    {
        name: 'Epson L365',
        image: reset3,
        download: 'https://www.mediafire.com/file/i3xt96i8gqyksnx/Reset_L130-L220-L310-L360-L365.rar/file',
    },
    {
        name: 'Epson L375',
        image: reset4,
        download: 'https://www.mediafire.com/file/vwsywxr8e0bmfce/Reset_L375-L475.rar/file',
    },
    {
        name: 'Epson L380',
        image: reset5,
        download: 'https://www.mediafire.com/file/ggzt92iye8ftu0e/Reset_L380-L383-L385-L485.rar/file',
    },
    {
        name: 'Epson L395',
        image: reset6,
        download: 'https://www.mediafire.com/file/mv87nrtxwsnhzr8/Reset_L395-L495.rar/file',
    },
    {
        name: 'Epson L3110',
        image: reset7,
        download: 'ttps://www.mediafire.com/file/dsifxnky13nak7w/Reset_L3100-L3101-L3110-L3150.rar/file',
    },
    {
        name: 'Epson L3150',
        image: reset8,
        download: 'https://www.mediafire.com/file/dsifxnky13nak7w/Reset_L3100-L3101-L3110-L3150.rar/file',
    },
    {
        name: 'Epson L3210',
        image: reset9,
        download: 'https://www.mediafire.com/file/sc559a7d0xgince/Reset_L3250-3210-5290.rar/file',
    },
    {
        name: 'Epson L3250',
        image: reset10,
        download: 'https://www.mediafire.com/file/sc559a7d0xgince/Reset_L3250-3210-5290.rar/file',
    },
    {
        name: 'Epson L4150',
        image: reset11,
        download: 'https://www.mediafire.com/file/4oa8fiin3dgbmaa/Reset_L4160.rar/file',
    },
    {
        name: 'Epson L4160',
        image: reset12,
        download: 'https://www.mediafire.com/file/4oa8fiin3dgbmaa/Reset_L4160.rar/file',
    },
    {
        name: 'Epson L4260',
        image: reset13,
        download: 'https://www.mediafire.com/file/8c7akujr9mwyxyj/Reset_L4260-L4261-L4267.rar/file',
    },
    {
        name: 'Epson M105',
        image: reset14,
        download: 'https://www.mediafire.com/file/xjx2wjapoatdqan/Reset_M105-M205.rar/file',
    },
    {
        name: 'Epson M205',
        image: reset15,
        download: 'https://www.mediafire.com/file/xjx2wjapoatdqan/Reset_M105-M205.rar/file',
    },
    // Adicione mais impressoras conforme necessário
];