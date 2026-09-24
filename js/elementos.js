const elementosLista = [
    { numero: 1, simbolo: 'H', nome: 'Hidrogênio', categoria: 'nonmetal', xpos: 1, ypos: 1, massa: 1.008, estado: 'gas' },
    { numero: 2, simbolo: 'He', nome: 'Hélio', categoria: 'noble', xpos: 18, ypos: 1, massa: 4.002, estado: 'gas' },
    { numero: 3, simbolo: 'Li', nome: 'Lítio', categoria: 'metal', xpos: 1, ypos: 2, massa: 6.941, estado: 'solid' },
    { numero: 4, simbolo: 'Be', nome: 'Berílio', categoria: 'metal', xpos: 2, ypos: 2, massa: 9.012, estado: 'solid' },
    { numero: 5, simbolo: 'B', nome: 'Boro', categoria: 'metalloid', xpos: 13, ypos: 2, massa: 10.81, estado: 'solid' },
    { numero: 6, simbolo: 'C', nome: 'Carbono', categoria: 'nonmetal', xpos: 14, ypos: 2, massa: 12.01, estado: 'solid' },
    { numero: 7, simbolo: 'N', nome: 'Nitrogênio', categoria: 'nonmetal', xpos: 15, ypos: 2, massa: 14.01, estado: 'gas' },
    { numero: 8, simbolo: 'O', nome: 'Oxigênio', categoria: 'nonmetal', xpos: 16, ypos: 2, massa: 16.00, estado: 'gas' },
    { numero: 9, simbolo: 'F', nome: 'Flúor', categoria: 'nonmetal', xpos: 17, ypos: 2, massa: 19.00, estado: 'gas' },
    { numero: 10, simbolo: 'Ne', nome: 'Neônio', categoria: 'noble', xpos: 18, ypos: 2, massa: 20.18, estado: 'gas' },
    { numero: 11, simbolo: 'Na', nome: 'Sódio', categoria: 'metal', xpos: 1, ypos: 3, massa: 22.99, estado: 'solid' },
    { numero: 12, simbolo: 'Mg', nome: 'Magnésio', categoria: 'metal', xpos: 2, ypos: 3, massa: 24.31, estado: 'solid' },
    { numero: 13, simbolo: 'Al', nome: 'Alumínio', categoria: 'metal', xpos: 13, ypos: 3, massa: 26.98, estado: 'solid' },
    { numero: 14, simbolo: 'Si', nome: 'Silício', categoria: 'metalloid', xpos: 14, ypos: 3, massa: 28.09, estado: 'solid' },
    { numero: 15, simbolo: 'P', nome: 'Fósforo', categoria: 'nonmetal', xpos: 15, ypos: 3, massa: 30.97, estado: 'solid' },
{ numero: 16, simbolo: 'S', nome: 'Enxofre', categoria: 'nonmetal', xpos: 16, ypos: 3, massa: 32.06, estado: 'solid' },
    { numero: 17, simbolo: 'Cl', nome: 'Cloro', categoria: 'nonmetal', xpos: 17, ypos: 3, massa: 35.45, estado: 'gas' },
    { numero: 18, simbolo: 'Ar', nome: 'Argônio', categoria: 'noble', xpos: 18, ypos: 3, massa: 39.94, estado: 'gas' },
    { numero: 19, simbolo: 'K', nome: 'Potássio', categoria: 'metal', xpos: 1, ypos: 4, massa: 39.10, estado: 'solid' },
    { numero: 20, simbolo: 'Ca', nome: 'Cálcio', categoria: 'metal', xpos: 2, ypos: 4, massa: 40.08, estado: 'solid' },
    { numero: 21, simbolo: 'Sc', nome: 'Escândio', categoria: 'metal', xpos: 3, ypos: 4, massa: 44.95, estado: 'solid' },
    { numero: 22, simbolo: 'Ti', nome: 'Titânio', categoria: 'metal', xpos: 4, ypos: 4, massa: 47.86, estado: 'solid' },
    { numero: 23, simbolo: 'V', nome: 'Vanádio', categoria: 'metal', xpos: 5, ypos: 4, massa: 50.94, estado: 'solid' },
    { numero: 24, simbolo: 'Cr', nome: 'Cromo', categoria: 'metal', xpos: 6, ypos: 4, massa: 51.99, estado: 'solid' },
    { numero: 25, simbolo: 'Mn', nome: 'Manganês', categoria: 'metal', xpos: 7, ypos: 4, massa: 54.93, estado: 'solid' },
    { numero: 26, simbolo: 'Fe', nome: 'Ferro', categoria: 'metal', xpos: 8, ypos: 4, massa: 55.84, estado: 'solid' },
    { numero: 27, simbolo: 'Co', nome: 'Cobalto', categoria: 'metal', xpos: 9, ypos: 4, massa: 58.93, estado: 'solid' },
    { numero: 28, simbolo: 'Ni', nome: 'Níquel', categoria: 'metal', xpos: 10, ypos: 4, massa: 58.69, estado: 'solid' },
    { numero: 29, simbolo: 'Cu', nome: 'Cobre', categoria: 'metal', xpos: 11, ypos: 4, massa: 63.54, estado: 'solid' },
    { numero: 30, simbolo: 'Zn', nome: 'Zinco', categoria: 'metal', xpos: 12, ypos: 4, massa: 65.38, estado: 'solid' },
{ numero: 31, simbolo: 'Ga', nome: 'Gálio', categoria: 'metal', xpos: 13, ypos: 4, massa: 69.72, estado: 'solid' },
    { numero: 32, simbolo: 'Ge', nome: 'Germânio', categoria: 'metalloid', xpos: 14, ypos: 4, massa: 72.63, estado: 'solid' },
    { numero: 33, simbolo: 'As', nome: 'Arsênio', categoria: 'metalloid', xpos: 15, ypos: 4, massa: 74.92, estado: 'solid' },
    { numero: 34, simbolo: 'Se', nome: 'Selênio', categoria: 'nonmetal', xpos: 16, ypos: 4, massa: 78.97, estado: 'solid' },
    { numero: 35, simbolo: 'Br', nome: 'Bromo', categoria: 'nonmetal', xpos: 17, ypos: 4, massa: 79.90, estado: 'liquid' },
    { numero: 36, simbolo: 'Kr', nome: 'Criptônio', categoria: 'noble', xpos: 18, ypos: 4, massa: 83.80, estado: 'gas' },
    { numero: 37, simbolo: 'Rb', nome: 'Rubídio', categoria: 'metal', xpos: 1, ypos: 5, massa: 85.47, estado: 'solid' },
    { numero: 38, simbolo: 'Sr', nome: 'Estrôncio', categoria: 'metal', xpos: 2, ypos: 5, massa: 87.62, estado: 'solid' },
    { numero: 39, simbolo: 'Y', nome: 'Ítrio', categoria: 'metal', xpos: 3, ypos: 5, massa: 88.91, estado: 'solid' },
    { numero: 40, simbolo: 'Zr', nome: 'Zircônio', categoria: 'metal', xpos: 4, ypos: 5, massa: 91.22, estado: 'solid' },
    { numero: 41, simbolo: 'Nb', nome: 'Nióbio', categoria: 'metal', xpos: 5, ypos: 5, massa: 92.91, estado: 'solid' },
    { numero: 42, simbolo: 'Mo', nome: 'Molibdênio', categoria: 'metal', xpos: 6, ypos: 5, massa: 95.95, estado: 'solid' },
    { numero: 43, simbolo: 'Tc', nome: 'Tecnécio', categoria: 'metal', xpos: 7, ypos: 5, massa: 98, estado: 'solid' },
    { numero: 44, simbolo: 'Ru', nome: 'Rutênio', categoria: 'metal', xpos: 8, ypos: 5, massa: 101.07, estado: 'solid' },
    { numero: 45, simbolo: 'Rh', nome: 'Ródio', categoria: 'metal', xpos: 9, ypos: 5, massa: 102.91, estado: 'solid' },
    { numero: 46, simbolo: 'Pd', nome: 'Paládio', categoria: 'metal', xpos: 10, ypos: 5, massa: 106.42, estado: 'solid' },
    { numero: 47, simbolo: 'Ag', nome: 'Prata', categoria: 'metal', xpos: 11, ypos: 5, massa: 107.87, estado: 'solid' },
    { numero: 48, simbolo: 'Cd', nome: 'Cádmio', categoria: 'metal', xpos: 12, ypos: 5, massa: 112.41, estado: 'solid' },
    { numero: 49, simbolo: 'In', nome: 'Índio', categoria: 'metal', xpos: 13, ypos: 5, massa: 114.82, estado: 'solid' },
    { numero: 50, simbolo: 'Sn', nome: 'Estanho', categoria: 'metal', xpos: 14, ypos: 5, massa: 118.71, estado: 'solid' },
    { numero: 51, simbolo: 'Sb', nome: 'Antimônio', categoria: 'metalloid', xpos: 15, ypos: 5, massa: 121.76, estado: 'solid' },
    { numero: 52, simbolo: 'Te', nome: 'Telúrio', categoria: 'metalloid', xpos: 16, ypos: 5, massa: 127.60, estado: 'solid' },
    { numero: 53, simbolo: 'I', nome: 'Iodo', categoria: 'nonmetal', xpos: 17, ypos: 5, massa: 126.90, estado: 'solid' },
    { numero: 54, simbolo: 'Xe', nome: 'Xenônio', categoria: 'noble', xpos: 18, ypos: 5, massa: 131.29, estado: 'gas' },
    { numero: 55, simbolo: 'Cs', nome: 'Césio', categoria: 'metal', xpos: 1, ypos: 6, massa: 132.91, estado: 'solid' },
    { numero: 56, simbolo: 'Ba', nome: 'Bário', categoria: 'metal', xpos: 2, ypos: 6, massa: 137.33, estado: 'solid' },
    { numero: 57, simbolo: 'La', nome: 'Lantânio', categoria: 'metal', xpos: 3, ypos: 9, massa: 138.91, estado: 'solid' }, // Início dos Lantânidos (fora da grade principal)
    { numero: 58, simbolo: 'Ce', nome: 'Cério', categoria: 'metal', xpos: 4, ypos: 9, massa: 140.12, estado: 'solid' },
    { numero: 59, simbolo: 'Pr', nome: 'Praseodímio', categoria: 'metal', xpos: 5, ypos: 9, massa: 140.91, estado: 'solid' },
    { numero: 60, simbolo: 'Nd', nome: 'Neodímio', categoria: 'metal', xpos: 6, ypos: 9, massa: 144.24, estado: 'solid' },
    { numero: 61, simbolo: 'Pm', nome: 'Promécio', categoria: 'metal', xpos: 7, ypos: 9, massa: 145, estado: 'solid' },
    { numero: 62, simbolo: 'Sm', nome: 'Samário', categoria: 'metal', xpos: 8, ypos: 9, massa: 150.36, estado: 'solid' },
    { numero: 63, simbolo: 'Eu', nome: 'Európio', categoria: 'metal', xpos: 9, ypos: 9, massa: 151.96, estado: 'solid' },
    { numero: 64, simbolo: 'Gd', nome: 'Gadolínio', categoria: 'metal', xpos: 10, ypos: 9, massa: 157.25, estado: 'solid' },
    { numero: 65, simbolo: 'Tb', nome: 'Térbio', categoria: 'metal', xpos: 11, ypos: 9, massa: 158.93, estado: 'solid' },
    { numero: 66, simbolo: 'Dy', nome: 'Disprósio', categoria: 'metal', xpos: 12, ypos: 9, massa: 162.50, estado: 'solid' },
    { numero: 67, simbolo: 'Ho', nome: 'Hólmio', categoria: 'metal', xpos: 13, ypos: 9, massa: 164.93, estado: 'solid' },
    { numero: 68, simbolo: 'Er', nome: 'Érbio', categoria: 'metal', xpos: 14, ypos: 9, massa: 167.26, estado: 'solid' },
    { numero: 69, simbolo: 'Tm', nome: 'Túlio', categoria: 'metal', xpos: 15, ypos: 9, massa: 168.93, estado: 'solid' },
    { numero: 70, simbolo: 'Yb', nome: 'Itérbio', categoria: 'metal', xpos: 16, ypos: 9, massa: 173.05, estado: 'solid' },
{ numero: 71, simbolo: 'Lu', nome: 'Lutécio', categoria: 'metal', xpos: 17, ypos: 9, massa: 174.96, estado: 'solid' },
    { numero: 72, simbolo: 'Hf', nome: 'Háfnio', categoria: 'metal', xpos: 4, ypos: 6, massa: 178.49, estado: 'solid' },
    { numero: 73, simbolo: 'Ta', nome: 'Tântalo', categoria: 'metal', xpos: 5, ypos: 6, massa: 180.94, estado: 'solid' },
    { numero: 74, simbolo: 'W', nome: 'Tungstênio', categoria: 'metal', xpos: 6, ypos: 6, massa: 183.84, estado: 'solid' },
    { numero: 75, simbolo: 'Re', nome: 'Rênio', categoria: 'metal', xpos: 7, ypos: 6, massa: 186.20, estado: 'solid' },
    { numero: 76, simbolo: 'Os', nome: 'Ósmio', categoria: 'metal', xpos: 8, ypos: 6, massa: 190.23, estado: 'solid' },
    { numero: 77, simbolo: 'Ir', nome: 'Irídio', categoria: 'metal', xpos: 9, ypos: 6, massa: 192.21, estado: 'solid' },
    { numero: 78, simbolo: 'Pt', nome: 'Platina', categoria: 'metal', xpos: 10, ypos: 6, massa: 195.08, estado: 'solid' },
    { numero: 79, simbolo: 'Au', nome: 'Ouro', categoria: 'metal', xpos: 11, ypos: 6, massa: 196.96, estado: 'solid' },
    { numero: 80, simbolo: 'Hg', nome: 'Mercúrio', categoria: 'metal', xpos: 12, ypos: 6, massa: 200.59, estado: 'liquid' },
    { numero: 81, simbolo: 'Tl', nome: 'Tálio', categoria: 'metal', xpos: 13, ypos: 6, massa: 204.38, estado: 'solid' },
    { numero: 82, simbolo: 'Pb', nome: 'Chumbo', categoria: 'metal', xpos: 14, ypos: 6, massa: 207.2, estado: 'solid' },
    { numero: 83, simbolo: 'Bi', nome: 'Bismuto', categoria: 'metal', xpos: 15, ypos: 6, massa: 208.98, estado: 'solid' },
    { numero: 84, simbolo: 'Po', nome: 'Polônio', categoria: 'metalloid', xpos: 16, ypos: 6, massa: 209, estado: 'solid' },
    { numero: 85, simbolo: 'At', nome: 'Astato', categoria: 'metalloid', xpos: 17, ypos: 6, massa: 210, estado: 'solid' },
    { numero: 86, simbolo: 'Rn', nome: 'Radônio', categoria: 'noble', xpos: 18, ypos: 6, massa: 222, estado: 'gas' },
    { numero: 87, simbolo: 'Fr', nome: 'Frâncio', categoria: 'metal', xpos: 1, ypos: 7, massa: 223, estado: 'solid' },
    { numero: 88, simbolo: 'Ra', nome: 'Rádio', categoria: 'metal', xpos: 2, ypos: 7, massa: 226, estado: 'solid' },
    { numero: 89, simbolo: 'Ac', nome: 'Actínio', categoria: 'metal', xpos: 3, ypos: 10, massa: 227, estado: 'solid' }, // Início dos Actinídeos
    { numero: 90, simbolo: 'Th', nome: 'Tório', categoria: 'metal', xpos: 4, ypos: 10, massa: 232.03, estado: 'solid' },
    { numero: 91, simbolo: 'Pa', nome: 'Protactínio', categoria: 'metal', xpos: 5, ypos: 10, massa: 231.03, estado: 'solid' },
    { numero: 92, simbolo: 'U', nome: 'Urânio', categoria: 'metal', xpos: 6, ypos: 10, massa: 238.02, estado: 'solid' },
    { numero: 93, simbolo: 'Np', nome: 'Netúnio', categoria: 'metal', xpos: 7, ypos: 10, massa: 237, estado: 'solid' },
    { numero: 94, simbolo: 'Pu', nome: 'Plutônio', categoria: 'metal', xpos: 8, ypos: 10, massa: 244, estado: 'solid' },
    { numero: 95, simbolo: 'Am', nome: 'Amerício', categoria: 'metal', xpos: 9, ypos: 10, massa: 243, estado: 'solid' },
    { numero: 96, simbolo: 'Cm', nome: 'Cúrio', categoria: 'metal', xpos: 10, ypos: 10, massa: 247, estado: 'solid' },
    { numero: 97, simbolo: 'Bk', nome: 'Berquélio', categoria: 'metal', xpos: 11, ypos: 10, massa: 247, estado: 'solid' },
    { numero: 98, simbolo: 'Cf', nome: 'Califórnio', categoria: 'metal', xpos: 12, ypos: 10, massa: 251, estado: 'solid' },
    { numero: 99, simbolo: 'Es', nome: 'Einstênio', categoria: 'metal', xpos: 13, ypos: 10, massa: 252, estado: 'solid' },
    { numero: 100, simbolo: 'Fm', nome: 'Férmio', categoria: 'metal', xpos: 14, ypos: 10, massa: 257, estado: 'solid' },
    { numero: 101, simbolo: 'Md', nome: 'Mendelévio', categoria: 'metal', xpos: 15, ypos: 10, massa: 258, estado: 'solid' },
    { numero: 102, simbolo: 'No', nome: 'Nobélio', categoria: 'metal', xpos: 16, ypos: 10, massa: 259, estado: 'solid' },
    { numero: 103, simbolo: 'Lr', nome: 'Laurêncio', categoria: 'metal', xpos: 17, ypos: 10, massa: 262, estado: 'solid' },
    { numero: 104, simbolo: 'Rf', nome: 'Rutherfórdio', categoria: 'metal', xpos: 4, ypos: 7, massa: 267, estado: 'solid' },
    { numero: 105, simbolo: 'Db', nome: 'Dúbnio', categoria: 'metal', xpos: 5, ypos: 7, massa: 268, estado: 'solid' },
    { numero: 106, simbolo: 'Sg', nome: 'Seabórgio', categoria: 'metal', xpos: 6, ypos: 7, massa: 271, estado: 'solid' },
    { numero: 107, simbolo: 'Bh', nome: 'Bório', categoria: 'metal', xpos: 7, ypos: 7, massa: 270, estado: 'solid' },
    { numero: 108, simbolo: 'Hs', nome: 'Hássio', categoria: 'metal', xpos: 8, ypos: 7, massa: 277, estado: 'solid' },
    { numero: 109, simbolo: 'Mt', nome: 'Meitnério', categoria: 'metal', xpos: 9, ypos: 7, massa: 278, estado: 'solid' },
    { numero: 110, simbolo: 'Ds', nome: 'Darmstádio', categoria: 'metal', xpos: 10, ypos: 7, massa: 281, estado: 'solid' },
    { numero: 111, simbolo: 'Rg', nome: 'Roentgênio', categoria: 'metal', xpos: 11, ypos: 7, massa: 280, estado: 'solid' },
    { numero: 112, simbolo: 'Cn', nome: 'Copernício', categoria: 'metal', xpos: 12, ypos: 7, massa: 285, estado: 'solid' },
    { numero: 113, simbolo: 'Nh', nome: 'Nihônio', categoria: 'metal', xpos: 13, ypos: 7, massa: 284, estado: 'solid' },
    { numero: 114, simbolo: 'Fl', nome: 'Fleróvio', categoria: 'metal', xpos: 14, ypos: 7, massa: 289, estado: 'solid' },
    { numero: 115, simbolo: 'Mc', nome: 'Moscóvio', categoria: 'metal', xpos: 15, ypos: 7, massa: 288, estado: 'solid' },
    { numero: 116, simbolo: 'Lv', nome: 'Livermório', categoria: 'metal', xpos: 16, ypos: 7, massa: 293, estado: 'solid' },
    { numero: 117, simbolo: 'Ts', nome: 'Tennesso', categoria: 'metal', xpos: 17, ypos: 7, massa: 294, estado: 'solid' },
    { numero: 118, simbolo: 'Og', nome: 'Oganessônio', categoria: 'noble', xpos: 18, ypos: 7, massa: 294, estado: 'gas' }
];

/*
 * ============================================================
 * DADOS ELETRÔNICOS
 * ============================================================
 *
 * A distribuição por CAMADAS é calculada a partir dos
 * subníveis da configuração eletrônica, usando o número
 * principal do subnível:
 *
 *   3d⁵ -> camada n=3
 *   4s² -> camada n=4
 *
 * Portanto Mn = 2, 8, 13, 2.
 *
 * Fontes dos dados:
 * - NIST: configurações eletrônicas de estado fundamental
 *   para os elementos e casos especiais.
 * - PubChem: tabela periódica com configurações eletrônicas
 *   para os 118 elementos.
 * - Para Lr (103), usamos a configuração atual do NIST ASD:
 *   [Rn] 5f¹⁴ 7s² 7p¹.
 *
 * Observação: para elementos superpesados, algumas propriedades
 * eletrônicas são previstas/esperadas, não medidas diretamente.
 * ============================================================
 */

const ORDEM_SUBNIVEIS = [
    { s: "1s", m: 2 },
    { s: "2s", m: 2 },
    { s: "2p", m: 6 },
    { s: "3s", m: 2 },
    { s: "3p", m: 6 },
    { s: "4s", m: 2 },
    { s: "3d", m: 10 },
    { s: "4p", m: 6 },
    { s: "5s", m: 2 },
    { s: "4d", m: 10 },
    { s: "5p", m: 6 },
    { s: "6s", m: 2 },
    { s: "4f", m: 14 },
    { s: "5d", m: 10 },
    { s: "6p", m: 6 },
    { s: "7s", m: 2 },
    { s: "5f", m: 14 },
    { s: "6d", m: 10 },
    { s: "7p", m: 6 }
];

const GAS_NOBRES = {
    He: { "1s": 2 },
    Ne: { "1s": 2, "2s": 2, "2p": 6 },
    Ar: { "1s": 2, "2s": 2, "2p": 6, "3s": 2, "3p": 6 },
    Kr: { "1s": 2, "2s": 2, "2p": 6, "3s": 2, "3p": 6, "4s": 2, "4p": 6, "3d": 10 },
    Xe: { "1s": 2, "2s": 2, "2p": 6, "3s": 2, "3p": 6, "4s": 2, "4p": 6, "3d": 10, "5s": 2, "5p": 6, "4d": 10 },
    Rn: { "1s": 2, "2s": 2, "2p": 6, "3s": 2, "3p": 6, "4s": 2, "4p": 6, "3d": 10, "5s": 2, "5p": 6, "4d": 10, "6s": 2, "6p": 6, "4f": 14, "5d": 10 },
};

const CONFIGURACOES_ESPECIAIS = {
    // Período 4
    24: "[Ar] 3d5 4s1",   // Cr
    29: "[Ar] 3d10 4s1",  // Cu

    // Período 5
    41: "[Kr] 4d4 5s1",   // Nb
    42: "[Kr] 4d5 5s1",   // Mo
    44: "[Kr] 4d7 5s1",   // Ru
    45: "[Kr] 4d8 5s1",   // Rh
    46: "[Kr] 4d10",      // Pd

    // Período 6
    57: "[Xe] 5d1 6s2",          // La
    58: "[Xe] 4f1 5d1 6s2",      // Ce
    64: "[Xe] 4f7 5d1 6s2",      // Gd
    71: "[Xe] 4f14 5d1 6s2",     // Lu
    78: "[Xe] 4f14 5d9 6s1",     // Pt
    79: "[Xe] 4f14 5d10 6s1",    // Au

    // Período 7
    89: "[Rn] 6d1 7s2",          // Ac
    90: "[Rn] 6d2 7s2",          // Th
    91: "[Rn] 5f2 6d1 7s2",      // Pa
    92: "[Rn] 5f3 6d1 7s2",      // U
    93: "[Rn] 5f4 6d1 7s2",      // Np
    96: "[Rn] 5f7 6d1 7s2",      // Cm
    103: "[Rn] 5f14 7s2 7p1",    // Lr — NIST ASD
    111: "[Rn] 5f14 6d10 7s1"    // Rg
};

const SIMBOLOS_GAS_NOBRE = {
    2: "He",
    10: "Ne",
    18: "Ar",
    36: "Kr",
    54: "Xe",
    86: "Rn"
};

function criarConfiguracaoAufbau(numeroEletrons) {
    const config = {};
    let restante = numeroEletrons;

    for (const nivel of ORDEM_SUBNIVEIS) {
        if (restante <= 0) break;

        const ocupacao = Math.min(restante, nivel.m);
        config[nivel.s] = ocupacao;
        restante -= ocupacao;
    }

    return config;
}

function clonarConfig(config) {
    return { ...config };
}

function adicionarConfig(destino, origem) {
    for (const [subnivel, eletrons] of Object.entries(origem)) {
        destino[subnivel] = (destino[subnivel] || 0) + eletrons;
    }
}

function obterConfigPorGasNobre(simbolo) {
    const config = GAS_NOBRES[simbolo];
    return config ? clonarConfig(config) : {};
}

function lerConfiguracaoEspecial(texto) {
    const config = {};

    const tokens = texto.match(/\\[[A-Z][a-z]?\\]|\\d+[spdf]\\d+/g) || [];

    for (const token of tokens) {
        if (token.startsWith("[")) {
            const simbolo = token.slice(1, -1);
            adicionarConfig(config, obterConfigPorGasNobre(simbolo));
            continue;
        }

        const match = token.match(/^(\\d+)([spdf])(\\d+)$/);
        if (!match) continue;

        const subnivel = `${match[1]}${match[2]}`;
        config[subnivel] = Number(match[3]);
    }

    return config;
}

function obterConfiguracaoEletronica(numero) {
    if (!Number.isInteger(numero) || numero < 1 || numero > 118) {
        return {};
    }

    if (CONFIGURACOES_ESPECIAIS[numero]) {
        return lerConfiguracaoEspecial(CONFIGURACOES_ESPECIAIS[numero]);
    }

    return criarConfiguracaoAufbau(numero);
}

function obterSubniveis(n) {
    const config = obterConfiguracaoEletronica(n);

    return ORDEM_SUBNIVEIS
        .filter(nivel => config[nivel.s] > 0)
        .map(nivel => `${nivel.s}<sup>${config[nivel.s]}</sup>`)
        .join(" ");
}

function calcularDistribuicaoPadrao(n) {
    const config = obterConfiguracaoEletronica(n);
    const camadas = [0, 0, 0, 0, 0, 0, 0];

    for (const [subnivel, eletrons] of Object.entries(config)) {
        const camada = Number.parseInt(subnivel, 10);

        if (camada >= 1 && camada <= 7) {
            camadas[camada - 1] += eletrons;
        }
    }

    return camadas.filter(qtd => qtd > 0);
}

function obterDistribuicaoPorCamadas(n) {
    return calcularDistribuicaoPadrao(n);
}

function carregarPaginaElemento() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = Number.parseInt(urlParams.get("id"), 10);

    const el = elementosLista.find(item => item.numero === id);

    if (!el) return;

    const tradEstado = {
        gas: "Gasoso",
        solid: "Sólido",
        liquid: "Líquido",
        synthetic: "Sintético"
    };

    const tradCat = {
        nonmetal: "Ametal",
        noble: "Gás Nobre",
        metal: "Metal",
        metalloid: "Semimetal"
    };

    const setText = (idElemento, valor) => {
        const elemento = document.getElementById(idElemento);
        if (elemento) elemento.innerText = valor;
    };

    setText("el-nome", el.nome);
    setText("el-simbolo", el.simbolo);
    setText("el-numero", el.numero);
    setText("el-massa", el.massa);
    setText("el-categoria", tradCat[el.categoria] || el.categoria);
    setText("el-estado", tradEstado[el.estado] || el.estado);

    const letras = ["K", "L", "M", "N", "O", "P", "Q"];
    const distribuicao = obterDistribuicaoPorCamadas(el.numero);

    setText(
        "dist-niveis",
        distribuicao.map((qtd, i) => `${letras[i]}: ${qtd}`).join(" | ")
    );

    const subniveis = document.getElementById("dist-subniveis");
    if (subniveis) {
        subniveis.innerHTML = obterSubniveis(el.numero);
    }

    const A = Math.round(el.massa);
    const Z = el.numero;

    setText("azne-a", A);
    setText("azne-z", Z);
    setText("azne-n", A - Z);
    setText("azne-e", Z);

    desenharAtomo(el);
}

function desenharAtomo(el) {
    const eletrosfera = document.getElementById("eletrosfera");
    const nucleo = document.getElementById("nucleo");

    if (!eletrosfera || !nucleo) return;

    eletrosfera.innerHTML = "";
    nucleo.innerHTML = "";

    const pontoCentral = document.createElement("div");
    pontoCentral.className = "nucleo-ponto-simples";
    nucleo.appendChild(pontoCentral);

    const distribuicao = calcularDistribuicaoPadrao(el.numero);

    distribuicao.forEach((qtd, idx) => {
        const camada = document.createElement("div");

        camada.className =
            `camada-linha camada-girando ${orbitando ? "" : "pausado"}`;

        const velocidade = 4 + idx * 2;
        const raio = 35 + idx * 18;
        const diametro = raio * 2;

        camada.style.setProperty("--velocidade", `${velocidade}s`);
        camada.style.width = `${diametro}px`;
        camada.style.height = `${diametro}px`;
        camada.style.left = `calc(50% - ${raio}px)`;
        camada.style.top = `calc(50% - ${raio}px)`;

        eletrosfera.appendChild(camada);

        for (let j = 0; j < qtd; j++) {
            const eletron = document.createElement("div");
            eletron.className = "eletron-dot";

            const angulo = (j * Math.PI * 2) / qtd;
            const x = Math.cos(angulo) * raio;
            const y = Math.sin(angulo) * raio;

            eletron.style.left = `calc(50% + ${x}px - 3px)`;
            eletron.style.top = `calc(50% + ${y}px - 3px)`;

            camada.appendChild(eletron);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarPaginaElemento();

    const btnOrbitas = document.getElementById("btn-orbitas");

    if (btnOrbitas) {
        btnOrbitas.addEventListener("click", function () {
            orbitando = !orbitando;
            this.innerText = `Orbitar: ${orbitando ? "ON" : "OFF"}`;
            this.classList.toggle("off");

            document.querySelectorAll(".camada-linha").forEach(camada => {
                camada.classList.toggle("pausado", !orbitando);
            });
        });
    }
});
