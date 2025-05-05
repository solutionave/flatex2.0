export const Dokumentdata = [
    {
        id: "612",
        name: "Cashkonto – Daniel Mehner",
        date: "09.09.2024",
        buttonText: "Bankbestätigung",
        description: "Bankbestätigung ausländische Wertpapiere",
        endDate: "10.09.2024",
        onButtonClick: () => {
            window.open('/docs/612 09.09.2024 Bankbestätigung_Flatex_DM_1.pdf');
          }
      },
      {
        id: "767",
        name: "Cashkonto – Daniel Mehner",
        date: "02.12.2024",
        buttonText: "Bankbestätigung",
        description: "Bankbestätigung ausländische Wertpapiere",
        endDate: "10.09.2024",
        onButtonClick: () => {
            window.open('/docs/Bank2.pdf');
          },
      },
      {
        id: "767",
        name: "Cashkonto – Daniel Mehner",
        date: "09.09.2024",
        buttonText: "Bankbestätigung",
        description: "Bankbestätigung ausländische Wertpapiere",
        endDate: "10.09.2024",
        onButtonClick: () => {
            window.open('/docs/767 09.09.2024 Bankbestaetigung_Flatex_DM_2.pdf');
          },
      },
      {
        id: "612",
        name: "Cashkonto – Daniel Mehner",
        date: "02.12.2024",
        buttonText: "Wertpapierabrechnung",
        description: "Sammelabrechnung vom 23.02.2021",
        endDate: "27.02.2021",
        onButtonClick: () => {
            window.open('/docs/Kauf1.pdf');
          },
      },
      {
        id: "605",
        name: "Cashkonto – Daniel Mehner",
        date: "02.12.2024",
        buttonText: "Wertpapierabrechnung",
        description: "Sammelabrechnung vom 23.02.2021",
        endDate: "12.10.2021",
        onButtonClick: () => {
            window.open('/docs/kauf2.pdf');
          },
      },
      {
        id: "612",
        name: "Cashkonto – Daniel Mehner",
        date: "23.02.2021",
        buttonText: "Wertpapierabrechnung",
        description: "Sammelabrechnung vom 23.02.2021",
        endDate: "27.02.2021",
        onButtonClick: () => {
            window.open('/docs/767 23.02.2021 Kauf_Gazprom_Daniel_Mehner_I.pdf');
          },
      },

];

interface PortfolioItem {
  name: string;
  isin: string;
  wkn: string;
  category: string;
  quantity: string;
  purchasePrice: string;
  custody: string;
  exchange: string;
  date: string;
  lastPrice: string;
  prevDayChange: string;
  prevDayChangePercent: string;
  currentValue: string;
  purchaseValue: string;
  absoluteChange: string;
  percentChange: string;
  changeColor: string;
}

type PortfolioData = {
  [key in
    | "***774"
    | "***612"
    | "***605"
    | "***881"
    | "***336"]: PortfolioItem[];
};

export const portfolioData: PortfolioData = {
  "***774": [
    {
      name: "COCA-COLA CO., THE (CCC3)",
      isin: "US1912161007",
      wkn: "850663",
      category: "Aktien",
      quantity: "10.250,00 Stk",
      purchasePrice: "59,09 EUR",
      custody: "ClearStream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "62,9365 EUR",
      prevDayChange: "-0,529",
      prevDayChangePercent: "-0,84 %",
      currentValue: "645.099,13 EUR",
      purchaseValue: "605.672,50 EUR",
      absoluteChange: "39.429,63 EUR",
      percentChange: "6,51 %",
      changeColor: "text-red-500",
    },
  ],
  "***612": [
    {
      name: "Bayerische Motorenwerke AG (BMW)",
      isin: "DE0005190003",
      wkn: "519000",
      category: "Aktien",
      quantity: "4.000,00 Stk",
      purchasePrice: "102,45 EUR",
      custody: "ClearStream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "70,50 EUR",
      prevDayChange: "+0,705",
      prevDayChangePercent: "+1,00 %",
      currentValue: "282.000,00 EUR",
      purchaseValue: "409.800,00 EUR",
      absoluteChange: "-127.800,00 EUR",
      percentChange: "-31,19 %",
      changeColor: "text-red-500",
    },
    {
      name: "COCA-COLA CO., THE (CCC3)",
      isin: "US1912161007",
      wkn: "850663",
      category: "Aktien",
      quantity: "2.000,00 Stk",
      purchasePrice: "57,84 EUR",
      custody: "ClearStream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "62,9365 EUR",
      prevDayChange: "-0,529",
      prevDayChangePercent: "-0,84 %",
      currentValue: "125.873,00 EUR",
      purchaseValue: "115.680,00 EUR",
      absoluteChange: "10.193,00 EUR",
      percentChange: "8,81 %",
      changeColor: "text-red-500",
    },
  ],
  "***605": [
    {
      name: "African Rainbow Minerals Ltd.",
      isin: "ZAE000054045",
      wkn: "A0CAQD",
      category: "Aktien",
      quantity: "12.000,00 Stk",
      purchasePrice: "11,00 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "8,02 EUR",
      prevDayChange: "+0,05",
      prevDayChangePercent: "+0,00 %",
      currentValue: "96.240,00 EUR",
      purchaseValue: "132.000,00 EUR",
      absoluteChange: "-35.760,00 EUR",
      percentChange: "-27,09 %",
      changeColor: "text-red-500",
    },
    {
      name: "COCA-COLA CO., THE (CCC3)",
      isin: "US1912161007",
      wkn: "850663",
      category: "Aktien",
      quantity: "10.000,00 Stk",
      purchasePrice: "57,84 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "62,9365 EUR",
      prevDayChange: "-0,529",
      prevDayChangePercent: "-0,84 %",
      currentValue: "125.873,00 EUR",
      purchaseValue: "115.680,00 EUR",
      absoluteChange: "10.193,00 EUR",
      percentChange: "8,81 %",
      changeColor: "text-red-500",
    },
    {
      name: "Gerdau S. A. Vz.",
      isin: "BRGGBRACNPR8",
      wkn: "909187",
      category: "Aktien",
      quantity: "882 Stk.",
      purchasePrice: "4,71 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "2,12 EUR",
      prevDayChange: "+0,15",
      prevDayChangePercent: "+7,07 %",
      currentValue: "4.154,22 EUR",
      purchaseValue: "1.869,84 EUR",
      absoluteChange: "-2.284,38 EUR",
      percentChange: "-53,69 %",
      changeColor: "text-red-500",
    },
    {
      name: "Unicredit BK Aust.-Anr.",
      isin: "AT0000A0AJ61",
      wkn: "A0Q7SM",
      category: "Nachbesserungsrechte",
      quantity: "70.128 Stk.",
      purchasePrice: "2,50 EUR",
      custody: "Clearstream Nat.",
      exchange: "---",
      date: "---",
      lastPrice: "---",
      prevDayChange: "---",
      prevDayChangePercent: "---",
      currentValue: "---",
      purchaseValue: "175.320,00 EUR",
      absoluteChange: "---",
      percentChange: "---",
      changeColor: "text-gray-500",
    },
  ],
  "***881": [
    {
      name: "AT & T INC.",
      isin: "US00206R1023",
      wkn: "A0HL9Z",
      category: "Aktien",
      quantity: "20.000 Stk",
      purchasePrice: "17,65 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "24,07 EUR",
      prevDayChange: "0,24",
      prevDayChangePercent: "+1,00 %",
      currentValue: "481.400,00 EUR",
      purchaseValue: "353.000,00 EUR",
      absoluteChange: "128.400,00 EUR",
      percentChange: "36,37 %",
      changeColor: "text-green-600",
    },
    {
      name: "BP PLC",
      isin: "GB0007980591",
      wkn: "850517",
      category: "Aktien",
      quantity: "80.012 Stk.",
      purchasePrice: "5,19 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "4,18 EUR",
      prevDayChange: "0,08",
      prevDayChangePercent: "1,91 %",
      currentValue: "334.450,16 EUR",
      purchaseValue: "415.262,28 EUR",
      absoluteChange: "-80.812,12 EUR",
      percentChange: "-19,46 %",
      changeColor: "text-red-500",
    },
    {
      name: "Kraft Heinz Co, The",
      isin: "US5007541064",
      wkn: "A14TU4",
      category: "Aktien",
      quantity: "9.000,00 Stk",
      purchasePrice: "32,32 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "25,74 EUR",
      prevDayChange: "-0,50",
      prevDayChangePercent: "-1,94 %",
      currentValue: "231.660,00 EUR",
      purchaseValue: "290.880,00 EUR",
      absoluteChange: "-59.220,00 EUR",
      percentChange: "-20,36 %",
      changeColor: "text-red-500",
    },
  ],
  "***336": [
    {
      name: "IShares EM Dividend ETF",
      isin: "IE00B652H904",
      wkn: "A1JNZ9",
      category: "ETF",
      quantity: "1.200,771 Stk.",
      purchasePrice: "13,04 EUR",
      custody: "Clearstream Lux.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "12,91 EUR",
      prevDayChange: "0,20",
      prevDayChangePercent: "+1,55 %",
      currentValue: "15.501,95 EUR",
      purchaseValue: "15.658,05 EUR",
      absoluteChange: "-156,09 EUR",
      percentChange: "-0,99 %",
      changeColor: "text-red-500",
    },
    {
      name: "Realty Income Corp.",
      isin: "US7561091049",
      wkn: "899744",
      category: "Aktien",
      quantity: "200 Stk.",
      purchasePrice: "52,83 EUR",
      custody: "Clearstream Nat.",
      exchange: "Lang & Schwarz",
      date: "formattedDate",
      lastPrice: "51,26 EUR",
      prevDayChange: "0,25",
      prevDayChangePercent: "0,49 %",
      currentValue: "10.252,00 EUR",
      purchaseValue: "10.566,00 EUR",
      absoluteChange: "-314,00 EUR",
      percentChange: "-2,97 %",
      changeColor: "text-red-500",
    },
  ],
};

export const accountData = [
  {
    name: "***774 Depot – Daniel Mehner",
    value: "645.099,13 EUR",
    available: "-",
    credit: "-",
    pledge: "341.903,52 EUR",
    accountId: "***774",
  },
  // {
  //   name: "***767 Cashkonto – Daniel Mehner",
  //   value: "125.064,91 EUR",
  //   available: "125.064,91 EUR",
  //   credit: "0,00 EUR",
  //   pledge: "-",
  //   accountId: "***767",
  // },
  {
    name: "***612 Depot – Daniel Mehner",
    value: "455.740,00 EUR",
    available: "-",
    credit: "-",
    pledge: "244.278,04 EUR",
    accountId: "***612",
  },
  // {
  //   name: "***782 Cashkonto – Daniel Mehner",
  //   value: "1.815,72 EUR",
  //   available: "1.815,72 EUR",
  //   credit: "0,00 EUR",
  //   pledge: "-",
  //   accountId: "***782",
  // },
  {
    name: "***605 Depot – Daniel Mehner",
    value: "226.267,22 EUR",
    available: "-",
    credit: "-",
    pledge: "104.718,02 EUR",
    accountId: "***605",
  },
  // {
  //   name: "***618 Cashkonto – Daniel Mehner",
  //   value: "812,13 EUR",
  //   available: "812,13 EUR",
  //   credit: "0,00 EUR",
  //   pledge: "-",
  //   accountId: "***618",
  // },
  {
    name: "***881 Depot – Daniel Mehner",
    value: "1.047.510,16 EUR",
    available: "-",
    credit: "-",
    pledge: "560.013,18 EUR",
    accountId: "***881",
  },
  // {
  //   name: "***874 Cashkonto – Daniel Mehner",
  //   value: "200,18 EUR",
  //   available: "200,18 EUR",
  //   credit: "0,00 EUR",
  //   pledge: "-",
  //   accountId: "***874",
  // },
  {
    name: "***336 Depot – Daniel Mehner",
    value: "25.753,95 EUR",
    available: "-",
    credit: "-",
    pledge: "12.002,22 EUR",
    accountId: "***336",
  },
  // {
  //   name: "***329 Cashkonto – Daniel Mehner",
  //   value: "52.052,23 EUR",
  //   available: "52.052,23 EUR",
  //   credit: "0,00 EUR",
  //   pledge: "-",
  //   accountId: "***329",
  // },
];