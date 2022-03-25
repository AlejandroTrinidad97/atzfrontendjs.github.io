const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./no.gif")
            const pokeN = document.getElementById("pokeText").textContent=`Nombre: ---------------`;
            const pokeN2 = document.getElementById("pokeText2").textContent=`Número: ---`;
            const pokeT = document.getElementById("pokeText3").textContent=`Tipo: ---------------`;
            const pokeT2 = document.getElementById("pokeText4").textContent=`Movimientos Totales: ---`;
            const pokeT3 = document.getElementById("pokeMovs1").textContent=`---------------`;
            const pokeT4 = document.getElementById("pokeMovs2").textContent=`---------------`;
            const pokeT5 = document.getElementById("pokeMovs3").textContent=`---------------`;
            const pokeT6 = document.getElementById("pokeMovs4").textContent=`---------------`;
            const pokeT7 = document.getElementById("Estado1").textContent=`----------`;
            const pokeT8 = document.getElementById("Estado2").textContent=`----------`;
            const pokeT9 = document.getElementById("Estado3").textContent=`----------`;
            const pokeT10 = document.getElementById("Estado4").textContent=`----------`;
            const pokeT11 = document.getElementById("Estado5").textContent=`----------`;
            const pokeT12 = document.getElementById("Estado6").textContent=`----------`;
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other["official-artwork"].front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeNombre = data.name;
            pokeInfo(pokeNombre);
            let pokeNumero = data.id;
            pokeInfo2(pokeNumero);
            let pokeTipos = data.types;
            pokeTyps(pokeTipos);
            let pokeMovimientos = data.moves;
            pokeMoves(pokeMovimientos);
            let pokeEstadisticas = data.stats;
            pokeStats(pokeEstadisticas);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImgball");
    pokePhoto.src = url;
}

const pokeInfo = (pokeNombre) => {
    const pokeN = document.getElementById("pokeText").textContent=`Nombre: ${pokeNombre}`;
}

const pokeInfo2 = (pokeNumero) => {
    const pokeN2 = document.getElementById("pokeText2").textContent=`Número: ${pokeNumero}`;
}

const pokeTyps = (pokeTipos) => {
    let tamano = pokeTipos.length;
    if(tamano==1){
        let pk1 = pokeTipos[0].type.name;
        const pokeT = document.getElementById("pokeText3").textContent=`Tipo: ${pk1}`;
    }else if (tamano==2){
        let pk1 = pokeTipos[0].type.name;
        let pk2 = pokeTipos[1].type.name;
        const pokeT = document.getElementById("pokeText3").textContent=`Tipo: ${pk1} & ${pk2}`;
    }else if (tamano>=3){
        let pk1 = pokeTipos[0].type.name;
        let pk2 = pokeTipos[1].type.name;
        let pk3 = pokeTipos[2].type.name;
        const pokeT = document.getElementById("pokeText3").textContent=`Tipo: ${pk1}, ${pk2} & ${pk3}`;
    }
    
    
}

const pokeMoves = (pokeMovs) => {
    let tamano = pokeMovs.length;
    const pokeT = document.getElementById("pokeText4").textContent=`Movimientos Totales: ${tamano}`;
    let pkm1 = pokeMovs[0].move.name;
    let pkm2 = pokeMovs[1].move.name;
    let pkm3 = pokeMovs[2].move.name;
    let pkm4 = pokeMovs[3].move.name;
    const pokeT1 = document.getElementById("pokeMovs1").textContent=`${pkm1}`;
    const pokeT2 = document.getElementById("pokeMovs2").textContent=`${pkm2}`;
    const pokeT3 = document.getElementById("pokeMovs3").textContent=`${pkm3}`;
    const pokeT4 = document.getElementById("pokeMovs4").textContent=`${pkm4}`;
}

const pokeStats = (pokeStat) => {
    let pks1 = pokeStat[0].base_stat;
    let pkn1 = pokeStat[0].stat.name;
    const pokeT1 = document.getElementById("Estado1").textContent=`${pkn1}: ${pks1}`;
    let pks2 = pokeStat[1].base_stat;
    let pkn2 = pokeStat[1].stat.name;
    const pokeT2 = document.getElementById("Estado4").textContent=`${pkn2}: ${pks2}`;
    let pks3 = pokeStat[2].base_stat;
    let pkn3 = pokeStat[2].stat.name;
    const pokeT3 = document.getElementById("Estado3").textContent=`${pkn3}: ${pks3}`;
    let pks4 = pokeStat[3].base_stat;
    let pkn4 = pokeStat[3].stat.name;
    const pokeT4 = document.getElementById("Estado2").textContent=`   ${pkn4}: ${pks4}`;
    let pks5 = pokeStat[4].base_stat;
    let pkn5 = pokeStat[4].stat.name;
    let tab = `    `;
    const pokeT5 = document.getElementById("Estado5").textContent=`${pkn5}: ${pks5}`;
    let pks6 = pokeStat[5].base_stat;
    let pkn6 = pokeStat[5].stat.name;
    const pokeT6 = document.getElementById("Estado6").textContent=`${pkn6}: ${pks6}`;
}
