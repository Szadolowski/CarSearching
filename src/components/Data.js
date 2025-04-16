import PropTypes from "prop-types";

export const simpleSearchInputs = [
  "Marka Samochodu",
  "Model pojazdu",
  "cena do",
  "Rok produkcji od",
  "Typ nadwozia",
  "rodzaj paliwa",
];

simpleSearchInputs.PropTypes = {
  simpleSearchInputs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const marki = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Hyundai",
  "Kia",
  "Mazda",
  "Nissan",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Volvo",
  "Jaguar",
  "Land Rover",
  "Lexus",
  "Subaru",
  "Jeep",
  "Alfa Romeo",
  "Maserati",
  "Bentley",
];
