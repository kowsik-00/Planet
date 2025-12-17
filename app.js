import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const port =3003;

const app = express();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//for file path for excecution
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/public/view'));

//for use some more css files
app.use(express.static(path.join(__dirname,'/public')));

app.use(express.json());

app.get('/',(req,res)=>{
    res.render("page",{
        title:"mercury",
        url:"image/planet-mercury.svg",
        content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        rotate:"58.6 days",
        revolve:"87.97 days",
        radi:"2,439.6 km",
        temp:"430°c",
        link1:"mercuryInternal",
        link2:"mercuryGeology",
        link:"mercury",
        colorlink:"mercury",
        color:"#419EBB"
    });    
})

app.get('/mercury',(req,res)=>{
    res.render("page",{
        title:"mercury",
        url:"image/planet-mercury.svg",
        content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        rotate:"58.6 days",
        revolve:"87.97 days",
        radi:"2,439.6 km",
        temp:"430°c",
        link1:"mercuryInternal",
        link2:"mercuryGeology",
        link:"mercury",
        colorlink:"mercury",
        color:"#419EBB"
    });    
})

app.get('/venus',(req,res)=>{
    res.render("page",{
        title:"VENUS",
        url:"image/planet-venus.svg",
        content:"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        rotate:"243 days",
        revolve:"224.7 days",
        radi:"6,051.8 km",
        temp:"471°c",
        link1:"venusInternal",
        link2:"venusGeology",
        link:"venus",
        colorlink:"venus",
        color:"#EDA249"
    });    
})


app.get('/earth',(req,res)=>{
    res.render("page",{
        title:"EARTH",
        url:"image/planet-earth.svg",
        content:"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        rotate:"0.99 days",
        revolve:"365.26 days",
        radi:"6,371 km",
        temp:"16°c",
        link1:"earthInternal",
        link2:"earthGeology",
        link:"earth",
        colorlink:"earth",
        color:"#6F2ED6"
    });    
})

app.get('/mars',(req,res)=>{
    res.render("page",{
        title:"MARS",
        url:"image/planet-mars.svg",
        content:`Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
        rotate:"1.03 days",
        revolve:"1.88 years",
        radi:"3,389.5 km",
        temp:"-28°c",
        link1:"marsInternal",
        link2:"marsGeology",
        link:"mars",
        colorlink:"mars",
        color:"#D14C32"
    });    
})

app.get('/jupiter',(req,res)=>{
    res.render("page",{
        title:"JUPITER",
        url:"image/planet-jupiter.svg",
        content:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        rotate:"9.93 hours",
        revolve:"11.86 years",
        radi:"69,911 km",
        temp:"-108°c",
        link1:"jupiterInternal",
        link2:"jupiterGeology",
        link:"jupiter",
        colorlink:"jupiter",
        color:"#D83A34"
    });    
})

app.get('/saturn',(req,res)=>{
    res.render("page",{
        title:"SATURN",
        url:"image/planet-saturn.svg",
        content:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        rotate:"10.8 hours",
        revolve:"29.46 years",
        radi:"58,232 km",
        temp:"-138°c",
        link1:"saturnInternal",
        link2:"saturnGeology",
        link:"saturn",
        colorlink:"saturn",
        color:"#CD5120"
   });    
})


app.get('/uranus',(req,res)=>{
    res.render("page",{
        title:"URANUS",
        url:"image/planet-uranus.svg",
        content:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        rotate:"17.2 hours",
        revolve:"84 years",
        radi:"25,362 km",
        temp:"-195°c",
        link1:"uranusInternal",
        link2:"uranusGeology",
        link:"uranus",
        colorlink:"uranus",
        color:"#1EC2A4"
    });    
})

app.get('/neptune',(req,res)=>{
    res.render("page",{
        title:"NEPTUNE",
        url:"image/planet-neptune.svg",
        content:`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
        rotate:"16.08 hours",
        revolve:"164.79 years",
        radi:"24,622 km",
        temp:"-201°c",
        link1:"neptuneInternal",
        link2:"neptuneGeology",
        link:"neptune",
        colorlink:"neptune",
        color:"#2D68F0"
    });    
})
app.get('/mercuryInternal',(req,res)=>{
    res.render("page",{
        title:"mercury",
        url:"image/planet-mercury-internal.svg",
        content:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        rotate:"58.6 days",
        revolve:"87.97 days",
        radi:"2,439.6 km",
        temp:"430°c",
        link1:"mercuryInternal",
        link2:"mercuryGeology",
        link:"mercury",
        colorlink:"mercuryInternal",
        color:"#419EBB"
    });    
})

app.get('/venusInternal',(req,res)=>{
    res.render("page",{
        title:"VENUS",
        url:"image/planet-venus-internal.svg",
        content:"The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        rotate:"243 days",
        revolve:"224.7 days",
        radi:"6,051.8 km",
        temp:"471°c",
        link1:"venusInternal",
        link2:"venusGeology",
        link:"venus",
        colorlink:"venusInternal",
        color:"#EDA249"
    });    
})


app.get('/earthInternal',(req,res)=>{
    res.render("page",{
        title:"EARTH",
        url:"image/planet-earth-internal.svg",
        content:"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        rotate:"0.99 days",
        revolve:"365.26 days",
        radi:"6,371 km",
        temp:"16°c",
        link1:"earthInternal",
        link2:"earthGeology",
        link:"earth",
        colorlink:"earthInternal",
        color:"#6F2ED6"
    });    
})

app.get('/marsInternal',(req,res)=>{
    res.render("page",{
        title:"MARS",
        url:"image/planet-mars-internal.svg",
        content:`Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`,
        rotate:"1.03 days",
        revolve:"1.88 years",
        radi:"3,389.5 km",
        temp:"-28°c",
        link1:"marsInternal",
        link2:"marsGeology",
        link:"mars",
        colorlink:"marsInternal",
        color:"#D14C32"
    });    
})

app.get('/jupiterInternal',(req,res)=>{
    res.render("page",{
        title:"JUPITER",
        url:"image/planet-jupiter-internal.svg",
        content:"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        rotate:"9.93 hours",
        revolve:"11.86 years",
        radi:"69,911 km",
        temp:"-108°c",
        link1:"jupiterInternal",
        link2:"jupiterGeology",
        link:"jupiter",
        colorlink:"jupiterInternal",
        color:"#D83A34"
    });    
})

app.get('/saturnInternal',(req,res)=>{
    res.render("page",{
        title:"SATURN",
        url:"image/planet-saturn-internal.svg",
        content:"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        rotate:"10.8 hours",
        revolve:"29.46 years",
        radi:"58,232 km",
        temp:"-138°c",
        link1:"saturnInternal",
        link2:"saturnGeology",
        link:"saturn",
        colorlink:"saturnInternal",
        color:"#CD5120"
    });    
})


app.get('/uranusInternal',(req,res)=>{
    res.render("page",{
        title:"URANUS",
        url:"image/planet-uranus-internal.svg",
        content:"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        rotate:"17.2 hours",
        revolve:"84 years",
        radi:"25,362 km",
        temp:"-195°c",
        link1:"uranusInternal",
        link2:"uranusGeology",
        link:"uranus",
        colorlink:"uranusInternal",
        color:"#1EC2A4"
    });    
})

app.get('/neptuneInternal',(req,res)=>{
    res.render("page",{
        title:"NEPTUNE",
        url:"image/planet-neptune-internal.svg",
        content:`Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
        rotate:"16.08 hours",
        revolve:"164.79 years",
        radi:"24,622 km",
        temp:"-201°c",
        link1:"neptuneInternal",
        link2:"neptuneGeology",
        link:"neptune",
        colorlink:"neptuneInternal",
        color:"#2D68F0"
    });    
})


app.get('/mercuryGeology',(req,res)=>{
    res.render("page",{
        title:"mercury",
        url:"image/geology-mercury.png",
        content:"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        rotate:"58.6 days",
        revolve:"87.97 days",
        radi:"2,439.6 km",
        temp:"430°c",
        link1:"mercuryInternal",
        link2:"mercuryGeology",
        link:"mercury",
        colorlink:"mercuryGeology",
        color:"#419EBB"
    });    
})

app.get('/venusGeology',(req,res)=>{
    res.render("page",{
        title:"VENUS",
        url:"image/geology-venus.png",
        content:"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        rotate:"243 days",
        revolve:"224.7 days",
        radi:"6,051.8 km",
        temp:"471°c",
        link1:"venusInternal",
        link2:"venusGeology",
        link:"venus",
        colorlink:"venusGeology",
        color:"#EDA249"
    });    
})


app.get('/earthGeology',(req,res)=>{
    res.render("page",{
        title:"EARTH",
        url:"image/geology-earth.png",
        content:"The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        rotate:"0.99 days",
        revolve:"365.26 days",
        radi:"6,371 km",
        temp:"16°c",
        link1:"earthInternal",
        link2:"earthGeology",
        link:"earth",
        colorlink:"earthGeology",
        color:"#6F2ED6"
    });    
})

app.get('/marsGeology',(req,res)=>{
    res.render("page",{
        title:"MARS",
        url:"image/geology-mars.png",
        content:`Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`,
        rotate:"1.03 days",
        revolve:"1.88 years",
        radi:"3,389.5 km",
        temp:"-28°c",
        link1:"marsInternal",
        link2:"marsGeology",
        link:"mars",
        colorlink:"marsGeology",
        color:"#D14C32"
    });    
})

app.get('/jupiterGeology',(req,res)=>{
    res.render("page",{
        title:"JUPITER",
        url:"image/geology-jupiter.png",
        content:"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        rotate:"9.93 hours",
        revolve:"11.86 years",
        radi:"69,911 km",
        temp:"-108°c",
        link1:"jupiterInternal",
        link2:"jupiterGeology",
        link:"jupiter",
        colorlink:"jupiterGeology",
        color:"#D83A34"
    });    
})

app.get('/saturnGeology',(req,res)=>{
    res.render("page",{
        title:"SATURN",
        url:"image/geology-saturn.png",
        content:"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
        rotate:"10.8 hours",
        revolve:"29.46 years",
        radi:"58,232 km",
        temp:"-138°c",
        link1:"saturnInternal",
        link2:"saturnGeology",
        link:"saturn",
        colorlink:"saturnGeology",
        color:"#CD5120"
    });    
})


app.get('/uranusGeology',(req,res)=>{
    res.render("page",{
        title:"URANUS",
        url:"image/geology-uranus.png",
        content:"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        rotate:"17.2 hours",
        revolve:"84 years",
        radi:"25,362 km",
        temp:"-195°c",
        link1:"uranusInternal",
        link2:"uranusGeology",
        link:"uranus",
        colorlink:"uranusGeology",
        color:"#1EC2A4"
    });    
})

app.get('/neptuneGeology',(req,res)=>{
    res.render("page",{
        title:"NEPTUNE",
        url:"image/geology-neptune.png",
        content:`Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`,
        rotate:"16.08 hours",
        revolve:"164.79 years",
        radi:"24,622 km",
        temp:"-201°c",
        link1:"neptuneInternal",
        link2:"neptuneGeology",
        link:"neptune",
        colorlink:"neptuneGeology",
        color:"#2D68F0"
    });   
})







app.listen(port,()=>{
    console.log("App running port is "+port)
})