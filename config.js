const chapterMarkers = {
    
    marseille: {
        id: 'marseille',
        label: 'Marseille',
        lngLat: [5.367212, 43.303635],
        marker: null
    },
    joliette: {
        id: 'joliette',
        label: 'La Joliette',
        lngLat: [5.367259, 43.305918],
        marker: null
    },
    arr14: {
        id: 'arr14',
        label: '14e Arr.',
        lngLat: [5.396913, 43.341640],
        marker: null
    },
    bdm: {
        id: 'bdm',
        label: 'Belle de Mai',
        lngLat: [5.387122, 43.312139],
        marker: null
    }
};
function showNamedMarker(name) {
    const entry = chapterMarkers[name];
    if (!entry) return;

    if (!entry.marker) {
        entry.marker = new mapboxgl.Marker({ color: '#d62828' })
            .setLngLat(entry.lngLat)
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div class="custom-popup">
                    📍 <strong>${entry.label}</strong>
                </div>
`))
            .addTo(map);
        entry.marker.togglePopup();
    } else {
        entry.marker.getElement().style.display = 'block';
        entry.marker.setLngLat(entry.lngLat);
        entry.marker.togglePopup();
    }
}
function hideAllMarkers() {
    Object.values(chapterMarkers).forEach(entry => {
        if (entry.marker) {
            entry.marker.remove();
            entry.marker = null;
        }
    });
}
function showMarseilleMarker() {
    hideAllMarkers();
    showNamedMarker('marseille');
}
function showJoliMarker() {
    hideAllMarkers();
    showNamedMarker('joliette');
}
function showArr14Marker() {
    hideAllMarkers();
    showNamedMarker('arr14');
}

function showBdmMarker() {
    hideAllMarkers();
    showNamedMarker('bdm');
}
function showBdmMarkerAndHideOthers() {
    hideAllMarkers();
    showNamedMarker('bdm');
}
function showJoliMarkerAndHideOthers() {
    hideAllMarkers();
    showNamedMarker('joliette');
}
function hideJoliMarker() {
    if (chapterMarkers.joliette.marker) {
        chapterMarkers.joliette.marker.remove();
        chapterMarkers.joliette.marker = null;
    }
}

var config = {
    style: 'mapbox://styles/schube/cmdadepnl00rg01sa9zfz3coe',
    accessToken: 'pk.eyJ1Ijoic2NodWJlIiwiYSI6ImNtYzJudGZhcDBhZmoybHBxb3ZjZmRoZjQifQ.0UOUi50nqb2jxFe4dtxleA',
    //showMarkers: true,
    //markerColor: '#3FB1CE',
    projection: 'naturalEarth',
    inset: true,
    insetOptions: ["literal", { markerColor: 'orange' }],
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'Is Marseille safe for tourists?',
    subtitle: "The City in the South of France just had record numbers in tourists. But also record numbers in homicides.",
    byline: 'By Ursula Maria Schubiger',
    footer: 'This is a project for Data Journalism at LEDE, Columbia University. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
{
    id: 'slug-style-id',
    alignment: 'left',
    hidden: false,
    title: 'Marseille, the most dangerous City in Europe',
    image: './assets/marseille.jpeg',
    description: "Marseille is the most dangerous city in Europe. This is the result of a recent representative survey by Numbeo. Official French government figures also underscore this finding: Marseille is the city with the most homicides. The worst year so far was in 2023, when 84 homicides were recorded in the Bouche-du-Rhone department, with its capital, Marseille. At the same time, more and more tourists are traveling to the City in the South of France; it becoming a trendy destination. According to the city's tourism office, 2024 was a record year for tourist overnight stays. This raises the question: Is Marseille safe for tourists?",
    location: {
        center: [2.2137, 46.2276],
        zoom: 5.4,
        pitch: 30,
        bearing: -10
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: 'showMarseilleMarker',
    onChapterEnter: [
        { layer: 'morde-panier', opacity: 0 },
        { layer: 'marseille_alle_morde', opacity: 0 },
        { layer: 'marseille_morde_bdm', opacity: 0 },
        { layer: 'marseille_morde_paternelle', opacity: 0 },
        { layer: 'layer-beach-69vt7o', opacity: 0 },
        { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
        { layer: 'layer-arrondissementssud', opacity: 0 },
        { layer: 'morde-jahr-2023', opacity: 0 },
        { layer: 'morde-jahr-2024', opacity: 0 },
        { layer: 'neu-morde-2025', opacity: 0 },
        { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
        { layer: 'marseille-stadtgrenze', opacity: 0 },
        { layer: 'building', opacity: 0 },
        { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
        { layer: 'layer-touri-ID1', opacity: 0 },
        { layer: 'layer-touri-ID2', opacity: 0 },
        { layer: 'layer-touri-ID3', opacity: 0 },
        { layer: 'Morde_prozente', opacity: 0 },
        { layer: 'arrondissement_3', opacity: 0 },
        { layer: 'arrondissement_2', opacity: 0 },
        { layer: 'arrondissements_14', opacity: 0 }
        
       
    ],
    onChapterExit: []
},

        {
            id: 'zoom-to-marseille',
            
            alignment: 'right',
            hidden: false,
            title: "In the last decade numbers of homecides have gone up.",
            image: './assets/BDR_Morde-01.png',
            description: 'The numbers of homecides in Bouche-du-Rhone are so high because of a contiguous war between drug-gangs. Many of Marseilles Homicide Cases are directly linked to Gang wars around drug dealing.',
            location: {
                center: [5.39, 43.29],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: .3 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'Notre-Dame-de-la-Garde',
            alignment: 'left',
            hidden: false,
            title: 'Where Tourists go: Notre Dame de la Garde',
            image: './assets/NDG.jpg',
            description: 'Tourists that come to Marseille usually stay more or less in the City Center. Tourists Must-See ist this famous church.',
            location: {
                center: [5.37124, 43.28396],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideAllMarkers',
            onChapterEnter: [
                { layer: 'layer-touri-ID1', opacity: 1 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 },
            ],
            onChapterExit: [
                { layer: 'layer-touri-ID1', opacity: 0 }
            ]
        },
        {
            id: 'Vieux-port',
            alignment: 'right',
            hidden: false,
            title: 'Where Tourists eat: Vieux-Port',
            image: './assets/Vieux-Port.jpg',
            description: 'The spot on the acient port is where everyone meets: To go to the fishmarket, take the tourist train or to eat in a french restaurant.',
            location: {
                center: [5.37409, 43.29522],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 1 },
                { layer: 'layer-touri-ID3', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'layer-touri-ID2', opacity: 0 }
            ]
        },
        {
            id: 'Cours Julien',
            alignment: 'left',
            hidden: false,
            title: 'Coolest neighbourhood of the world: Cours Julien',
            image: './assets/cour_julien.jpg',
            description: 'Young people from everywhere come here to party. The neighbourhood of «Notre Dame du Mont» was recently voted the coolest Neighbourhood of the world.',
            location: {
                center: [5.38340, 43.29344],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'layer-touri-ID3', opacity: 0 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'This is why tourists love Marseille: The beaches',
            image: './assets/plage-des-catalans.jpg',
            description: 'Noone comes to Marseille without visiting one of the beaches along the «Corniche».',
            location: {
                center: [5.374275, 43.261611],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 1 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Touristspots in the South-West of the City',
            //image: './assets/le-petit-train.jpg',
            description: "All those touristy spots are in the southern outskirts of the city near the mediterranean, mostly in the first, sixth, seventh and eighth arrondissements. These places are very safe. Now let's have a look at the northern half of the City.",
            location: {
                center: [5.386564, 43.261611],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 1 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 0 },
                { layer: 'layer-arrondissementssud', opacity: .5 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 1 },
                { layer: 'layer-touri-ID2', opacity: 1 },
                { layer: 'layer-touri-ID3', opacity: 1 },
                { layer: 'Morde_prozente', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Where Tourists never go: Les Quartiers nords!',
            image: './assets/quartier.jpg',
            description: 'The so called «Quartiers nords» are the «Banlieues» of Marseille: Social housings suburbs surrounding major cities, often characterized by a mix of residential areas, including both affluent and lower-income neighborhoods. The red parts of the map are considered as no-go-zones for tourists.',
            location: {    
                center: [5.497356, 43.3200],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0.8 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0.3 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Where every single gang related homicide happened since 2023:',
            video: './assets/busserine.mp4',
            description: 'Gang related homicides are called «reglements de comptes». Police track those cases back to war between drug-gangs. They are well documented by police, media and politics. Most of those homicides happened in the classic no-go-area «Quartiers nords». The green arrondissements 1, 6, 7 and 8 on the other side a homecide-free.',
            location: {
                center: [5.341349, 43.299162],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
    
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 1 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0.8 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0.8 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 }
            ],
            onChapterExit: []            
        },
        {
            id: 'eight chapter',
            alignment: 'right',
            hidden: false,
            title: 'Looking at the Arrondissements: 14th has the most killings.',
            image: './assets/morde_pro_arron.png',
            description: 'Having a closer look at the percentages of gang related homecides in the 16 arrondissements, you can spot that the southern Arrondissements have none or hardly any cases. The very red Arrondissement in the north of the Marseille is the 13th Arrondissement with 30% of all the homicides since 2023.',
                location: {
                center: [5.386564, 43.299162],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showArr14Marker',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'morde-panier', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 1 },
                { layer: 'arrondissements_14', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'ninth chapter',
            alignment: 'left',
            hidden: false,
            title: 'Number 2 on the list: 3rd Arrondissments.',
            image: './assets/Friche.jpg',
            description: "The 3rd Arrondissement is not at all in the outskirts of Marseille, specially the neighbourhood of «La Belle de mai» is walkable from the city center and the main station. But this is where in the past 2.5 years significally many shootings happened. With these elevated numbers one should rate the 3rd Arrondissement and specially neighbourhood «La Belle de Mai» as too dangerous for tourists. This seems rather surprising, as specially young people love «La Belle de Mai» with cheap Airbnb and event locations.",
            location: {
                center: [5.368876, 43.306614],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showBdmMarkerAndHideOthers',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'morde-panier', opacity: 0 },
                { layer: 'marseille_morde_bdm', opacity: 1 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 1 },
                { layer: 'arrondissement_3', opacity: 1 },
                { layer: 'arrondissements_14', opacity: 0 }
                
            ],
            onChapterExit: []
        },
        {
            id: 'tenth chapter',
            alignment: 'right',
            hidden: false,
            title: 'Closer Look at «La Joliette»',
            image: './assets/joliette.jpg',
            description: "Arguing with the same numbers the 2nd Arrondissement specially the neighbourhood «La Joliette» should also be considered as vaguely too dangerous for tourists. This neighbourhood has been part of a developping area within Marseille in the past 15 years to make it more attractiv for tourists that come by cruiseships. And it worked: Today, «La Joliette attracks tourists with Mmseums, shops and even Hotels. Tourists will feel safe during the day, but should reconsider taking a hotel there.",
            location: {
                center: [5.368876, 43.306614],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
             callback: 'showJoliMarkerAndHideOthers',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'morde-panier', opacity: 0 },
                { layer: 'marseille_morde_bdm', opacity: 1 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 1 },
                { layer: 'arrondissement_2', opacity: 1 },
                { layer: 'arrondissement_3', opacity: 0 },
                { layer: 'arrondissements_14', opacity: 0 }
                
            ],
            onChapterExit: []
        },
        {
        id: 'eleventh chapter',
            alignment: 'left',
            hidden: false,
            title: 'The one case in the city center: «Le Panier»',
            image: './assets/panier.jpg',
            description: "«Le Panier» is the oldest neighborhood in Marseille. Located in the second Arrondissement, it is just a few steps away from «Vieux Port» and the citycenter. It used to be a poor neighborhood with a mix of old Buildings and social housing. But in recent years there are more and more airbnbs, small shops for tourists and cosy restaurants. It is interestsing to see that the police referenced the offical name of the neighborhood («Les Grands Carmes») instead of the more popular name «Le Panier». But generally this neighborhood is very safe and this event is the exception.",
            location: {
                center: [5.366896, 43.299053],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideJoliMarker',
            
            onChapterEnter: [
                { layer: 'morde-panier', opacity: 1 },
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 0 },
                { layer: 'marseille-stadtgrenze', opacity: 0 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 1 },
                { layer: 'arrondissement_2', opacity: 1 },
                { layer: 'marseille_morde_bdm', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'twelth chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Guess what?',
            //image: './assets/buenos-aires.jpg',
            description: 'Since I have been working at this story, another homicide happened. After all you learned in the last few minutes. Have a guess, where that last incident happend. Look for a spot on this Marseille-Map, by now you should be familiar with it. To give you a little hint: The green zones are ZUS areas. ZUS are urban areas, where the gouverment wants to invest in order to make life better for its inhabitants. Usually, in these zones there is a high percentage of public housing, high unimployment and a loe percentage of school graduates.',
            location: {
                center: [5.386564, 43.299162],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'marseille_alle_morde', opacity: 0 },
                { layer: 'morde-panier', opacity: 0 },
                { layer: 'layer-arrondissements-quartiersnord', opacity: 0 },
                { layer: 'morde-jahr-2023', opacity: 0 },
                { layer: 'marseille_morde_bdm', opacity: 0 },
                { layer: 'morde-jahr-2024', opacity: 0 },
                { layer: 'neu-morde-2025', opacity: 0 },
                { layer: 'layer-zone-sensibles-572e0s', opacity: 1 },
                { layer: 'marseille-stadtgrenze', opacity: 0.8 },
                { layer: 'building', opacity: 1 },
                { layer: 'layer-arrondissementssud', opacity: 0 },
                { layer: 'marseille_stadtgrenze_voll', opacity: 0.6 },
                { layer: 'layer-beach-69vt7o', opacity: 0 },
                { layer: 'layer-touri-ID1', opacity: 0 },
                { layer: 'layer-touri-ID2', opacity: 0 },
                { layer: 'layer-touri-ID3', opacity: 0 },
                { layer: 'arrondissement_3', opacity: 0 },
                { layer: 'Morde_prozente', opacity: 0 },
                { layer: 'arrondissements_14', opacity: 0 },
                { layer: 'arrondissement_2', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
                id: 'blank-ending',
                alignment: 'fully',
                hidden: false,
                title: '🔎 Final Quiz: Where did the last homicide happen?',
                description: `
                     After all you’ve learned – in which arrondissement did the most recent gang-related homicide take place?
                <br><br>
                <label for="arrSelect"><strong>Choose an Arrondissement:</strong></label><br>
                <select id="arrSelect" onchange="checkAnswer()" style="padding: 6px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif;">
            <option value="">-- Select --</option>
            <option value="1">1e</option>
            <option value="2">2e</option>
            <option value="3">3e</option>
            <option value="4">4e</option>
            <option value="5">5e</option>
            <option value="6">6e</option>
            <option value="7">7e</option>
            <option value="8">8e</option>
            <option value="9">9e</option>
            <option value="10">10e</option>
            <option value="11">11e</option>
            <option value="12">12e</option>
            <option value="13">13e</option>
            <option value="14">14e</option>
            <option value="15">15e</option>
            <option value="16">16e</option>
                </select>
                <p id="arrResult" style="font-weight:bold; margin-top:10px;"></p>
            `,
                location: {
                center: [5.386564, 43.299162],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
        },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []

            
            }
            ]            
        };