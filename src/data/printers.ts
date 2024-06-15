// src/data/printers.ts
  // Importando as imagens
  import printer1 from '../assets/images/L220.png';
  import printer2 from '../assets/images/L355.png';
  import printer3 from '../assets/images/L365.png';
  import printer4 from '../assets/images/L375.png';
  import printer5 from '../assets/images/L380.png';
  import printer6 from '../assets/images/L395.png';
  import printer7 from '../assets/images/L3110.png';
  import printer8 from '../assets/images/L3150.png';
  import printer9 from '../assets/images/L3210.png';
  import printer10 from '../assets/images/L3250.png';
  import printer11 from '../assets/images/L4150.png';
  import printer12 from '../assets/images/L4160.png';
  import printer13 from '../assets/images/L4260.png';
  import printer14 from '../assets/images/L5290.png';
  import printer15 from '../assets/images/L6490.png';
  import printer16 from '../assets/images/M105.png';
  import printer17 from '../assets/images/M205.png';

export interface Printer {
    name: string;
    image: string;
    downloads: {
      x32: string;
      x64: string;
    };
  }
    
  export const printers: Printer[] = [
    {
      name: 'Epson L220',
      image: printer1,
      downloads: {
        x32: 'https://ftp.epson.com/latin/drivers/Multi/l220/L220_x86_222AW_GM.exe',
        x64: 'https://ftp.epson.com/latin/drivers/Multi/l220/L220_x64_222AW_GM.exe',
      },
    },
    {
      name: 'Epson L355',
      image: printer2,
      downloads: {
        x32: 'https://ftp.epson.com/latin/drivers/inkjet/L355_X86_15403_LA.exe',
        x64: 'https://ftp.epson.com/latin/drivers/inkjet/L355_X64_15403_LA.exe',
      },
    },
    {
        name: 'Epson L365',
        image: printer3,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L365_X86_224_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L365_X64_224_LA.exe',
        },
      },
      {
        name: 'Epson L375',
        image: printer4,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L375_X86_24101_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L375_X64_24101_LA.exe',
        },
      },
      {
        name: 'Epson L380',
        image: printer5,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L380_X86_25002_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L380_X64_25002_LA.exe',
        },
      },
      {
        name: 'Epson L395',
        image: printer6,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L395_X86_25001_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L395_X64_25001_LA.exe',
        },
      },
      {
        name: 'Epson L3110',
        image: printer7,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L3110_X86_26201_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L3110_X64_26201_LA.exe',
        },
      },
      {
        name: 'Epson L3150',
        image: printer8,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L3150_X86_26201_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L3150_X64_26201_LA.exe',
        },
      },
      {
        name: 'Epson L3210',
        image: printer9,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L3210_X86_30100_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L3210_X64_30100_LA.exe',
        },
      },
      {
        name: 'Epson L3250',
        image: printer10,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L3250_L3251_X86_30100_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L3250_L3251_X64_30100_LA.exe',
        },
      },
      {
        name: 'Epson L4150',
        image: printer11,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L4150_X86_27001_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L4150_X64_27001_LA.exe',
        },
      },
      {
        name: 'Epson L4160',
        image: printer12,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L4160_X86_27002_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L4160_X64_27002_LA.exe',
        },
      },
      {
        name: 'Epson L4260',
        image: printer13,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L4260_X86_30100_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L4260_X64_30100_LA.exe',
        },
      },
      {
        name: 'Epson L5290',
        image: printer14,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L5290_X86_30100_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L5290_X64_30100_LA.exe',
        },
      },
      {
        name: 'Epson L6490',
        image: printer15,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/L6490_X86_302_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/L6490_X64_302_LA.exe',
        },
      },
      {
        name: 'Epson M105',
        image: printer16,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/Impresoras/m105__/M105_x86_155AW_CS.exe',
          x64: 'https://ftp.epson.com/latin/drivers/Impresoras/m105__/M105_x64_155AW_CS.exe',
        },
      },
      {
        name: 'Epson M205',
        image: printer17,
        downloads: {
          x32: 'https://ftp.epson.com/latin/drivers/inkjet/M205_X86_15501_LA.exe',
          x64: 'https://ftp.epson.com/latin/drivers/inkjet/M205_X64_15501_LA.exe',
        },
      },
    // Adicione mais impressoras conforme necessário
  ];  