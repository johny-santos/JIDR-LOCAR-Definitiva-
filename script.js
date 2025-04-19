let currentVehicleIndex = 0;
let currentCategory = '';

// Função para abrir o modal das vantagens
function openAdvantagesModal() {
    const modal = document.getElementById('advantages-modal');
    modal.style.display = 'block';
}

// Função para fechar o modal das vantagens
function closeAdvantagesModal() {
    const modal = document.getElementById('advantages-modal');
    modal.style.display = 'none';
}

// Função para abrir o modal e exibir as informações do card selecionado
function openVehicleModal(category) {
    currentVehicleIndex = 0;
    currentCategory = category;
    displayVehicle(category);
    const modal = document.getElementById('vehicle-modal');
    modal.style.display = 'block';
}

// Função para fechar o modal dos veículos
function closeVehicleModal() {
    const modal = document.getElementById('vehicle-modal');
    modal.style.display = 'none';
}

function displayVehicle(category) {
    const vehicles = {
        hatchbacks: [
            {
                title: 'Volkswagen Polo',
                description: 'POLO HIGLINE TSI 1.0 FLEX 12V AUT.',
                image: './images/polo apresentação (1).png'
            },

            {
                title: 'Fiat Argo',
                description: 'ARGO 1.0 6V Flex Mec (Rádio Bluetooth / USB)',
                image: './images/fiat argo.webp'
            },
            {
                title: 'Peugeot 208',
                description: '208 Like Pack Tech 1.0 Flex 6V 5p Mec.',
                image: './images/style_azul.png'
            },
            {
                title: 'Hyundai HB20',
                description: 'HB20 Vision 1.0 Flex 12V Mec.',
                image: './images/hb20.png'
            },
            {
                title: 'Chevrolet Onix',
                description: 'Onix LT 1.0 Turbo Flex Mec.',
                image: './images/preeto-onix-ltz-mt.png'
            },
            {
                title: 'Citroen C3',
                description: 'C3 Feel 1.0 Flex 6V 5P Mec.',
                image: './images/citroen-c3-citroen-c3-cinza-citroen-amazonas.png'
            },
            {
                title: 'Renault Kwid',
                description: 'KWID Intense 1.0 Flex 12V 5p Mec.',
                image: './images/kwid-2022-intense-02.png'
            },
            {
                title: 'Fiat Mobi',
                description: 'Mobi Like 1.0 Fire Flex 5p Mec',
                image: './images/png-transparent-fiat-mobi-fiat-automobiles-car-volkswagen-car-compact-car-automatic-transmission-subcompact-car.png'
            },
        ],
        sedans: [
            {
                title: 'Nissan Sentra',
                description: '2.0 L Gasolina XTRONIC CVT® com D- STEP e Paddle Shift',
                image: './images/nissan sentra apresentação (2).png'
            },
            {
                title: 'Toyota Corolla',
                description: 'COROLLA ALTIS 1.8 16V AUT. (HÍBRIDO)',
                image: './images/Corolla cards.png'
            },
            {
                title: 'Volksvagem Virtus',
                description: 'VIRTUS TSI 1.0 FLEX 12V 4P AUT.',
                image: './images/virtus cards.png'
            },
            {
                title: 'Fiat Cronos',
                description: 'CRONOS DRIVE 1.0 6V FLEX.',
                image: './images/fiat cronos cards.webp'
            },
            {
                title: 'Onix Sedan Plus',
                description: '1.0 12V TB Flex Aut',
                image: './images/onix plus cards.png'
            },
            {
                title: 'Hyundai HB20s',
                description: 'HB20S Comfort Plus 1.0 TB Flex 12V Aut',
                image: './images/Hyundai HB20S cards.jpg'
            }
        ],
        suvs: [
            {
                title: 'Jeep Compass',
                description: 'COMPASS LONG. T270 1.3 TB 4x2 Flex Aut.COMPASS LONG. T270 1.3 TB 4x2 Flex Aut.',
                image: './images/jeep compass apresentação.png'
            },
            {
                title: 'Jeep renegade',
                description: 'RENEGADE SPORT T270 1.3 TB 4X2 FLEX AUT',
                image: './images/jeep renegade cards.png'
            },
            {
                title: 'Jeep Comander',
                description: 'Commander Limited T270 1.3 TB Flex Aut.',
                image: './images/comander cardrs.webp'
            },
            {
                title: 'Hyundai Creta',
                description: 'Creta AUT. 2024 FLEX ',
                image: './images/creta cards.png'
            },
            {
                title: 'Volksvagem Nivus ',
                description: 'Nivus Highline 1.0 200 TSI Flex Aut.                ',
                image: './images/nivus cards.png'
            },
            {
                title: 'Volksvagem Taos',
                description: 'TAOS Highline 1.4 250 TSI Flex Aut.                ',
                image: './images/volksvagem taos cards.png'
            },
            {
                title: 'Volksvagem T-Cross',
                description: 'T-Cross Highline 1.4 TSI Flex 16V 5p Aut                .                ',
                image: './images/VW-T-Cross cards.jpg'
            },
            {
                title: 'Nissan Kicks',
                description: 'KICKS Advance 1.6 16V Flex Aut. Pack Plus                ',
                image: './images/nissa kicks cards.png'
            },
            {
                title: 'Fiat Fatsback',
                description: 'FASTBACK IMPETUS 1.0 200 T. FLEX AUT                ',
                image: './images/fiat fastback cards.webp'
            },
            {
                title: 'Fiat Pulse',
                description: 'Pulse Audace 200 Turbo 1.0 Aut Flex                ',
                image: './images/fiat pulse cards.webp'
            },
            {
                title: 'Chevrolet Tracker',
                description: 'TRACKER LT 1.0 TURBO 12V FLEX AUT.                ',
                image: './images/tracker cards.png'
            },
        ],
        caminhonetes: [
            {
                title: 'Chevrolet Montana',
                description: '. Combustível, Álcool, Gasolina. Potência (cv), 99, 94. Torque (kgf.m), 13,1, 12,8. AUT',
                image: './images/montana apresentação (2).png'
            },
            {
                title: 'Volkswagen Amarok',
                description: 'Motor: 3.0 TDI Cilindros: 6 em V, Válvulas: 24, 258 cv AUT',
                image: './images/Volks amarok cards.png'
            },

            {
                title: 'Ford Ranger',
                description: 'Diesel 2.0 Tração 4x4 Potência 170cv',
                image: './images/ford ranger cards.avif'
            },
            {
                title: 'Toyota Hillux Sw4',
                description: 'Diesel. 2.8L 16V Turbo* intercooler  2.755. AUT',
                image: './images/sw4 cards.png'
            },
            {
                title: 'Mitsubish Triton L200',
                description: '2.4L Diesel com 190 CV · Tração 4x4 Easy',
                image: './images/l200 cards.png'
            },
            {
                title: 'Fiat Toro',
                description: 'Toro Freedom 1.3 T270 4x2 Flex Aut.',
                image: './images/toro cards.png'
            },
            {
                title: 'Chevrolet S10',
                description: '2.8 Turbo 4x4 CD 437,',
                image: './images/s10 cards.png'
            },
        ],
        eletricos: [
            {
                title: 'BYD Dolphin',
                description: 'Peso/torque, 52,47 kg/kgfm ; Autonomia, 330 km ; Capacidade da bateria, 60,5 kWh ; Potência de recarga, 7 kW (AC) ; Potência de recarga, 80 kW (DC). AUT',
                image: './images/byd dolphin apresentação.png'
            },
            {
                title: 'BYD Han EV ',
                description: 'Engine Power: 268 HP / 272 PS / 200 kW ; Torque: 258 lb-ft / 350 Nm ; Tração : AWD. AUT',
                image: './images/byd han ev cards.jpg'
            },
            {
                title: 'BYD Tan EV ',
                description: 'Engine Power: 268 HP / 272 PS / 200 kW ; Torque: 258 lb-ft / 350 Nm ; Tração : AWD. AUT',
                image: './images/BYD Tan 110KW Tan EV cards.png'
            },
            {
                title: 'BYD Yuan plus EV ',
                description: 'Motor elétrico ; Potência, 204 cv (dianteiro) ; Torque, 31,6 kgfm (dianteiro) AUT',
                image: './images/yuan cards.png'
            },
            {
                title: 'ORA 03 GT ',
                description: ' Motor: Elétrico, dianteiro, com função de tração ; Bateria (kWh): 63',
                image: './images/ora gt cards.png'
            },
        ],
        premium: [
            {
                title: 'BMW 218i',
                description: 'Cilindrada unitária, 500 cm ; Deslocamento, 1499 cm ; Potência máxima, 140 cv ',
                image: './images/bmw 218i apresentação.png'
            },
            {
                title: 'BMW 320i',
                description: 'Deslocamento, 1998 cm ; Potência máxima, 184 cv (A) ; 184 cv (G)',
                image: './images/320i cards.png'
            },
            {
                title: 'Audi A3 Sportback ',
                description: 'Cilindrada unitária, 496 cm ; Deslocamento, 1984 cm ; Potência máxima, 204 cv AUT',
                image: './images/audi a3 sportback cards.png'
            },
            {
                title: 'Audi A3 Sedan S line ',
                description: 'Cilindrada unitária, 496 cm ; Deslocamento, 1984 cm ; Potência máxima, 190 cv AUT',
                image: './images/a3 s line sedan cards.jpeg'
            },
            {
                title: 'Audi Q3 2.0 TFSI ',
                description: ' 2.0 TFSI ; Potência. Cilindrada, cc: 1984. Potência máx. em cv: 231 CV. ',
                image: './images/audi q3 cards.png'
            },
            {
                title: 'Volvo XC90 ULTIMATE',
                description: ' 2.0 T8 Recharge Plus Hybrid AWD ',
                image: './images/vc90 cards.jpg'
            },
            {
                title: 'HAVAL H6',
                description: ' Haval H6 2024 – ficha técnica ; Potência Máxima Líquida (ABNT NBR 5484). 171 cv  ',
                image: './images/haval h6 cards.png'
            },
        ]
    };

    const vehicleDetails = vehicles[category][currentVehicleIndex];
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const image = document.getElementById('modal-image');

    title.innerText = vehicleDetails.title;
    description.innerText = vehicleDetails.description;
    image.src = vehicleDetails.image;

    const vehicleElement = document.querySelector('.vehicle-details');
    vehicleElement.classList.remove('hide');
}

function nextVehicle() {
    const vehicleElement = document.querySelector('.vehicle-details');
    vehicleElement.classList.add('hide');

    setTimeout(() => {
        currentVehicleIndex = (currentVehicleIndex + 1) % {
            hatchbacks: 8,
            sedans: 6,
            suvs: 11,
            caminhonetes: 7,
            eletricos: 5,
            premium: 7
        }[currentCategory];
        displayVehicle(currentCategory);
    }, 500);
}

function prevVehicle() {
    const vehicleElement = document.querySelector('.vehicle-details');
    vehicleElement.classList.add('hide');

    setTimeout(() => {
        currentVehicleIndex = (currentVehicleIndex - 1 + {
            hatchbacks: 8,
            sedans: 6,
            suvs: 11,
            caminhonetes: 7,
            eletricos: 5,
            premium: 7
        }[currentCategory]) % {
            hatchbacks: 8,
            sedans: 6,
            suvs: 11,
            caminhonetes: 7,
            eletricos: 5,
            premium: 7
        }[currentCategory];
        displayVehicle(currentCategory);
    }, 500);
}

// Fechar o modal ao clicar fora do conteúdo do modal
window.onclick = function (event) {
    const advantagesModal = document.getElementById('advantages-modal');
    const vehicleModal = document.getElementById('vehicle-modal');

    if (event.target == advantagesModal) {
        advantagesModal.style.display = 'none';
    }

    if (event.target == vehicleModal) {
        vehicleModal.style.display = 'none';
    }
}

