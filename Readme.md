# fag-frontend-react-redux

<blockquote>Oppgaver om React og Redux</blockquote>

## Oppgaver

### Oppgave 1

Du skal implementere action creators i kalkulatoren vår. Skallene til funksjonene ligger i _src/calculator/actionCreators_.

#### _addDigitToOperand(digit)_

Denne skal bli kalt når brukeren trykker på et tall på kalkulatoren, og skal føre til at tallet blir konkatenert med eksisterende tall. Action som skal trigges er `DIGIT_TO_OPERAND_ADDED`.

#### _addOperand(operand)_ / _subtractOperand(operand)_ / _multiplyOperand(operand)_ / _divide Operand(operand)_

Denne skal bli kalt når brukeren trykker på en av de respektive operatorene, og skal føre til at kalkulatoren legger til, trekker fra, multipliserer eller dividerer summen med operanden. Operanden skal også resettes til 0. Action som skal trigges er `OPERAND_ADDED`, `OPERAND_SUBTRACTED`, `OPERAND_MULTIPLIED`, `OPERAND_DIVIDED`, avhengig av operasjon.

### Oppgave 2

Du skal implementere funksjonene som dispatcher dine actions til Redux sin store. Disse funksjonene skal implementeres i _src/calculator/containers/CalculatorContainer.js_, i funksjonen `mapDispatchToProps`.

Tips: Parameteret `dispatch` i `mapDispatchToProps` er en funksjon som sender en action til Redux sin store. Kall på din actionCreator og send returverdien som argument til `dispatch`-funksjonen.

### Oppgave 3

Du skal implementere reducer-ene i kalkulatoren vår. Disse ligger i _src/calculator/reducers_.

Husk at en reducer tar imot nåværende state og siste action som ble trigget i applikasjonen. Oppgaven til reducer-en er å returnere ny state basert på type action og action-innholdet.

## Installasjon

```
$ npm i
```

## Bruk / utvikling

```
$ npm run dev
$ open http://localhost:8080
```

## Linting

```
$ npm run lint
```
