const stateCapital = {

    "KS": {
        "name": "Kansas",
        "capital": "Topeka",
        "lat": "39.04",
        "long": "-95.69"
    },
    "AZ": {
        "name": "Arizona",
        "capital": "Phoenix",
        "lat": "33.448457",
        "long": "-112.073844"
    },
    "OR": {
        "name": "Oregon",
        "capital": "Salem",
        "lat": "44.931109",
        "long": "-123.029159"
    },
    "CA": {
        "name": "California",
        "capital": "Sacramento",
        "lat": "38.555605",
        "long": "-121.468926"
    },
    "AL": {
        "name": "Alabama",
        "capital": "Montgomery",
        "lat": "32.361538",
        "long": "-86.279118"
    },
    "DE": {
        "name": "Delaware",
        "capital": "Dover",
        "lat": "39.161921",
        "long": "-75.526755"
    },
    "FL": {
        "name": "Florida",
        "capital": "Tallahassee",
        "lat": "30.4518",
        "long": "-84.27277"
    },
    "GA": {
        "name": "Georgia",
        "capital": "Atlanta",
        "lat": "33.76",
        "long": "-84.39"
    },
    "HI": {
        "name": "Hawaii",
        "capital": "Honolulu",
        "lat": "21.30895",
        "long": "-157.826182"
    },
    "IL": {
        "name": "Illinois",
        "capital": "Springfield",
        "lat": "39.783250",
        "long": "-89.650373"
    },
    "KY": {
        "name": "Kentucky",
        "capital": "Frankfort",
        "lat": "38.197274",
        "long": "-84.86311"
    },
    "LA": {
        "name": "Louisiana",
        "capital": "Baton Rouge",
        "lat": "30.45809",
        "long": "-91.140229"
    },
    "ID": {
        "name": "Idaho",
        "capital": "Boise",
        "lat": "43.613739",
        "long": "-116.237651"
    },
    "ME": {
        "name": "Maine",
        "capital": "Augusta",
        "lat": "44.323535",
        "long": "-69.765261"
    },
    "MI": {
        "name": "Michigan",
        "capital": "Lansing",
        "lat": "42.7335",
        "long": "-84.5467"
    },
    "MN": {
        "name": "Minnesota",
        "capital": "Saint Paul",
        "lat": "44.95",
        "long": "-93.094"
    },
    "TX": {
        "name": "Texas",
        "capital": "Austin",
        "lat": "30.266667",
        "long": "-97.75"
    },
    "NV": {
        "name": "Nevada",
        "capital": "Carson City",
        "lat": "39.160949",
        "long": "-119.753877"
    },
    "PA": {
        "name": "Pennsylvania",
        "capital": "Harrisburg",
        "lat": "40.269789",
        "long": "-76.875613"
    },
    "RI": {
        "name": "Rhode Island",
        "capital": "Providence",
        "lat": "41.82355",
        "long": "-71.422132"
    },
    "SD": {
        "name": "South Dakota",
        "capital": "Pierre",
        "lat": "44.367966",
        "long": "-100.336378"
    },
    "UT": {
        "name": "Utah",
        "capital": "Salt Lake City",
        "lat": "40.7547",
        "long": "-111.892622"
    },
    "VT": {
        "name": "Vermont",
        "capital": "Montpelier",
        "lat": "44.26639",
        "long": "-72.57194"
    },
    "CO": {
        "name": "Colorado",
        "capital": "Denver",
        "lat": "39.7391667",
        "long": "-104.984167"
    },
    "WA": {
        "name": "Washington",
        "capital": "Olympia",
        "lat": "47.042418",
        "long": "-122.893077"
    }
}

const sortable = [];
for (const el in stateCapital) {
    sortable.push([stateCapital[el].name, stateCapital[el].capital]);
}
const sorted = sortable
    .sort()
    .map(el => `<tr><td>${el[0]}</td> <td>${el[1]}</td></tr>`).join("")

document.getElementById("tbody").innerHTML = sorted
