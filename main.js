// VAriables

const loadingPage = document.getElementById("loadingPage");
const deployableButton = document.getElementById("deployable");
const deployMenu = document.getElementById("deployed");
const main = document.querySelector("main");
const ex = document.getElementById("ex");
const navSticky = document.querySelector("nav");
const elemGuide = document.querySelectorAll(".divider");
const deployList = document.getElementById("deployList");

let lightModeActivated = false;

const lightModeCSSTag = document.getElementById("linkLightModeCSS");
const lightDarkModeIcons = document.querySelectorAll(".lightDarkModeIcon");
const logo3speakComunidad = document.getElementById("logo3speakComunidad");
const logoHiveComunidad = document.getElementById("logoHiveComunidad");

const termsAccept = document.getElementById("aceptarTerminos");
const deployableTermsAndConditions = document.getElementById(
  "terminosYCondicionesDesplegable"
);
const deployButtonTermsAndConditions = document.getElementById(
  "terminosYCondiciones"
);

const deployArrow = document.querySelectorAll(".deployEventArrow");

//Inicio elementos padre donde se agregan los eventos.
const eventsShowed = document.getElementById("eventosMostrados");

const events2023 = document.getElementById("eventos2023");
let events2023ItsDeployed = false;

const events2022 = document.getElementById("eventos2022");
let events2022ItsDeployed = false;
//Fin elementos padre sonde se agregan los eventos

const eventScroll = document.getElementById("projectsScroll");
//Objeto que contiene la lista de la informacion de cada evento.
const eventsList = {
  title: [
    "Street Workout Duals Battles (SWDB) - 1º Edición",
    "Exhibición en INSAJUV",
    "Exhibición en UEP Jacob Pérez Carballo - Fe y Alegría",
    "4.- Exhibición en el Parque Recreativo y Deportivo “El Samán”",
    "5.- Exhibición en el Club Kiki Beach - Primera Exhibición Playera",
    "6.- Exhibición en el Centro Comercial Sambil Barquisimeto - Ciclo de Exhibiciones Nacionales",
    "7.- Exhibición en el Centro Comercial Sambil Valencia - Ciclo de Exhibiciones Nacionales",
    "8.- Exhibición de Street Workout en San Fernando de Apure - Cierre del Ciclo de Exhibiciones Nacionales",
    "9.- Copa Hive - 1° Edición",
    "10.- 1° Versus Amistoso 2023",
    "11.- 1° Versus por Modalidad",
    "12.- 2° Versus Amistoso 2023",
    "13.- Rehabilitación Parque de Barras Urbanización Fundación Mendoza",
    "14.- 2° Versus por Modalidad",
    "15.- 1° Versus por Categoría",
    "16.- Construcción Circuito de Barras Parque Las Ballenitas",
    "17.- Freestyle Day - 1° Edición",
    "18.- 2° Versus por Categoría",
    "19.- Competencia ONLYSTATIC - 1° Edición",
    "20.- Copa Dysfunction - 3° Edición",
    "21.- 3° Versus por Categoría",
    "22.- Competencia Calistenia Seps and Reps",
    "23.- Street Workout Duals Batles (SWDB) - 2° Edición",
  ],
  description: [
    `
    Fue una Competencia Nacional Abierta que se llevó a cabo en el
    Centro Comercial “Parque Los Aviadores”, Palo Negro, municipio
    Libertador, estado Aragua. La Administración del Centro Comercial
    “Parque Los Aviadores” accedió a darnos, de forma gratuita, el
    espacio de la Plaza Central para la realización de nuestro evento,
    sin fines de lucro. No se cobró por la participación de cada
    pareja de atletas. No hubo ningún tipo de desembolso financiero
    por parte de ningún atleta. Para ese evento contamos con el
    Permiso del Sistema Integral de Protección de Niños, Niñas y
    Adolescentes del municipio Libertador, Alcaldía del municipio
    Libertador, Superintendencia del Servicio Autónomo Tributario del
    municipio Libertador y Bomberos del estado Aragua. Se realizó
    Notificación a la Policía del municipio Libertador
    `,
    `
    Fue el primer evento del Ciclo de Exhibiciones en el estado
    Aragua. Se llevó a cabo en las instalaciones del Instituto
    Aragüeño de la Juventud (INSAJUV), Maracay, municipio Girardot,
    estado Aragua.
    `,
    `
    La Exhibición se llevó a cabo en las instalaciones de una
    institución educativa ubicada en Piñonal, parroquia Joaquín
    Crespo, Maracay, municipio Girardot, estado Aragua. El público de
    este evento fueron, en su totalidad, estudiantes de la
    institución, profesores y personal directivo de la misma. Fue un
    bloque en el cual todos los estudiantes tenían permiso para ir a
    la Exhibición, 250 estudiantes aproximadamente.
    `,
    `
    Esta Exhibición se llevó a cabo en las instalaciones de un parque
    biosaludable, el Parque Recreativo y Deportivo “El Samán”, Turmero,
    municipio Santiago Mariño, estado Aragua.
    `,
    `
    Primer evento organizado por SWC fuera del estado Aragua. Fue el inicio del
    Ciclo de Exhibiciones Nacionales. Se llevó a cabo en un escenario físico
    natural playero, el Club Kiki Beach, Playa Waikiki, Puerto Cabello, estado
    Carabobo.
    `,
    `
    Esta Exhibición se llevó a cabo en un espacio totalmente cerrado y bajo
    techo, específicamente en la zona adyacente a la Gran Feria del Centro
    Comercial Sambil Barquisimeto, Barquisimeto, municipio Iribarren, estado
    Lara.
    `,
    `
    Esta Exhibición se llevó a cabo en un espacio totalmente cerrado y bajo
    techo, específicamente en los espacios de 2da. Base, Nivel Autopista, Centro
    Comercial Sambil Valencia, municipio Naguanagua, estado Carabobo.
    `,
    `
    Esta Exhibición se llevó a cabo en San Fernando de Apure, específicamente en
    el Gimnasio Cubierto "12 de Febrero", adscrito a FundeApure, ente adscrito a
    la Gobernación del estado Apure. Gran receptividad en medios de
    comunicación. Entrevistas, al Equipo Organizador, en 4 emisoras de radio y
    una entrevista en la televisora regional.
    `,
    `
    La Copa Hive, en su 1° Edición, fue una Competencia por Categoría exclusiva
    para atletas de SWC. Se llevó a cabo en las instalaciones del Centro
    Comercial Sambil Barquisimeto, Barquisimeto, municipio Iribarren, estado
    Lara. Las categorías fueron Amateur, Semi-Profesional y Profesional,
    respectivamente. El Jurado estuvo conformado por Jueces de Combinaciones,
    Dinámicos, Estáticos y Power Moves. En el Pódium 9 atletas, tres atletas por
    cada una de las categorías.
    `,
    `
    Fue el primer evento organizado por SWC en el año 2023, en su mes
    aniversario. Fue un Versus por Aleatoriedad abierto. Al ser un Versus por
    Aleatoriedad, la definición del sorteo no toma en cuenta la categoría del
    atleta; es decir, pueden llegar a participar en el Versus atletas de
    diferentes categorías. Fue un Versus abierto, en el cual participaron
    atletas de SWC y atletas que no forman parte de nuestra comunidad. Se llevó
    a cabo en el Parque “El Ejército” o como le llaman popularmente, Parque “Las
    Ballenas”, Maracay, parroquia Las Delicias, municipio Girardot, estado
    Aragua. En el Pódium 3 atletas.
    `,
    `
    Primer evento que SWC organiza conjuntamente con la Gerencia de Publicidad y
    Eventos del Centro Comercial Parque Los Aviadores, con las barras portátiles
    y equipamiento de SWC. En la historia del Street Workout en Venezuela,
    primera vez que se realiza este tipo de Versus en nuestra nación. Las
    Modalidades evaluadas por los Jueces en este Versus fueron Estáticos,
    Dinámicos y Combinaciones, respectivamente. En este tipo de Versus puede
    llegar a clasificar un atleta en varias Modalidades. De la mano de su
    creador, @manuelramos, se llevó a cabo el 1° Versus por Modalidad, en el
    Centro Comercial Parque Los Aviadores, el centro comercial más grande de
    Venezuela, ubicado en Palo Negro, municipio Libertador, estado Aragua. En el
    Pódium 3 atletas, un atleta por cada Modalidad.
    `,
    `
    Es el segundo Versus por Aleatoriedad abierto que organiza SWC en su mes
    aniversario. Se llevó a cabo en las instalaciones del Parque Recreativo y
    Deportivo “El Samán”, con las barras portátiles y equipamiento de SWC,
    Turmero, municipio Santiago Mariño, estado Aragua.
    `,
    `
    Este parque fue rehabilitado por personal técnico especializado bajo la
    supervisión de un Ingeniero Mecánico y Manuel Ramos, el CEO de SWC. Después
    que fueron rehabilitadas las barras, los atletas de SWC se dedicaron a
    pintar todo el circuito de barras y a limpiar todo el espacio. También
    personal técnico especializado realizó la reparación del alumbrado eléctrico
    del parque para beneficiar a los atletas de SWC y a las abuelas que hacen
    yoga en las noches. Ellas habían dejado de hacer yoga porque no había
    iluminación en el área.
    `,
    `
    El segundo Versus por Modalidad se llevó a cabo en las instalaciones del
    Parque de Barras de la Urbanización Fundación Mendoza, Maracay, estado
    Aragua. Las Modalidades evaluadas por los Jueces en esta oportunidad fueron
    Estáticos, Dinámicos, Combinaciones y Power Move, respectivamente Fue
    realizado este Versus para inaugurar el circuito de barras que SWC había
    rehabilitado, con apoyo financiero de Hive Blockchain. En el Pódium 4
    atletas, un atleta por cada modalidad.
    `,
    `
    El 1° Versus por Categoría se llevó a cabo en el Parque de Barras Base
    Aragua, Urbanización Base Aragua, parroquia Las Delicias, Maracay, estado
    Aragua. Las Categorías evaluadas por los Jueces fueron Amateur,
    Semi-Profesional y Profesional, respectivamente. En el Pódium 9 atletas, 3
    atletas por cada Categoría.
    `,
    `
    La Construcción del Circuito de Barra fue una experiencia enriquecedora que
    involucró varias reuniones con los vecinos y autoridades municipales. El
    permiso fue otorgado por Ingeniería Municipal de la Alcaldía de Girardot
    previa evaluación del proyecto formulado por SWC. En la construcción
    participó personal técnico especializado y atletas, que en 3 días, ya habían
    culminado la obra; con la supervisión diaria del CEO de SWC. Que mejor
    Ciruito de Barras que este, fruto del esfuerzo y trabajo en equipo. Gracias
    a las gestiones de @manuelramos y con el apoyo financiero de Hive Blockchain
    tenemos un extraordinario Circuito de Barras en el Parque Las Ballenitas.
    También fue rehabilitado el alumbrado del parque. La mejor forma de celebrar
    este logro fue la realización del Freestyle Day - 1° Edición.
    `,
    `
    El Freestyle Day en su 1° Edición se llevó a cabo en el Circuito de Barras
    del Parque Las Ballenitas, ubicado en la parroquia Joaquín Crespo, municipio
    Girardot, estado Aragua. Después de la experiencia de lo que fue la
    Construcción del Circuito de Barras en el Parque Las Ballenitas, decidimos
    realizar este evento para compartir con nuestros atletas y el público que
    asistió, una tarde llena de adrenalina. 3 atletas en el Podium.
    `,
    `
    El 2° Vesus por Categoría se llevó a cabo en el Polideportivo Diego Armando
    Maradona, ubicado en la ciudad de Puerto Cabello, estado Carabobo. En este
    evento participaron atletas de los estados Apure, Aragua y Carabobo,
    respectivamente. Las Categorías evaluadas por los Jueces fueron Amateur,
    Semi- Profesional y Profesional, respectivamente. En el Pódium 9 atletas, 3
    atletas por cada Categoría.
    `,
    `
    La Competencia ONLYSTATIC - 1° Edición, fue el primer evento internacional organizado por SWC. Fue realizada en el Gimnasio Cubierto Infinity Gimnastycs, en la comunidad de Mosquera, Cundinamarca, área metropolitana de la ciudad de Bogotá, Colombia.Participaron atletas de las Categorías Élite y Profesional, respectivamente. La evaluación de los atletas fue realizada por jueces especialistas en Planchas, Front Lever y Combinaciones. En el Podium 6 atletas.
    `,
    `
    La Copa Dysfunction - 3° Edición fue un evento de 3 días consecutivos, se
    llevó a cabo en el Parque Metroplitano El Tunal, al Sur de la ciudad de
    Bogotá, Colombia. Participaron atletas de toda Colombia en las categorías
    Amateur, Avanzado y Profesional. Se contó con Jueces internacionales en este
    evento. 9 atletas en el Podium.
    `,
    `
    El 3° Vesus por Categoría se llevó a cabo en el Parque Santa Elena Workout,
    ubicado en la ciudad de Barquisimeto, estado Lara. En este evento
    participaron atletas de los estados Apure, Aragua, Carabobo, Lara y Yaracuy.
    Los Jueces especialistas en Estáticos, Dinámicos, Power Moves y
    Combinaciones. Las Categorías evaluadas por los Jueces fueron Amateur,
    Semi-Profesional y Profesional, respectivamente. En el Pódium 9 atletas, 3
    atletas
    `,
    `
    Esta competencia se llevó a cabo en el Parque Santa Elena Workout, ubicado
    en la ciudad de Barquisimeto, estado Lara. En este evento participaron
    atletas de toda Venezuela, participaron más de 60 atletas en total. En el
    marco de este evento hubo una Exhibición de Street Workout. Los atletas
    evaluados por jueces especialistas. En el Podium 4 atletas, 3 atletas por la
    competencia de Calistenia y 1 atleta por la mejor exhibición de Street
    Workout.
    `,
    `
    Fue una Competencia Nacional exclusiva para atletas de SWC, se llevó a cabo
    por segunda vez consecutiva; en el Centro Comercial “Parque Los Aviadores”,
    Palo Negro, municipio Libertador, estado Aragua. La Junta de Accionistas del
    Centro Comercial “Parque Los Aviadores” accedió a darnos, de forma gratuita,
    la Plaza Central para la realización de la SWDB - 2° Edición, por ser un
    evento sin fines de lucro para SWC. No se cobró por la participación de cada
    pareja de atletas. No hubo ningún tipo de desembolso financiero por parte de
    ningún atleta. Para ese evento contamos con el Permiso del Sistema Integral
    de Protección de Niños, Niñas y Adolescentes del municipio Libertador,
    Alcaldía del municipio Libertador, Superintendencia del Servicio Autónomo
    Tributario del municipio Libertador y Bomberos del estado Aragua. Fue una
    competencia extraordinaria tanto en su organización como en la puesta en
    escena de los atletas. Contamos con jueces internacionales. Fue un evento
    desarrollado con amor, compromiso y profesionalismo.
    `,
  ],
  fecha: [
    "7 de mayo de 2022",
    "27 de mayo de 2022",
    "20 de junio de 2022",
    "25 de junio de 2022",
    "22 de julio de 2022",
    "11 de septiembre de 2022",
    "8 de octubre de 2022",
    "26 de noviembre de 2022",
    "20 de diciembre de 2022",
    "14 de enero de 2023",
    "22 de enero de 2023",
    "28 de enero de 2023",
    "05 - 10 de febrero de 2023",
    "11 de febrero de 2023",
    "18 de febrero de 2023",
    "15 de marzo",
    "26 de marzo de 2023",
    "8 de abril de 2023",
    "9 de abril de 2023",
    "28, 29 y 30 de abril de 2023",
    "30 de abril de 2023",
    "20 de mayo de 2023",
    "11 de junio de 2023",
  ],
  informacion: [
    "https://hive.blog/hive-108943/@swc-oficial/street-workout-duals-battles-1o-edicion-swbd-esp-or-eng",

    "https://hive.blog/hive-108943/@swc-oficial/ckjobzka",

    "https://hive.blog/hive-108943/@swc-oficial/ciclo-de-exhibiciones-aragua-2022-u-e-p-jacob-perez-carballo-fe-y-alegria-esp-or-eng",

    "https://hive.blog/hive-108943/@swc-oficial/ciclo-de-exhibiciones-aragua-2022-parque-el-saman-esp-or-eng",

    "https://hive.blog/hive-108943/@marlenyaragua/street-workout-kiki-beach-club-swc-en-su-primera-exhibicion-playera-or-esp-eng-or-street-workout-kiki-beach-club-swc-at-its",

    "https://hive.blog/hive-108943/@marlenyaragua/hiveswcbqto-or-exhibicion-de-street-workout-en-barquisimeto-swc-en-el-ciclo-de-exhibiciones-nacionales-or-esp-eng-or-street",

    "https://hive.blog/hive-108943/@marlenyaragua/exhibicion-de-street-workout-en-sambil-valencia-swc-en-el-cclo-de-exhibiciones-nacionales-or-esp-eng-or-street-workout",

    "https://hive.blog/hive-108943/@marlenyaragua/exhibicion-de-street-workout-en-apure-or-cierre-del-ciclo-de-exhibiciones-nacionales-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/copa-hive-1o-edicion-or-competencia-de-street-workout-en-el-sambil-barquisimeto-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/primer-versus-amistoso-swc-2023-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/primer-versus-por-modalidad-or-swc-en-el-centro-comercial-parque-los-aviadores-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/segundo-versus-amistoso-swc-2023-or-esp-eng-or",

    "https://hive.blog/trending/hive-108943",

    "https://hive.blog/hive-108943/@marlenyaragua/segundo-versus-por-modalidad-or-swc-en-el-parque-de-la-urbanizacion-fundacion-mendoza-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/primer-versus-por-categoria-or-swc-en-el-parque-base-aragua-or-esp-eng-or",

    "https://hive.blog/trending/hive-108943",

    "https://hive.blog/hive-108943/@marlenyaragua/freestyle-day-1-edicion-or-parque-las-ballenitas-or-esp-eng-or",

    "https://hive.blog/hive-108943/@marlenyaragua/segundo-versus-por-categoria-or-swc-en-el-polideportivo-diego-armando-maradona-or-esp-eng-or",

    "https://hive.blog/hive-108943/@angelrvzl/tkrksxwa",

    "https://hive.blog/hive-108943/@angelrvzl/tmuatzpg",

    "https://hive.blog/hive-108943/@marlenyaragua/3-versus-por-categoria-or-swc-en-el-parque-santa-elena-workout-or-esp-eng-or",

    "https://hive.blog/hive-108943/@kelvinh-sew/qucanjnm",

    "https://hive.blog/hive-108943/@marlenyaragua/street-workout-duals-battles-2o-edicion-or-competencia-en-el-centro-comercial-parque-los-aviadores-or-esp-eng-or",
  ],
  instagram: [
    "https://www.instagram.com/p/CfLRAaEsXUT/",
    "https://www.instagram.com/p/CfeHhtyuduN/",
    "https://www.instagram.com/p/Cff5eEZscRs/",
    "https://www.instagram.com/p/CfrIwQru6nZ/",
    "https://www.instagram.com/p/CgwzJensR50/",
    "https://www.instagram.com/p/CitLTS2sJaQ/",
    "https://www.instagram.com/p/CjqC_PIjPd-/",
    "https://www.instagram.com/reel/CmpOm-YB3m3/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/Cmqw2Zphxf3/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/Cp1qir8vB0_/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrOJFoiuPyb/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrOS_JxucAj/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/streetworkoutcommunity/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrOkcxON9H_/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrPrGlauzaa/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CqsoldNrxIi/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrPwP1ps3mz/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/reel/CrP46MMNzPm/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/streetworkoutcommunity/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/streetworkoutcommunity/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/streetworkoutcommunity/?igshid=YmMyMTA2M2Y%3D",
    "https://www.instagram.com/streetworkoutcommunity/?igshid=YmMyMTA2M2Y%3D",
  ],
  imgs: [
    [
      "https://drive.google.com/file/d/1kCCVSs-NqBgXAL3VF0cpc5Dgb4Xr69d-/view?usp=drive_link",
      "https://drive.google.com/file/d/1GqPPJMWd6C1uDDpgtg_-oM0YfUaV_r8W/view?usp=drive_link",
      "https://drive.google.com/file/d/1SFvBGQHR0lSPIhPkw7Z__iJ_t3OX9HmA/view?usp=drive_link",
      "https://drive.google.com/file/d/1xmWAbyc4iGsh64awKjZNrdZvcMmMp67G/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1ceswKTjpzgrJG5wWk3BY8BMitAfGCwOk/view?usp=drive_link",
      "https://drive.google.com/file/d/1N_f3Ao8SS12is1tKE0WRW05H3Itye1Sk/view?usp=drive_link",
      "https://drive.google.com/file/d/1Z1SNtc4tEZRWbxOJooGni9Frcn1IZYyb/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1o_2kg-68cbxCEqXUB-ry5T_BfrJF_q87/view?usp=drive_link",
      "https://drive.google.com/file/d/1wDT9BrkTYS5DGpuIyhnSsZgBmvD6sged/view?usp=drive_link",
      "https://drive.google.com/file/d/1J8Enzs2DL6srVu8j5auGhTHec4qmQVEa/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1oNuzWUP6USVQj8sGLki70SFVSl4-bT1R/view?usp=drive_link",
      "https://drive.google.com/file/d/10UZgMpFTBMmmIGL1Rwwz5ZQ8yTS_L1wU/view?usp=drive_link",
      "https://drive.google.com/file/d/1no5yUid6DZsxcNAUxW_M5EIPeVr9X4yA/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1L7DfVbJTxsy28Jbv34PsKkaIKXbk4BSD/view?usp=drive_link",
      "https://drive.google.com/file/d/1PfA-PI5K3pmwfPcwFU-LFgekTrML5kfr/view?usp=drive_link",
      "https://drive.google.com/file/d/1fW74-1GZiRmj--BMMN8vB7U_YHpjf_mi/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1_vvHcZlzYiQ02Sd3IuyV83X-ZJ5Ogdj4/view?usp=drive_link",
      "https://drive.google.com/file/d/1xxOZc8730FkQo-eq1Ki85E5RWQ1T8cxB/view?usp=drive_link",
      "https://drive.google.com/file/d/1d-2Kuk2DbPiDp_AJRcbV5VS_zJ1xPgJK/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1OQ7AVnmbUKj_WBvYFmtxc6hPhRqHDRNA/view?usp=drive_link",
      "https://drive.google.com/file/d/1h3qpbMCd22tgh6V1mqxM_Y9N6SYXytKi/view?usp=drive_link",
      "https://drive.google.com/file/d/1yUUQ0R66WzwbQ_tuyPJRE7oZfg5_QR52/view?usp=drive_link",
      "https://drive.google.com/file/d/1AhN9RXE1kKq5Zsygc8xQ8FWP5v0aGLXV/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1wlmMYCDsfNSmbTdWPDapTpz6FnleFkT4/view?usp=drive_link",
      "https://drive.google.com/file/d/1f4AQ6Wv9FCwfH4HPfcjONoJsHqKa3reX/view?usp=drive_link",
      "https://drive.google.com/file/d/1srGnJF22NR2stafSymQ032rTGqdzYsVn/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/14_QMZxsBcEtEsmnqwoOpQKQO2b8YTlnT/view?usp=drive_link",
      "https://drive.google.com/file/d/1xU0WKz-f90L2EzI7AQFggOgRnI441RdG/view?usp=drive_link",
      "https://drive.google.com/file/d/1UcdZWXQ1Kqzva--lRipiRsfuWl5Tq1CD/view?usp=drive_link",
      "https://drive.google.com/file/d/1ro__QCjChDNzG6WAoANbi3zZyXbOGZl7/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1T8iHpwKgWT_i8Mz1OjZFi8QDWd7H2KW3/view?usp=drive_link",
      "https://drive.google.com/file/d/1wPVJuproBFDH8lXHAu_4O54T1X6lQqCR/view?usp=drive_link",
      "https://drive.google.com/file/d/18XpHqSEIWeMGpeFNpRZqKqhj1sjA2Lq3/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/18DGO6NK91OrMy4CCmTE34IopE80MPBDc/view?usp=drive_link",
      "https://drive.google.com/file/d/1uJNIkCHtgPXJbpljl3QNBKwu126zh3Kw/view?usp=drive_link",
      "https://drive.google.com/file/d/1b2lqYOz3ITDgd00J6VUiZAaZmAfIRo60/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1BFN-gkN6_hckDYgc6IUE0pm-2tLw1S6b/view?usp=drive_link",
      "https://drive.google.com/file/d/1a2Mt8v3hFUdaRnI0cDMMjfYmejyKQjQx/view?usp=drive_link",
      "https://drive.google.com/file/d/1rfedOvtT_00-erc9Bux-4QrkF8Zp7sST/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1pKjAESiHJPkFuRkONKZ3GkR60dSwBhit/view?usp=drive_link",
      "https://drive.google.com/file/d/14OuKkPhPm5PMS47F1lG_hVZreC-5IQyd/view?usp=drive_link",
      "https://drive.google.com/file/d/1bTJe3C_wrCtvYsgBUavyJ91Kg0stO3S_/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1llwNRomlKLlBvngN2v_QtTfyZanB1gF1/view?usp=drive_link",
      "https://drive.google.com/file/d/1EZmRuBE4MBoq4tssxrWhuxC5Q1qaAEQ9/view?usp=drive_link",
      "https://drive.google.com/file/d/1XaonBdD7rKBmHYdgW9tXP9pLURxq_HDR/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1U9AKbH73UXh5VNtPVFQYqEZzjRH5clWN/view?usp=drive_link",
      "https://drive.google.com/file/d/1_YtviG6SfI8hYnSnXsHp7w60PBs4d3wG/view?usp=drive_link",
      "https://drive.google.com/file/d/1focTieFbo2qoF9QevbdXXUKBj97LgUDn/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1dheRvuXyq8fo5ZvcszZWzb8gFN3-NKh7/view?usp=drive_link",
      "https://drive.google.com/file/d/10lUtcRntdZwGZQOZPRYlgF-AGi_CnBjW/view?usp=drive_link",
      "https://drive.google.com/file/d/130UQZomwA26JmnejNCAsrnnVc50R3RES/view?usp=drive_link",
      "https://drive.google.com/file/d/1Zdlreo2DWytwSoW2bLCXpToXeG9-kVrf/view?usp=drive_link",
      "https://drive.google.com/file/d/1Khh4vOp6kWKTbSSKjjtXPRwyEFBiramh/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/19Dx10HghQpB1RG4E31U40yEUQVCUEph4/view?usp=drive_link",
      "https://drive.google.com/file/d/1_SjJiSoWWVB1orcBOHf4BIWJgMYve-gv/view?usp=drive_link",
      "https://drive.google.com/file/d/1kKBRU9mlMXLTG6mzQZL1q1Jux-l26azS/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1FCqItZf37RJZYfo0QL_ckWPFQnjSAon8/view?usp=drive_link",
      "https://drive.google.com/file/d/1IpzcmJWz5pUY5fpWD-dtrZqU-QeRe5C5/view?usp=drive_link",
      "https://drive.google.com/file/d/1xdYtPDb4eTzRABE_rv87DD0pe_4VC8uj/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/19S4RZtogntiLM1bRN2jOx1LrbiVVaVf0/view?usp=drive_link",
      "https://drive.google.com/file/d/1iYKovAht2fzcpaTMptb8EcMlAzMaXknz/view?usp=drive_link",
      "https://drive.google.com/file/d/1UY8tNswivlnCMCqeMtW5wWr_G1Ny8X61/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1gDJpBwaCslsYTUIQXt2VskvSp1nUMUHm/view?usp=drive_link",
      "https://drive.google.com/file/d/1QTXPBsKeMOTU-Y_clHdjc8uDqkUY_f9Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1b9EC2MxGf3LFhhi2cVTXwGxRjBSeERfN/view?usp=drive_link",
      "https://drive.google.com/file/d/1WZtaLoEuM6W-4cnCAxRv3V7fI3AVHUmQ/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1WwBZOiUjlaAJhuHXc_P_X8FkjPWfqb3R/view?usp=drive_link",
      "https://drive.google.com/file/d/1em2aWcwe0R-QjNAMO64pMXCJ-n-wN_9f/view?usp=drive_link",
      "https://drive.google.com/file/d/1wuyDRfhqrMKOndj2oHrBgO0xUKPog0KA/view?usp=drive_link",
      "https://drive.google.com/file/d/12rl803bPAGOWlTctYe1vfm3swLzmUObr/view?usp=drive_link",
      "https://drive.google.com/file/d/1unJd4lv8rBXbD5TUzG3IWDCvsDhE-2ZC/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1XrNb-CEDUzj_gMZ7nt4JiCpD2mBo2wfM/view?usp=drive_link",
      "https://drive.google.com/file/d/1MmIoNSugYIToIv5sHhxXKlCBd7Wih-us/view?usp=drive_link",
      "https://drive.google.com/file/d/1WcNpLgZ4DErcLhitn2OS8Inc3cbrwysy/view?usp=drive_link",
      "https://drive.google.com/file/d/1EsqWKgmlkssGQSQTjHDLUBH3brvtL2Gj/view?usp=drive_link",
    ],
    [
      "https://drive.google.com/file/d/1ObvRzHJfMsBOweEI7DYFlcw5wgf1d5_z/view?usp=drive_link",
      "https://drive.google.com/file/d/1dUIU_gOxc_TXqADY5HowZ6iCsX12Vemi/view?usp=drive_link",
      "https://drive.google.com/file/d/1h7kG6TCYz7DuprqZhZL8J5snsAZiy-rJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1rOrQgt_gQUHEARd2czBC7pdzl-7z5fTm/view?usp=drive_link",
      "https://drive.google.com/file/d/1i_WN4nexdbcjUETC2Xe2F4fH0TuUNetE/view?usp=drive_link",
    ],
  ],
};

//Limites de qué eventos se van a insertar segun el padre.
const eventsListShowed = [0, 3];
const eventsList2022 = [3, 9];
const eventsList2023 = [9, eventsList.title.length];

let navItsDeployed = false;

// Eventos

//Eventos de los botones para desplegar events2022
deployArrow[0].addEventListener("click", () => {
  // Se ejecuta una condicional para saber cual es el estado del desplegable y se niega
  if (!events2022ItsDeployed) {
    //Si es true se agrega el display block y con un set timeout, nos aseguramos que se visualice una animacion
    events2022.style.display = "block";
    setTimeout(() => {
      events2022.style.opacity = "1";
    }, 1);
    events2022ItsDeployed = true;
    deployArrow[0].style.transform = "rotate(180deg)";
  } else {
    //En caso contrario, se realiza la animacion, y esperamos a que termine para aplicar el display none
    events2022.style.opacity = "0";
    setTimeout(() => {
      events2022.style.display = "none";
    }, 400);
    events2022ItsDeployed = false;
    deployArrow[0].style.transform = "rotate(0deg)";
  }
  // Se ejecuta una condicional luego de la ejecucion de las animaciones para evitar bugs debido a los timers
  setTimeout(() => {
    if (events2022ItsDeployed) {
      events2022.style.display = "block";
      events2022.style.opacity = "1";
    } else {
      events2022.style.display = "none";
      events2022.style.opacity = "0";
    }
  }, 401);
});

// Este evento funciona exactamente igual que la anterior pero despliega events2023
deployArrow[1].addEventListener("click", () => {
  if (!events2023ItsDeployed) {
    events2023.style.display = "block";
    events2023ItsDeployed = true;
    setTimeout(() => {
      events2023.style.opacity = "1";
    }, 1);
    deployArrow[1].style.transform = "rotate(180deg)";
  } else {
    events2023.style.opacity = "0";
    setTimeout(() => {
      events2023.style.display = "none";
    }, 400);
    events2023ItsDeployed = false;
    deployArrow[1].style.transform = "rotate(0deg)";
  }
  setTimeout(() => {
    if (events2023ItsDeployed) {
      events2023.style.display = "block";
      events2023.style.opacity = "1";
    } else {
      events2023.style.display = "none";
      events2023.style.opacity = "0";
    }
  }, 401);
});

// Evento del boton de desplegar menu Nav responsive
deployList.addEventListener("click", (e) => {
  deployMenu.style.opacity = "0";
  setTimeout(() => {
    deployMenu.style.display = "none";
    navItsDeployed = false;
  }, 500);
});

//Inicio Eventos Pagina de Carga y carga de pagina

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadingPage.style.display = "none";
  }, 2000);

  // Evento que agrega los eventos realizados por SWC; el primer parametro indica los elementos que se van a agregar, y el segun parametro indica el elemento al que se van a agregar.
  addEvents(eventsList2022, events2022);
  addEvents(eventsList2023, events2023);
  addEvents(eventsListShowed, eventsShowed);
});

// Evento que identifica si uno de las flechas de los sliders / galerias de imagens, ha sido clickeado.
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons")) {
    //De ser ese el caso, se envia como parametros el elemento que fue tocado, y el elemento padre del elemento que lo contiene.
    moveEvent(e.target.value, e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("imageSlider")) {
    let link = e.target.getAttribute("data-value");
    window.open(link);
  } else if (
    e.target.classList.contains("lightDarkModeIcon") ||
    e.target.classList.contains("toggleDarkLightMode")
  ) {
    darkLightMode();
  }
});

window.onload = () => {
  loadingPage.style.display = "none";
};

//Fin Eventos Pantalla de carga y carga de pagina

// Eventos menu desplegable responsive

// Evento del boton para desplegar el menu aplicando props CSS
deployableButton.onclick = () => {
  deployMenu.style.display = "block";
  setTimeout(() => {
    deployMenu.style.opacity = "1";
    navItsDeployed = true;
  }, 10);
};

// Evento del boton para cerrar el menu quitando props CSS
ex.onclick = () => {
  deployMenu.style.opacity = "0";
  setTimeout(() => {
    deployMenu.style.display = "none";
    navItsDeployed = false;
  }, 500);
};

window.onscroll = () => {
  if (navItsDeployed) {
    deployMenu.style.opacity = "0";
    setTimeout(() => {
      deployMenu.style.display = "none";
      navItsDeployed = false;
    }, 500);
  }

  //Fin eventos menu desplegable responsive

  // Inicio barra nav Sticky
  // Si el elemento guia (Divisor de la seccion principal a la seccion), esta a 200 pixeles de el tope del viewport o mas arriba, se agregan propiedades CSS
  if (elemGuide[0].getBoundingClientRect().top < 200) {
    navSticky.style.position = "fixed";
    navSticky.style.backgroundColor = "rgb(11, 11, 18)";
    navSticky.style.top = "0";
    navSticky.style.opacity = "0";
    navSticky.style.opacity = "1";
    navSticky.style.borderBottom = "lightgrey 1px solid";
    navSticky.style.color = "white";
  } else {
    // si no es asi se eliminan las propiedades CSS
    navSticky.style.top = "2vh";
    navSticky.style.position = "absolute";
    navSticky.style.borderBottom = "none";
    navSticky.style.backgroundColor = "transparent";
  }
};

// FIn Eventos de Barra Nav Sticky

// Eventos aceptar terminos, desplegar el menú y esconderlo

termsAccept.addEventListener("click", () => {
  deployableTermsAndConditions.style.opacity = "0";
  setTimeout(() => {
    deployableTermsAndConditions.style.display = "none";
  }, 500);
});

deployButtonTermsAndConditions.addEventListener("click", () => {
  deployableTermsAndConditions.style.display = "block";
  setTimeout(() => {
    deployableTermsAndConditions.style.opacity = "1";
  }, 1);
});

// Funciones

// Función que agrega los divs html de cada evento del objeto EventsList
function addEvents(eventPrint, fatherEventDiv) {
  for (let i = eventPrint[0]; i < eventPrint[1]; i++) {
    console.log(i);
    let event = `<div>
    <h2>${eventsList.title[i]}</h2>
    <p>
      ${eventsList.description[i]}
    </p>
    <h3>Fecha de realización: ${eventsList.fecha[i]}.</h3>
    <h3>Información del evento e imágenes</h3>
    <p>
      <a href="${eventsList.informacion[i]}">Click aquí</a>
      para visualizar las imagenes del evento.
    </p>
    <h3>Instagram</h3>
    <p><a href="${
      eventsList.instagram[i]
    }">Click aquí</a> para Ver el instagram.</p>
    <div class="eventNav" data-value="0">
                <ul id="moveButtons">
                    <li class="buttons" value="1"><</li>
                    <li class="buttons" value="2">></li>
                </ul>
            </div>
            <div class="sliderContainer">
                ${eventImgSumHTML(transfDriveLink(eventsList.imgs[i]))}
            </div>
  </div>`;
    fatherEventDiv.insertAdjacentHTML("beforeend", event);
    console.log("agregado evento " + i);
  }
}

// Funcion que agrega funcionalibilidad a los botones de los sliders / galerias
function moveEvent(target, parentDiv) {
  // Se mueve el scroll a 0 para utilizarlo de referencia
  parentDiv.scroll(0, 0);
  // Si se presiona el primer boton, se disminuye el valor del data-value que contiene una referencia de donde se encuentra ubicado el slider
  if (target == 1) {
    if (parseInt(parentDiv.getAttribute("data-value")) > 0) {
      parentDiv.setAttribute(
        "data-value",
        parseInt(parentDiv.getAttribute("data-value")) - 1
      );
    }
  }
  // Si se presiona el segundo boton, se aumenta el valor del data-value que contiene una referencia de donde se encuentra ubicado el slider
  else if (target == 2) {
    if (
      parseInt(parentDiv.getAttribute("data-value")) <
      parentDiv.nextElementSibling.childElementCount - 1
    )
      parentDiv.setAttribute(
        "data-value",
        parseInt(parentDiv.getAttribute("data-value")) + 1
      );
  }
  // Luego de que se identifica que boton se presiono, se utiliza el valor de referencia del data-value y se multiplica para hacer scroll
  // En CSS cada elemento dentro del slider tiene un width del 100%, por lo que para moverse por los demas elementos habria que multiplicar el width del div por el data-value y hacer el scroll (Que es hidden)
  parentDiv.nextElementSibling.scroll(
    parentDiv.nextElementSibling.clientWidth *
      parseInt(parentDiv.getAttribute("data-value")),
    0
  );
}

// Funcion que agrega los divs contenedores de las imagenes de cada evento, para luego ser insertadas en el slider
function eventImgSumHTML(arrayImgs) {
  let newDivImgArray = arrayImgs.map((img) => {
    let divImg = `<div><div class="imageSlider" data-value="${img}" style="background-image: url(${img}); background-position: center; background-size: cover;"></div></div>`;
    return divImg;
  });
  let HTMLToInject = "";
  for (i = 0; i < newDivImgArray.length; i++) {
    HTMLToInject += newDivImgArray[i];
  }
  return HTMLToInject;
}

// Funcion que modifica las hojas de estilo dependiendo del modo seleccionado, y cambia los iconos necesarios
function darkLightMode() {
  if (lightModeActivated) {
    lightModeCSSTag.removeAttribute("href");
    lightModeActivated = false;
    lightDarkModeIcons[0].setAttribute("src", "assets/icons/darkMode.svg");
    lightDarkModeIcons[1].setAttribute("src", "assets/icons/darkMode.svg");
    logo3speakComunidad.setAttribute("src", "assets/3speakLogo.png");
    logoHiveComunidad.setAttribute("src", "assets/logoHive2.png");
  } else {
    lightModeCSSTag.setAttribute("href", "lightModeTrue.css");
    lightModeActivated = true;
    lightDarkModeIcons[0].setAttribute("src", "assets/icons/lightMode.svg");
    lightDarkModeIcons[1].setAttribute("src", "assets/icons/lightMode.svg");
    logo3speakComunidad.setAttribute("src", "assets/3speakLogo2.png");
    logoHiveComunidad.setAttribute("src", "assets/logoHive3.png");
  }
}

// Funcion que inserta los ID de los links directos de Google Drive dentro de un formato valido para HTML, para reducir el tiempo necesario para insertar nuevos eventos. Puede recibir un array de links GD o un link unico.
function transfDriveLink(links) {
  if (Array.isArray(links)) {
    links = links.map((link) => {
      let id = link.slice(32, 65);
      return `http://drive.google.com/uc?export=view&id=${id}`;
    });
  } else if (typeof links === "string") {
    let id = links.slice(32, 65);
    return `http://drive.google.com/uc?export=view&id=${id}`;
  } else {
    console.log("Ingrese un array de links de Drive o un link unico de Drive");
  }
  return links;
}
