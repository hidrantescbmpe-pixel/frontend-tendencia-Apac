//Tendência de Precipitação - API Hidrolink - APAC PE
const data_atualizacao = document.getElementById('data_atualizacao');

const mesoregiao0 = document.getElementById('mesoregiao0');
const dia_semana1 = document.getElementById('dia_semana1');
const dia_semana2 = document.getElementById('dia_semana2');
const dia_semana3 = document.getElementById('dia_semana3');
const dia_semana4 = document.getElementById('dia_semana4');
const dia_semana5 = document.getElementById('dia_semana5');

const metropolitana = document.getElementById('metropolitana');
const categoria_metropolitana1 = document.getElementById('categoria_metropolitana1');
const categoria_metropolitana2 = document.getElementById('categoria_metropolitana2');
const categoria_metropolitana3 = document.getElementById('categoria_metropolitana3');
const categoria_metropolitana4 = document.getElementById('categoria_metropolitana4');
const categoria_metropolitana5 = document.getElementById('categoria_metropolitana5');

const mata_norte = document.getElementById('mata_norte');
const categoria_mn1 = document.getElementById('categoria_mn1');
const categoria_mn2 = document.getElementById('categoria_mn2');
const categoria_mn3 = document.getElementById('categoria_mn3');
const categoria_mn4 = document.getElementById('categoria_mn4');
const categoria_mn5 = document.getElementById('categoria_mn5');

const mata_sul = document.getElementById('mata_sul');
const categoria_ms1 = document.getElementById('categoria_ms1');
const categoria_ms2 = document.getElementById('categoria_ms2');
const categoria_ms3 = document.getElementById('categoria_ms3');
const categoria_ms4 = document.getElementById('categoria_ms4');
const categoria_ms5 = document.getElementById('categoria_ms5');

const agreste = document.getElementById('agreste');
const categoria_agreste1 = document.getElementById('categoria_agreste1');
const categoria_agreste2 = document.getElementById('categoria_agreste2');
const categoria_agreste3 = document.getElementById('categoria_agreste3');
const categoria_agreste4 = document.getElementById('categoria_agreste4');
const categoria_agreste5 = document.getElementById('categoria_agreste5');

const sertao_pernambuco = document.getElementById('sertao_pernambuco');
const categoria_sp1 = document.getElementById('categoria_sp1');
const categoria_sp2 = document.getElementById('categoria_sp2');
const categoria_sp3 = document.getElementById('categoria_sp3');
const categoria_sp4 = document.getElementById('categoria_sp4');
const categoria_sp5 = document.getElementById('categoria_sp5');

const sertao_sao_francisco = document.getElementById('sertao_sao_francisco');
const categoria_sf1 = document.getElementById('categoria_sf1');
const categoria_sf2 = document.getElementById('categoria_sf2');
const categoria_sf3 = document.getElementById('categoria_sf3');
const categoria_sf4 = document.getElementById('categoria_sf4');
const categoria_sf5 = document.getElementById('categoria_sf5');

const fernando_de_noronha = document.getElementById('fernando_de_noronha');
const categoria_fn1 = document.getElementById('categoria_fn1');
const categoria_fn2 = document.getElementById('categoria_fn2');
const categoria_fn3 = document.getElementById('categoria_fn3');
const categoria_fn4 = document.getElementById('categoria_fn4');
const categoria_fn5 = document.getElementById('categoria_fn5');

// Função para aplicar cor de fundo baseado na categoria
function aplicarCor(elemento, categoria) {
    const cores = {
        'Sem chuva': '#D9D9D9',
        'Fraca': '#B7B7B7',
        'Fraca a moderada': '#9FC5E8',
        'Moderada': '#FFFF00',
        'Moderada a forte': '#ECAB09',
        'Forte': '#E61313'
    };
    
    const textColor = categoria === 'Forte' ? 'white' : '#333';
    
    elemento.style.backgroundColor = cores[categoria] || '#fff';
    elemento.style.color = textColor;
    elemento.style.fontWeight = '500';
}




fetch ('http://dados.apac.pe.gov.br:41120/hidrolink/v2/api.php/tendencia_precipitacao')
    .then(resposta => {
        if (resposta.ok) {
            return resposta.json();
        } else {
            console.log('Deu erro!');
        }
    })
    .then((json) => {
        console.log(json)
        data_atualizacao.innerHTML = 'Dados atualizados em: ' + json[0].data_atualizacao;

        mesoregiao0.innerHTML = 'Mesorregião';
        dia_semana1.innerHTML = json[0].dia_semana;
        dia_semana2.innerHTML = json[7].dia_semana;
        dia_semana3.innerHTML = json[14].dia_semana;
        dia_semana4.innerHTML = json[21].dia_semana;
        dia_semana5.innerHTML = json[28].dia_semana;

        metropolitana.innerHTML = json[0].mesoregiao;
        categoria_metropolitana1.innerHTML = json[0].categoria;
        categoria_metropolitana2.innerHTML = json[7].categoria;
        categoria_metropolitana3.innerHTML = json[14].categoria;
        categoria_metropolitana4.innerHTML = json[21].categoria;
        categoria_metropolitana5.innerHTML = json[28].categoria;

        aplicarCor(categoria_metropolitana1, json[0].categoria);
        aplicarCor(categoria_metropolitana2, json[7].categoria);
        aplicarCor(categoria_metropolitana3, json[14].categoria);
        aplicarCor(categoria_metropolitana4, json[21].categoria);
        aplicarCor(categoria_metropolitana5, json[28].categoria);

        mata_norte.innerHTML = json[4].mesoregiao;
        categoria_mn1.innerHTML = json[4].categoria;
        categoria_mn2.innerHTML = json[11].categoria;
        categoria_mn3.innerHTML = json[18].categoria;
        categoria_mn4.innerHTML = json[25].categoria;
        categoria_mn5.innerHTML = json[32].categoria;

        aplicarCor(categoria_mn1, json[4].categoria);
        aplicarCor(categoria_mn2, json[11].categoria);
        aplicarCor(categoria_mn3, json[18].categoria);
        aplicarCor(categoria_mn4, json[25].categoria);
        aplicarCor(categoria_mn5, json[32].categoria);

        mata_sul.innerHTML = json[5].mesoregiao;
        categoria_ms1.innerHTML = json[5].categoria;
        categoria_ms2.innerHTML = json[12].categoria;
        categoria_ms3.innerHTML = json[19].categoria;
        categoria_ms4.innerHTML = json[26].categoria;
        categoria_ms5.innerHTML = json[33].categoria;

        aplicarCor(categoria_ms1, json[5].categoria);
        aplicarCor(categoria_ms2, json[12].categoria);
        aplicarCor(categoria_ms3, json[19].categoria);
        aplicarCor(categoria_ms4, json[26].categoria);
        aplicarCor(categoria_ms5, json[33].categoria);

        agreste.innerHTML = json[1].mesoregiao;
        categoria_agreste1.innerHTML = json[1].categoria;
        categoria_agreste2.innerHTML = json[8].categoria;
        categoria_agreste3.innerHTML = json[15].categoria;
        categoria_agreste4.innerHTML = json[22].categoria;
        categoria_agreste5.innerHTML = json[29].categoria;

        aplicarCor(categoria_agreste1, json[1].categoria);
        aplicarCor(categoria_agreste2, json[8].categoria);
        aplicarCor(categoria_agreste3, json[15].categoria);
        aplicarCor(categoria_agreste4, json[22].categoria);
        aplicarCor(categoria_agreste5, json[29].categoria);

        sertao_pernambuco.innerHTML = json[2].mesoregiao;
        categoria_sp1.innerHTML = json[2].categoria;
        categoria_sp2.innerHTML = json[9].categoria;
        categoria_sp3.innerHTML = json[16].categoria;
        categoria_sp4.innerHTML = json[23].categoria;
        categoria_sp5.innerHTML = json[30].categoria;

        aplicarCor(categoria_sp1, json[2].categoria);
        aplicarCor(categoria_sp2, json[9].categoria);
        aplicarCor(categoria_sp3, json[16].categoria);
        aplicarCor(categoria_sp4, json[23].categoria);
        aplicarCor(categoria_sp5, json[30].categoria);

        sertao_sao_francisco.innerHTML = json[3].mesoregiao;
        categoria_sf1.innerHTML = json[3].categoria;
        categoria_sf2.innerHTML = json[10].categoria;
        categoria_sf3.innerHTML = json[17].categoria;
        categoria_sf4.innerHTML = json[24].categoria;
        categoria_sf5.innerHTML = json[31].categoria;

        aplicarCor(categoria_sf1, json[3].categoria);
        aplicarCor(categoria_sf2, json[10].categoria);
        aplicarCor(categoria_sf3, json[17].categoria);
        aplicarCor(categoria_sf4, json[24].categoria);
        aplicarCor(categoria_sf5, json[31].categoria);

        fernando_de_noronha.innerHTML = json[6].mesoregiao;
        categoria_fn1.innerHTML = json[6].categoria;
        categoria_fn2.innerHTML = json[13].categoria;
        categoria_fn3.innerHTML = json[20].categoria;
        categoria_fn4.innerHTML = json[27].categoria;
        categoria_fn5.innerHTML = json[34].categoria;

        aplicarCor(categoria_fn1, json[6].categoria);
        aplicarCor(categoria_fn2, json[13].categoria);
        aplicarCor(categoria_fn3, json[20].categoria);
        aplicarCor(categoria_fn4, json[27].categoria);
        aplicarCor(categoria_fn5, json[34].categoria);
    })
    .catch((error) => console.log(error.message));

