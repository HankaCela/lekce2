
const cenaListku = 12;
const pocetNavstevniku = 174;
const pocetPredstaveni = 15;

const prijem = cenaListku * pocetNavstevniku * pocetPredstaveni;

const slevaProStudenty = 0.65 * cenaListku; 
const podilStudentu = 0.4; 
const podilPlaticichPlnouCenu = 1 - podilStudentu; 

const prijemPlnaCena = pocetNavstevniku * podilPlaticichPlnouCenu * cenaListku * pocetPredstaveni;
const prijemSeSlevou = pocetNavstevniku * podilStudentu * slevaProStudenty * pocetPredstaveni;

const celkovyPrijemSeSlevou = prijemPlnaCena + prijemSeSlevou;

document.body.innerHTML += `
    <h1>Výpočet příjmu divadla</h1>
    <p>Měsíční příjem: ${prijem} €</p>
    <p>Měsíční příjem se studentskou slevou: ${celkovyPrijemSeSlevou} €</p>`;


// Hod kostkou
const hodKostkou = Math.floor(Math.random() * 6) + 1;
    
document.body.innerHTML += `<h1>Hod kostkou</h1>
                                <p>Padlo číslo: ${hodKostkou}</p>`;
                                