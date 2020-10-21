//ДНК и РНК это последовательности нуклеотидов.
// Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
// Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
// Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
// G -> C
// C -> G
// T -> A
// A -> U
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую
// цепь РНК (совершает транскрипцию РНК).
// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть
// пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех
// перечисленных выше), то функция должна вернуть null.

const dnaToRna = (dna) => {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna.length === 0) {
            return '';
        } else if (dna[i] === 'G') {
            rna += 'C'
        } else if (dna[i] === 'C') {
            rna += 'G'
        } else if (dna[i] === 'T') {
            rna += 'A'
        } else if (dna[i] === 'A') {
            rna += 'U'
        } else {
            return null
        }
    }
    return rna;
};