const bodyEl = document.querySelector('body')
bodyEl.style.textAlign = 'center'
const title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'WORLD COUNTRIES LIST'
title.style.letterSpacing = '0.5rem'
title.style.display = 'flex'
title.style.justifyContent = 'center'
bodyEl.appendChild(title)

const subTitle1 = document.createElement('p')
subTitle1.classList.add('subTitle1')
subTitle1.textContent = 'TOTAL NUMBERS OF COUNTRIES: 193'
subTitle1.style.fontSize = '0.63rem'
subTitle1.style.fontWeight = 'bolder'
subTitle1.style.marginTop = '-1rem'
subTitle1.style.display = 'flex'
subTitle1.style.justifyContent = 'center'
bodyEl.appendChild(subTitle1)

const subTitle2 = document.createElement('p')
subTitle2.classList.add('subTitle1')
subTitle2.textContent = '30DaysOfJavascript DOM-Day-2'
subTitle2.style.fontSize = '0.6rem'
subTitle2.style.fontWeight = '1rem'
subTitle2.style.marginTop = '-0.4rem'
subTitle2.style.display = 'flex'
subTitle2.style.justifyContent = 'center'
bodyEl.appendChild(subTitle2)

const subTitle3 = document.createElement('p')
subTitle3.classList.add('subTitle3')
subTitle3.textContent = 'Author: Asabeneh Yetayeh'
subTitle3.style.fontSize = '0.6rem'
subTitle3.style.fontWeight = '1rem'
subTitle3.style.marginTop = '-.4rem'
subTitle3.style.display = 'flex'
subTitle3.style.justifyContent = 'center'
bodyEl.appendChild(subTitle3)
 


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    `Antigua and Barbuda`,
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]


const countriesEl = document.createElement('div.country')
bodyEl.appendChild(countriesEl)
countries.forEach((country) => {
    const singleCountry = document.createElement('p');
    countriesEl.appendChild(singleCountry).textContent = country.toUpperCase();
    singleCountry.style.border = '#F5F5F7 1px solid'
    singleCountry.style.borderRadius = '5px'
    singleCountry.style.height = '6rem'
    singleCountry.style.display = 'grid' 
    singleCountry.style.justifyContent = 'center'
    singleCountry.style.alignItems = 'center'
});


countriesEl.style.display = 'grid'
countriesEl.style.gridTemplateColumns = 'repeat(6, 1fr)';
countriesEl.style.maxWidth = '40rem';
countriesEl.style.margin = 'auto';
countriesEl.style.gridGap = '2px';
countriesEl.style.fontSize = '0.7rem'
countriesEl.style.fontWeight = '600'
``


bodyEl.style.fontFamily = 'Avenir, Segoe ui, Ubuntu, Sans-serif'