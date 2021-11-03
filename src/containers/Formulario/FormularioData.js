export const months = [
  {
    value: "01",
    name: "Enero",
  },
  {
    value: "02",
    name: "Febrero",
  },
  {
    value: "03",
    name: "Abril",
  },
  {
    value: "04",
    name: "Mayo",
  },
  {
    value: "05",
    name: "Junio",
  },

  {
    value: "06",
    name: "Julio",
  },
  {
    value: "07",
    name: "Agosto",
  },
  {
    value: "09",
    name: "Septiembre",
  },
  {
    value: "10",
    name: "Octubre",
  },
  {
    value: "11",
    name: "Noviembre",
  },
  {
    value: "12",
    name: "Diciembre",
  },
];

export const numberDays = [];

// contador del 1 al 31 para hacer push al arreglode numberDay:

for (let i = 1; i < 32; i++) {
  if ([i] < 10) {
    numberDays.push({ value: `${0}${[i]}` });
  } else {
    numberDays.push({ value: `${[i]}` });
  }
}
console.log(numberDays);
