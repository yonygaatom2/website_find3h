import React from "react";

export interface Country {
    /// Country id given to identify within package.
    id?: number | null;

    /// [name] : Name of the country.
    name: string;

    /// [length] : Default number of length to validated number.
    length?: number | null;

    /// [dialCode] : Default ISO code is a standardized short form assigned by the
    /// International Organization for Standardization (ISO) to represent a country
    /// or region.
    dialCode: string;

    /// [isoCode] : Default dial code (also known as an international calling code
    /// or country code) is the number prefix used when making international phone
    /// calls to a specific country. Also known as `Country Code`.
    isoCode: string;

    flag?: React.ReactElement | null;

    /// [otherSupportedLength] : Support number of length if included on list.
    otherSupportedLength?: number[];

    /// [otherSupportedDialCode] : Support the number for other
    otherSupportedDialCode?: number[];

    /// [otherSupportedISOCode] : Some country have more than 1 ISO Code.
    otherSupportedISOCode?: string[];

}

const displayFlag = (name?: string | null) => {
    return <img src={`assets/flags/${name}.svg`} alt={`${name}`} />;
}

export const countryList: Country[] = [
    {
        "name": "Afghanistan",
        "isoCode": "AF",
        "dialCode": "93",
        "flag": displayFlag('af'),
    },
    {
        "name": "Albania",
        "isoCode": "AL",
        "dialCode": "355",
        "flag": displayFlag('al'),
    },
    {
        "name": "Algeria",
        "isoCode": "DZ",
        "dialCode": "213",
        "flag": displayFlag('dz'),
    },
    {
        "name": "Andorra",
        "isoCode": "AD",
        "dialCode": "376",
        "flag": displayFlag('ad'),
    },
    {
        "name": "Angola",
        "isoCode": "AO",
        "dialCode": "244",
        "flag": displayFlag('ao'),
    },
    {
        "name": "Antigua and Barbuda",
        "isoCode": "AG",
        "dialCode": "1268",
        "flag": displayFlag('ag'),
    },
    {
        "name": "Argentina",
        "isoCode": "AR",
        "dialCode": "54",
        "flag": displayFlag('ar'),
    },
    {
        "name": "Armenia",
        "isoCode": "AM",
        "dialCode": "374",
        "flag": displayFlag('am'),
    },
    {
        "name": "Australia",
        "isoCode": "AU",
        "dialCode": "61",
        "flag": displayFlag('au'),
    },
    {
        "name": "Austria",
        "isoCode": "AT",
        "dialCode": "43",
        "flag": displayFlag('at'),
    },
    {
        "name": "Azerbaijan",
        "isoCode": "AZ",
        "dialCode": "994",
        "flag": displayFlag('az'),
    },
    {
        "name": "Bahamas",
        "isoCode": "BS",
        "dialCode": "1242",
        "flag": displayFlag('bs'),
    },
    {
        "name": "Bahrain",
        "isoCode": "BH",
        "dialCode": "973",
        "flag": displayFlag('bh'),
    },
    {
        "name": "Bangladesh",
        "isoCode": "BD",
        "dialCode": "880",
        "flag": displayFlag('bd'),
    },
    {
        "name": "Barbados",
        "isoCode": "BB",
        "dialCode": "1246",
        "flag": displayFlag('bb'),
    },
    {
        "name": "Belarus",
        "isoCode": "BY",
        "dialCode": "375",
        "flag": displayFlag('by'),
    },
    {
        "name": "Belgium",
        "isoCode": "BE",
        "dialCode": "32",
        "flag": displayFlag('be'),
    },
    {
        "name": "Belize",
        "isoCode": "BZ",
        "dialCode": "501",
        "flag": displayFlag('bz'),
    },
    {
        "name": "Benin",
        "isoCode": "BJ",
        "dialCode": "229",
        "flag": displayFlag('bj'),
    },
    {
        "name": "Bhutan",
        "isoCode": "BT",
        "dialCode": "975",
        "flag": displayFlag('bt'),
    },
    {
        "name": "Bolivia",
        "isoCode": "BO",
        "dialCode": "591",
        "flag": displayFlag('bo'),
    },
    {
        "name": "Bosnia and Herzegovina",
        "isoCode": "BA",
        "dialCode": "387",
        "flag": displayFlag('ba'),
    },
    {
        "name": "Botswana",
        "isoCode": "BW",
        "dialCode": "267",
        "flag": displayFlag('bw'),
    },
    {
        "name": "Brazil",
        "isoCode": "BR",
        "dialCode": "55",
        "flag": displayFlag('br'),
    },
    {
        "name": "Brunei",
        "isoCode": "BN",
        "dialCode": "673",
        "flag": displayFlag('bn'),
    },
    {
        "name": "Bulgaria",
        "isoCode": "BG",
        "dialCode": "359",
        "flag": displayFlag('bg'),
    },
    {
        "name": "Burkina Faso",
        "isoCode": "BF",
        "dialCode": "226",
        "flag": displayFlag('bf'),
    },
    {
        "name": "Burundi",
        "isoCode": "BI",
        "dialCode": "257",
        "flag": displayFlag('bi'),
    },
    {
        "name": "Cabo Verde",
        "isoCode": "CV",
        "dialCode": "238",
        "flag": displayFlag('cv'),
    },
    {
        "name": "Cambodia",
        "isoCode": "KH",
        "dialCode": "855",
        "flag": displayFlag('kh'),
    },
    {
        "name": "Cameroon",
        "isoCode": "CM",
        "dialCode": "237",
        "flag": displayFlag('cm'),
    },
    {
        "name": "Canada",
        "isoCode": "CA",
        "dialCode": "1",
        "flag": displayFlag('ca'),
    },
    {
        "name": "Central African Republic",
        "isoCode": "CF",
        "dialCode": "236",
        "flag": displayFlag('cf'),
    },
    {
        "name": "Chad",
        "isoCode": "TD",
        "dialCode": "235",
        "flag": displayFlag('td'),
    },
    {
        "name": "Chile",
        "isoCode": "CL",
        "dialCode": "56",
        "flag": displayFlag('cl'),
    },
    {
        "name": "China",
        "isoCode": "CN",
        "dialCode": "86",
        "flag": displayFlag('cn'),
    },
    {
        "name": "Colombia",
        "isoCode": "CO",
        "dialCode": "57",
        "flag": displayFlag('co'),
    },
    {
        "name": "Comoros",
        "isoCode": "KM",
        "dialCode": "269",
        "flag": displayFlag('km'),
    },
    {
        "name": "Congo (Congo-Brazzaville)",
        "isoCode": "CG",
        "dialCode": "242",
        "flag": displayFlag('cg'),
    },
    {
        "name": "Congo (DRC)",
        "isoCode": "CD",
        "dialCode": "243",
        "flag": displayFlag('cd'),
    },
    {
        "name": "Costa Rica",
        "isoCode": "CR",
        "dialCode": "506",
        "flag": displayFlag('cr'),
    },
    {
        "name": "Croatia",
        "isoCode": "HR",
        "dialCode": "385",
        "flag": displayFlag('hr'),
    },
    {
        "name": "Cuba",
        "isoCode": "CU",
        "dialCode": "53",
        "flag": displayFlag('cu'),
    },
    {
        "name": "Cyprus",
        "isoCode": "CY",
        "dialCode": "357",
        "flag": displayFlag('cy'),
    },
    {
        "name": "Czech Republic",
        "isoCode": "CZ",
        "dialCode": "420",
        "flag": displayFlag('cz'),
    },
    {
        "name": "Denmark",
        "isoCode": "DK",
        "dialCode": "45",
        "flag": displayFlag('dk'),
    },
    {
        "name": "Djibouti",
        "isoCode": "DJ",
        "dialCode": "253",
        "flag": displayFlag('dj'),
    },
    {
        "name": "Dominica",
        "isoCode": "DM",
        "dialCode": "1767",
        "flag": displayFlag('dm'),
    },
    {
        "name": "Dominican Republic",
        "isoCode": "DO",
        "dialCode": "1809",
        "flag": displayFlag('do'),
    },
    {
        "name": "East Timor (Timor-Leste)",
        "isoCode": "TL",
        "dialCode": "670",
        "flag": displayFlag('tl'),
    },
    {
        "name": "Ecuador",
        "isoCode": "EC",
        "dialCode": "593",
        "flag": displayFlag('ec'),
    },
    {
        "name": "Egypt",
        "isoCode": "EG",
        "dialCode": "20",
        "flag": displayFlag('eg'),
    },
    {
        "name": "El Salvador",
        "isoCode": "SV",
        "dialCode": "503",
        "flag": displayFlag('sv'),
    },
    {
        "name": "Equatorial Guinea",
        "isoCode": "GQ",
        "dialCode": "240",
        "flag": displayFlag('gq'),
    },
    {
        "name": "Eritrea",
        "isoCode": "ER",
        "dialCode": "291",
        "flag": displayFlag('er'),
    },
    {
        "name": "Estonia",
        "isoCode": "EE",
        "dialCode": "372",
        "flag": displayFlag('ee'),
    },
    {
        "name": "Eswatini",
        "isoCode": "SZ",
        "dialCode": "268",
        "flag": displayFlag('sz'),
    },
    {
        "name": "Ethiopia",
        "isoCode": "ET",
        "dialCode": "251",
        "flag": displayFlag('et'),
    },
    {
        "name": "Fiji",
        "isoCode": "FJ",
        "dialCode": "679",
        "flag": displayFlag('fj'),
    },
    {
        "name": "Finland",
        "isoCode": "FI",
        "dialCode": "358",
        "flag": displayFlag('ei'),
    },
    {
        "name": "France",
        "isoCode": "FR",
        "dialCode": "33",
        "flag": displayFlag('fr'),
    },
    {
        "name": "Gabon",
        "isoCode": "GA",
        "dialCode": "241",
        "flag": displayFlag('ga'),
    },
    {
        "name": "Gambia",
        "isoCode": "GM",
        "dialCode": "220",
        "flag": displayFlag('gm'),
    },
    {
        "name": "Georgia",
        "isoCode": "GE",
        "dialCode": "995",
        "flag": displayFlag('ge'),
    },
    {
        "name": "Germany",
        "isoCode": "DE",
        "dialCode": "49",
        "flag": displayFlag('de'),
    },
    {
        "name": "Ghana",
        "isoCode": "GH",
        "dialCode": "233",
        "flag": displayFlag('gh'),
    },
    {
        "name": "Greece",
        "isoCode": "GR",
        "dialCode": "30",
        "flag": displayFlag('gr'),
    },
    {
        "name": "Grenada",
        "isoCode": "GD",
        "dialCode": "1473",
        "flag": displayFlag('gd'),
    },
    {
        "name": "Guatemala",
        "isoCode": "GT",
        "dialCode": "502",
        "flag": displayFlag('gt'),
    },
    {
        "name": "Guinea",
        "isoCode": "GN",
        "dialCode": "224",
        "flag": displayFlag('gn'),
    },
    {
        "name": "Guinea-Bissau",
        "isoCode": "GW",
        "dialCode": "245",
        "flag": displayFlag('gw'),
    },
    {
        "name": "Guyana",
        "isoCode": "GY",
        "dialCode": "592",
        "flag": displayFlag('gy'),
    },
    {
        "name": "Haiti",
        "isoCode": "HT",
        "dialCode": "509",
        "flag": displayFlag('ht'),
    },
    {
        "name": "Honduras",
        "isoCode": "HN",
        "dialCode": "504",
        "flag": displayFlag('hn'),
    },
    {
        "name": "Hungary",
        "isoCode": "HU",
        "dialCode": "36",
        "flag": displayFlag('hu'),
    },
    {
        "name": "Iceland",
        "isoCode": "IS",
        "dialCode": "354",
        "flag": displayFlag('is'),
    },
    {
        "name": "India",
        "isoCode": "IN",
        "dialCode": "91",
        "flag": displayFlag('in'),
    },
    {
        "name": "Indonesia",
        "isoCode": "ID",
        "dialCode": "62",
        "flag": displayFlag('id'),
    },
    {
        "name": "Iran",
        "isoCode": "IR",
        "dialCode": "98",
        "flag": displayFlag('ir'),
    },
    {
        "name": "Iraq",
        "isoCode": "IQ",
        "dialCode": "964",
        "flag": displayFlag('iq'),
    },
    {
        "name": "Ireland",
        "isoCode": "IE",
        "dialCode": "353",
        "flag": displayFlag('ie'),
    },
    {
        "name": "Israel",
        "isoCode": "IL",
        "dialCode": "972",
        "flag": displayFlag('il'),
    },
    {
        "name": "Italy",
        "isoCode": "IT",
        "dialCode": "39",
        "flag": displayFlag('it'),
    },
    {
        "name": "Jamaica",
        "isoCode": "JM",
        "dialCode": "1876",
    },
    {
        "name": "Japan",
        "isoCode": "JP",
        "dialCode": "81",
    },
    {
        "name": "Jordan",
        "isoCode": "JO",
        "dialCode": "962"
    },
    {
        "name": "Kazakhstan",
        "isoCode": "KZ",
        "dialCode": "7"
    },
    {
        "name": "Kenya",
        "isoCode": "KE",
        "dialCode": "254"
    },
    {
        "name": "Kiribati",
        "isoCode": "KI",
        "dialCode": "686"
    },
    {
        "name": "Kuwait",
        "isoCode": "KW",
        "dialCode": "965"
    },
    {
        "name": "Kyrgyzstan",
        "isoCode": "KG",
        "dialCode": "996"
    },
    {
        "name": "Laos",
        "isoCode": "LA",
        "dialCode": "856"
    },
    {
        "name": "Latvia",
        "isoCode": "LV",
        "dialCode": "371"
    },
    {
        "name": "Lebanon",
        "isoCode": "LB",
        "dialCode": "961"
    },
    {
        "name": "Lesotho",
        "isoCode": "LS",
        "dialCode": "266"
    },
    {
        "name": "Liberia",
        "isoCode": "LR",
        "dialCode": "231"
    },
    {
        "name": "Libya",
        "isoCode": "LY",
        "dialCode": "218"
    },
    {
        "name": "Liechtenstein",
        "isoCode": "LI",
        "dialCode": "423"
    },
    {
        "name": "Lithuania",
        "isoCode": "LT",
        "dialCode": "370"
    },
    {
        "name": "Luxembourg",
        "isoCode": "LU",
        "dialCode": "352"
    },
    {
        "name": "Madagascar",
        "isoCode": "MG",
        "dialCode": "261"
    },
    {
        "name": "Malawi",
        "isoCode": "MW",
        "dialCode": "265"
    },
    {
        "name": "Malaysia",
        "isoCode": "MY",
        "dialCode": "60"
    },
    {
        "name": "Maldives",
        "isoCode": "MV",
        "dialCode": "960"
    },
    {
        "name": "Mali",
        "isoCode": "ML",
        "dialCode": "223"
    },
    {
        "name": "Malta",
        "isoCode": "MT",
        "dialCode": "356"
    },
    {
        "name": "Marshall Islands",
        "isoCode": "MH",
        "dialCode": "692"
    },
    {
        "name": "Mauritania",
        "isoCode": "MR",
        "dialCode": "222"
    },
    {
        "name": "Mauritius",
        "isoCode": "MU",
        "dialCode": "230"
    },
    {
        "name": "Mexico",
        "isoCode": "MX",
        "dialCode": "52"
    },
    {
        "name": "Micronesia",
        "isoCode": "FM",
        "dialCode": "691"
    },
    {
        "name": "Moldova",
        "isoCode": "MD",
        "dialCode": "373"
    },
    {
        "name": "Monaco",
        "isoCode": "MC",
        "dialCode": "377"
    },
    {
        "name": "Mongolia",
        "isoCode": "MN",
        "dialCode": "976"
    },
    {
        "name": "Montenegro",
        "isoCode": "ME",
        "dialCode": "382"
    },
    {
        "name": "Morocco",
        "isoCode": "MA",
        "dialCode": "212"
    },
    {
        "name": "Mozambique",
        "isoCode": "MZ",
        "dialCode": "258"
    },
    {
        "name": "Myanmar",
        "isoCode": "MM",
        "dialCode": "95"
    },
    {
        "name": "Namibia",
        "isoCode": "NA",
        "dialCode": "264"
    },
    {
        "name": "Nauru",
        "isoCode": "NR",
        "dialCode": "674"
    },
    {
        "name": "Nepal",
        "isoCode": "NP",
        "dialCode": "977",
        "flag": displayFlag('np'),
    },
    {
        "name": "Netherlands",
        "isoCode": "NL",
        "dialCode": "31"
    },
    {
        "name": "New Zealand",
        "isoCode": "NZ",
        "dialCode": "64"
    },
    {
        "name": "Nicaragua",
        "isoCode": "NI",
        "dialCode": "505"
    },
    {
        "name": "Niger",
        "isoCode": "NE",
        "dialCode": "227"
    },
    {
        "name": "Nigeria",
        "isoCode": "NG",
        "dialCode": "234"
    },
    {
        "name": "North Korea",
        "isoCode": "KP",
        "dialCode": "850"
    },
    {
        "name": "North Macedonia",
        "isoCode": "MK",
        "dialCode": "389"
    },
    {
        "name": "Norway",
        "isoCode": "NO",
        "dialCode": "47"
    },
    {
        "name": "Oman",
        "isoCode": "OM",
        "dialCode": "968"
    },
    {
        "name": "Pakistan",
        "isoCode": "PK",
        "dialCode": "92"
    },
    {
        "name": "Palau",
        "isoCode": "PW",
        "dialCode": "680"
    },
    {
        "name": "Panama",
        "isoCode": "PA",
        "dialCode": "507"
    },
    {
        "name": "Papua New Guinea",
        "isoCode": "PG",
        "dialCode": "675"
    },
    {
        "name": "Paraguay",
        "isoCode": "PY",
        "dialCode": "595"
    },
    {
        "name": "Peru",
        "isoCode": "PE",
        "dialCode": "51"
    },
    {
        "name": "Philippines",
        "isoCode": "PH",
        "dialCode": "63"
    },
    {
        "name": "Poland",
        "isoCode": "PL",
        "dialCode": "48"
    },
    {
        "name": "Portugal",
        "isoCode": "PT",
        "dialCode": "351"
    },
    {
        "name": "Qatar",
        "isoCode": "QA",
        "dialCode": "974"
    },
    {
        "name": "Romania",
        "isoCode": "RO",
        "dialCode": "40"
    },
    {
        "name": "Russia",
        "isoCode": "RU",
        "dialCode": "7"
    },
    {
        "name": "Rwanda",
        "isoCode": "RW",
        "dialCode": "250"
    },
    {
        "name": "Saint Kitts and Nevis",
        "isoCode": "KN",
        "dialCode": "1869"
    },
    {
        "name": "Saint Lucia",
        "isoCode": "LC",
        "dialCode": "1758"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "isoCode": "VC",
        "dialCode": "1784"
    },
    {
        "name": "Samoa",
        "isoCode": "WS",
        "dialCode": "685"
    },
    {
        "name": "San Marino",
        "isoCode": "SM",
        "dialCode": "378"
    },
    {
        "name": "Sao Tome and Principe",
        "isoCode": "ST",
        "dialCode": "239"
    },
    {
        "name": "Saudi Arabia",
        "isoCode": "SA",
        "dialCode": "966"
    },
    {
        "name": "Senegal",
        "isoCode": "SN",
        "dialCode": "221"
    },
    {
        "name": "Serbia",
        "isoCode": "RS",
        "dialCode": "381"
    },
    {
        "name": "Seychelles",
        "isoCode": "SC",
        "dialCode": "248"
    },
    {
        "name": "Sierra Leone",
        "isoCode": "SL",
        "dialCode": "232"
    },
    {
        "name": "Singapore",
        "isoCode": "SG",
        "dialCode": "65"
    },
    {
        "name": "Slovakia",
        "isoCode": "SK",
        "dialCode": "421"
    },
    {
        "name": "Slovenia",
        "isoCode": "SI",
        "dialCode": "386"
    },
    {
        "name": "Solomon Islands",
        "isoCode": "SB",
        "dialCode": "677"
    },
    {
        "name": "Somalia",
        "isoCode": "SO",
        "dialCode": "252"
    },
    {
        "name": "South Africa",
        "isoCode": "ZA",
        "dialCode": "27"
    },
    {
        "name": "South Korea",
        "isoCode": "KR",
        "dialCode": "82"
    },
    {
        "name": "South Sudan",
        "isoCode": "SS",
        "dialCode": "211"
    },
    {
        "name": "Spain",
        "isoCode": "ES",
        "dialCode": "34"
    },
    {
        "name": "Sri Lanka",
        "isoCode": "LK",
        "dialCode": "94"
    },
    {
        "name": "Sudan",
        "isoCode": "SD",
        "dialCode": "249"
    },
    {
        "name": "Suriname",
        "isoCode": "SR",
        "dialCode": "597"
    },
    {
        "name": "Sweden",
        "isoCode": "SE",
        "dialCode": "46"
    },
    {
        "name": "Switzerland",
        "isoCode": "CH",
        "dialCode": "41"
    },
    {
        "name": "Syria",
        "isoCode": "SY",
        "dialCode": "963"
    },
    {
        "name": "Taiwan",
        "isoCode": "TW",
        "dialCode": "886"
    },
    {
        "name": "Tajikistan",
        "isoCode": "TJ",
        "dialCode": "992"
    },
    {
        "name": "Tanzania",
        "isoCode": "TZ",
        "dialCode": "255"
    },
    {
        "name": "Thailand",
        "isoCode": "TH",
        "dialCode": "66"
    },
    {
        "name": "Timor Leste",
        "isoCode": "TL",
        "dialCode": "670"
    },
    {
        "name": "Togo",
        "isoCode": "TG",
        "dialCode": "228"
    },
    {
        "name": "Tonga",
        "isoCode": "TO",
        "dialCode": "676"
    },
    {
        "name": "Trinidad and Tobago",
        "isoCode": "TT",
        "dialCode": "1868"
    },
    {
        "name": "Tunisia",
        "isoCode": "TN",
        "dialCode": "216"
    },
    {
        "name": "Turkey",
        "isoCode": "TR",
        "dialCode": "90"
    },
    {
        "name": "Turkmenistan",
        "isoCode": "TM",
        "dialCode": "993"
    },
    {
        "name": "Tuvalu",
        "isoCode": "TV",
        "dialCode": "688"
    },
    {
        "name": "Uganda",
        "isoCode": "UG",
        "dialCode": "256"
    },
    {
        "name": "Ukraine",
        "isoCode": "UA",
        "dialCode": "380"
    },
    {
        "name": "United Arab Emirates",
        "isoCode": "AE",
        "dialCode": "971"
    },
    {
        "name": "United Kingdom",
        "isoCode": "GB",
        "dialCode": "44"
    },
    {
        "name": "United States",
        "isoCode": "US",
        "dialCode": "1"
    },
    {
        "name": "Uruguay",
        "isoCode": "UY",
        "dialCode": "598"
    },
    {
        "name": "Uzbekistan",
        "isoCode": "UZ",
        "dialCode": "998"
    },
    {
        "name": "Vanuatu",
        "isoCode": "VU",
        "dialCode": "678"
    },
    {
        "name": "Vatican City",
        "isoCode": "VA",
        "dialCode": "39"
    },
    {
        "name": "Venezuela",
        "isoCode": "VE",
        "dialCode": "58"
    },
    {
        "name": "Vietnam",
        "isoCode": "VN",
        "dialCode": "84"
    },
    {
        "name": "Yemen",
        "isoCode": "YE",
        "dialCode": "967"
    },
    {
        "name": "Zambia",
        "isoCode": "ZM",
        "dialCode": "260"
    },
    {
        "name": "Zimbabwe",
        "isoCode": "ZW",
        "dialCode": "263"
    }
]