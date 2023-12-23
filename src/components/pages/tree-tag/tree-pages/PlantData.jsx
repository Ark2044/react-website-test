const plantDataArray = [
    {
        commonName: 'Crown-of-thorns',
        botanicalName: 'Euphorbia Milli',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Crown of thorns is a hardy perennial with stout gray thorns and oval leaves that drop as they age. The sprawling, branching, vinelike stems can attain lengths of more than two metres (seven feet), though potted plants are considerably smaller. The small inconspicuous flowers are borne in paired clusters and are surrounded by two showy light red bracts (leaflike structures attached just below flowers). Various forms are available with yellow or deep red bracts. The white milky sap is poisonous and can cause skin and eye irritation.',
        googleLink: 'https://www.google.com/search?q=Euphorbia%20Milli',
        campusLocation: 'Stairs',
        moreInfoLink: "/plant/1"
    },
    
    {
        commonName: ' Chinese Evergreen',
        botanicalName: 'Aglaonema commutatum',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Chinese evergreen is not a needled conifer, but rather a tropical perennial available in several cultivars that make excellent houseplants. They all have large, narrow, and glossy oval leaves on short stems, and flowers (on older plants) that bloom in spring or summer. The Chinese evergreen is one of the most popular houseplants and its color variations—from dark green and silver to red—add personality to your homes decor.',
        googleLink: 'https://www.google.com/search?q=Aglaonema%20commutatum',
        campusLocation: 'Stairs',
        moreInfoLink: "/plant/2"
    },    
    {
        commonName: ' Ti',
        botanicalName: 'Cordyline Terminalis',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Ti is a palm-like plant growing up to 4.5 metres (15 feet) tall with an attractive fan-like and spirally arranged cluster of broadly elongated leaves at the tip of the slender trunk. The leaves range from red to green and variegated forms. It is a woody plant with leaves 30–60 centimetres (12–24 inches) (rarely 75 cm or 30 in) long and 5–10 cm (2–4 in) wide at the top of a woody stem. It produces 40–60 cm (16–24 in) long panicles of small scented yellowish to red flowers that mature into red berries.',
        googleLink: 'https://www.google.com/search?q=Cordyline%20Terminalis',
        campusLocation: 'Stairs,Old Canteen, Basketball Court, Church',
        moreInfoLink: "/plant/3"
    }, 
    {
        commonName: '  Areca Palm',
        botanicalName: ' Dypsis Lutescens',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'An Areca Palm plant is a tropical indoor plant that is popular for its lush, green foliage and air-purifying properties. It is also known as Dypsis lutescens.Once an endangered species, the Areca Palm is a staple in Indian spaces. One of the most undervalued plants in the indoor plant category. This excellent air purifier is pet friendly and easy to grow. Its delicate leaves/fronds grow outwards in a curved manner and add a tropical feel to any space and can adapt to a variety of growing conditions.',
        googleLink: 'https://www.google.com/search?q=Dypsis%20Lutescens',
        campusLocation: 'Stairs, Church',
        moreInfoLink: "/plant/4"
    }, 
    {
        commonName: ' Egyptian Star Cluster',
        botanicalName: 'Pentas Lanceolata',
        imageSrc: '/images/logos/plant.jpeg',
        description: "Pentas are a tropical import, and grow wild in East Africa. Plants are just the right size for the middle of the summer border: the average height of pentas is 24–36 inches, but plants that perennialize in frost-free zones may reach four feet tall or greater.Blossom colors include pink, purple, white, and red. Penta plants can stay in bloom continuously under ideal growing conditions, so it's worth a bit of weekly care to keep the plants in optimum condition.",
        googleLink: 'https://www.google.com/search?q=Pentas%20Lanceolata',
        campusLocation: 'Stairs',
        moreInfoLink: "/plant/5"
    }, 
    {
        commonName: ' Dwarf Umbrella',
        botanicalName: 'Schefflera Umbrella',
        imageSrc: '/images/logos/plant.jpeg',
        description: "The Umbrella plant, Schefflera Arboricola, also known as the Dwarf umbrella tree is a popular indoor plant due to its ease of care and attractive appearance.They can grow with one trunk, but most likely with two or more and multiple branches displaying palmate compound or whorled leaves (like fingers coming from the stalk) with four to twelve leaflets or more, giving it an umbrella spoke appearance. The glossy leaflets are near oval-shaped, a few inches long, and a couple of inches wide (depending on the age and size of the tree).",
        googleLink: 'https://www.google.com/search?q=Schefflera%20Umbrella',
        campusLocation: 'Stairs, Old Canteen',
        moreInfoLink: "/plant/6"
    }, 
    {
        commonName: 'Dumb Canes',
        botanicalName: 'Dieffenbachia',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'The Dumb Cane plant is a strong species that will thrive in any light conditions other than direct sunlight. It’s easy to care for style and resilience to neglect to make it a wonderful house plant.. .Each plant features leaves that are yellow near their vein, abruptly turning a dark green toward the edge of the leaf. This transition is random, even within the same leaf, creating ribbons and spots of yellow and green along the leaf’s body.',
        googleLink: 'https://www.google.com/search?q=Dieffenbachia',
        campusLocation: 'Stairs, Old Canteen, Church',
        moreInfoLink: "/plant/7"
    }, 
    {
        commonName: 'Longevity Spinach',
        botanicalName: 'Gynura procumbens',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Longevity spinach, also known as Gynura procumbens, is growing in popularity thanks to its benefits as green, leafy spinach! It is a veggie plant famous worldwide but primarily found in Africa, China, and Southeast Asia. It would thrive in areas that have tropical climates, being native in terrestrial, warm locations and habitats.',
        googleLink: 'https://www.google.com/search?q=Gynura%20procumbens',
        campusLocation: 'Stairs',
        moreInfoLink: "/plant/8"
    }, 
    {
        commonName: 'Earth Star',
        botanicalName: 'Cryptanthus Acaulis',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Cryptanthus are part of the bromeliad plant family and native to Brazil. Despite the flat shape, these plants can reach up to two feet across.The leaves are wavy and feature a striped pattern.They are typically available in various shades of red, green, white, and pink.The earth star bromeliad can get quite big. When grown outdoors in ideal conditions, it can reach up to two feet across.',
        googleLink: 'https://www.google.com/search?q=Cryptanthus%20Acaulis',
        campusLocation: 'Stairs',
        moreInfoLink: "/plant/9"
    }, 
    {
        commonName: 'Gold Dust Croton',
        botanicalName: 'Codiaeum Variegatum',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'The Gold Dust Croton is known and loved for its bright and beautiful foliage. Its green leaves appear to have been dusted by gold, hence its name. It is a slow grower and does well when grouped together. This plant usually grows to about 3 feet high, making it easy to add to any space! The oil from the seeds is used to make medicine.',
        googleLink: 'https://www.google.com/search?q=Codiaeum%20Variegatum',
        campusLocation: 'Stairs, School Hall',
        moreInfoLink: "/plant/10"
    }, 
    {
        commonName: 'Lemon Cypress',
        botanicalName: 'Cupressus macrocarpa',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Lemon Cypress also commonly referred to as the Goldcrest Monterey Cypress, Cupressus macrocarpa ‘Goldcrest’ (also known as Hesperocyparis macrocarpa) is a Monterey cypress cultivar with upward-growing branches. The unique yellow-green color of the lemon cypress can play off darker greens of other conifers, while texture can be experimented with by placing the shrub next to boulders and fencing.',
        googleLink: 'https://www.google.com/search?q=Cupressus%20macrocarpa',
        campusLocation: 'School Hall',
        moreInfoLink: "/plant/11"
    }, 
    {
        commonName: 'Shield Aralia',
        botanicalName: 'Polyscias Scutellaria',
        imageSrc: '/images/logos/plant.jpeg',
        description: 'Polyscias scutellaria commonly called Shield Aralia or Plum Aralia is an easy care evergreen tree-like plant which can grow to a height of about 6M and bears attractive round leaves.The variegated cultivars do best if located bright or part sunny with some morning, evening or winter sun. The green leaved forms will also tolerate light shade.',
        googleLink: 'https://www.google.com/search?q=Polyscias%20Scutellaria',
        campusLocation: 'School Hall',
        moreInfoLink: "/plant/12"
    },  
    
    
    // Add data for other plants as needed
];

export default plantDataArray;
