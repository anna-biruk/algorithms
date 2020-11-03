//Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран,
// нормализует их имена, сортирует и группирует по стране.
// import normalize from './solution.js';
// const countries = [
//   { name: 'Miami', country: 'usa' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Moscow ', country: ' Russia' },
// ];
// normalize(countries);
// // {
// //   russia: [
// //     'moscow',
// //     'samara',
// //   ],
// //   usa: [
// //     'miami',
// //   ],
// // }

const normalize = (countries) => {
    const sortedCountries = countries.sort((first, second) => {
        if (first.country.trim().toLowerCase() > second.country.trim().toLowerCase()) {
            return 1;
        }
        if (first.country.trim().toLowerCase() < second.country.trim().toLowerCase()) {
            return -1;
        }
        return 0;
    });
    return sortedCountries.reduce((prev, current) => {
        const {name, country} = current;
        const normalizedCountry = country.trim().toLowerCase();
        const normalizedName = name.trim().toLowerCase();

        if (!prev[normalizedCountry]) {
            prev[normalizedCountry] = [normalizedName];
        } else if (!prev[normalizedCountry].includes(normalizedName)) {
            prev[normalizedCountry].push(normalizedName);
        }
        prev[normalizedCountry].sort();
        return prev;
    }, {})
};
