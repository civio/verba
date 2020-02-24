<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <div class="verba-vignettes">
      <ul class="vignettes-titles">
        <li @click="onClickShowVignette('vignette01')">
          <a href="#vignette01">
            <img
              id="vignette01-img"
              class="vignette-img"
              src="./images/ficha01-ultraderecha.png"
              alt
            />
            <h3>La ultraderecha son los otros</h3>
          </a>
        </li>
        <li @click="onClickShowVignette('vignette02')">
          <a href="#vignette02">
            <img id="vignette02-img" class="vignette-img" src="./images/ficha02-corrupcion.png" alt />
            <h3>Gürtel y los ERE, casi empatados</h3>
          </a>
        </li>
        <li @click="onClickShowVignette('vignette03')">
          <a href="#vignette03">
            <img id="vignette03-img" class="vignette-img" src="./images/ficha03-dieta.png" alt />
            <h3>El rigor científico, a dieta</h3>
          </a>
        </li>
        <li @click="onClickShowVignette('vignette04')">
          <a href="#vignette04">
            <img id="vignette04-img" class="vignette-img" src="./images/ficha04-mariano.png" alt />
            <h3>Rajoy sigue vivo</h3>
          </a>
        </li>
        <li @click="onClickShowVignette('vignette05')">
          <a href="#vignette05">
            <img
              id="vignette05-img"
              class="vignette-img"
              src="./images/ficha05-cambio-climatico.png"
              alt
            />
            <h3>No había crisis climática hasta 2019</h3>
          </a>
        </li>
        <li @click="onClickShowVignette('vignette06')">
          <a href="#vignette06">
            <img
              id="vignette06-img"
              class="vignette-img"
              src="./images/ficha06-coronavirus.png"
              alt
            />
            <h3>La fiebre (informativa) del coronavirus</h3>
          </a>
        </li>
      </ul>
      <ul class="vignettes-copies">
        <!-- Tema 1 - la ultraderecha -->
        <li id="vignette01" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">La ultraderecha son los otros</h3>
            <div class="vignette-copy">
              <p>
                Hay partidos de
                <mark>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=ultraderecha|%22ultra derecha%22"
                    target="_blank"
                  >ultraderecha</a>
                </mark>
                en Ucrania, Finlandia, Portugal, Francia, Italia, Estonia,
                Bulgaria, Alemania, Brasil y la Comisión Europea, entre otros
                lugares del mundo. Pero, para el Telediario de TVE, no en España.
                De las
                <strong>445 veces</strong> que aparece la palabra en los informativos desde
                2014 hasta el 31 de enero de 2020 la mayoría corresponden a dos
                tipos: otras fuerzas políticas mencionando a Vox (sobre todo el
                PSOE) y noticias de política internacional sobre partidos de
                <strong>ultraderecha</strong> de otros países.
              </p>
              <div class="chart-annotated" v-html="chart_tema01"></div>
              <p>
                La palabra
                <strong>ultraderecha</strong> empezó a coger fuerza en
                el Telediario en 2017, cuando se hablaba de su auge en Francia y
                en Holanda. Y empezó a ganar más peso a partir de mediados de
                2018, con la irrupción de Bolsonaro en Brasil o de partidos
                fascistas en Alemania. De hecho, uno de los dos mayores picos, en
                septiembre de ese año, se explica por las noticias internacionales
                sobre esos dos países.
              </p>
              <p>
                La semana en la que esa palabra fue más popular fue la última de
                campaña electoral justo antes de los comicios del 11-N. En solo
                cuatro días, se repitió 17 veces entre los dos informativos, el de
                la mañana y el de la noche. Se referían a Vox. Pero no porque en
                el Telediario hablaban de ellos como partido de
                <strong>ultraderecha</strong>, sino por las apariciones de Pedro
                Sánchez en actos de campaña, entrevistas o el debate electoral
                criticando los pactos de PP y Ciudadanos con Vox o pidiendo el
                voto para frenar, claro, a la
                <strong>ultraderecha</strong>.
              </p>
              <p>
                El resto de apariciones de esta palabra suelen tener que ver con
                grupos de
                <strong>ultraderecha</strong> en manifestaciones (como
                la que protestaba por la exhumación de Franco) o altercados (como
                los de las manifestaciones de Barcelona). También en ese contexto
                se suele usar
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22extrema derecha%22"
                    target="_blank"
                  >extrema derecha,</a>
                </strong>
                una expresión más popular, que
                aparece hasta 610 veces desde 2014. Su pico: tras las elecciones
                andaluzas, cuando se empezó a comentar -por otros partidos y
                citando declaraciones, no por los propios presentadores del
                Telediario- el posible pacto PP-Ciudadanos-Vox.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <a
                    href="/?q=ultraderecha | %22ultra derecha%22"
                    target="_blank"
                    class="methodology-query"
                  >ultraderecha | "ultra derecha"</a>
                </div>
              </div>
              <p class="methodology-note"></p>
            </div>
          </article>
        </li>

        <!-- Tema 2 - corrupción -->
        <li id="vignette02" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">Gürtel y los ERE, casi empatados</h3>
            <div class="vignette-copy">
              <p>
                La
                <mark>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=corrupción|corrupcion"
                    target="_blank"
                  >corrupción</a>
                </mark>
                es, por desgracia, una constante en los informativos de TVE. La
                palabra ha aparecido más de 4.000 veces desde 2014 y hasta el 31
                de enero de 2020 como un goteo constante, aunque algo menos
                intenso en los últimos años. De hecho, 2.452 veces lo hizo entre
                2014 y 2016; y 1.565, ya con menos ritmo, en los tres años
                siguientes.
              </p>
              <div class="chart-annotated" v-html="chart_tema02a"></div>
              <p>
                El momento álgido se vivió a finales de octubre de 2014, con las
                detenciones del caso Púnica, que se combinaron con debates
                parlamentarios y propuestas y pactos en el Congreso para acabar
                con el problema. Pero la
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=Punica%7CPúnica#search-box"
                    target="_blank"
                    class="methodology-query"
                  >Púnica</a>
                </strong> (357 apariciones)
                no ha sido la saga corrupta más nombrada. El caso
                <mark
                  class="item1"
                >
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Gürtel|Gurtel" target="_blank">Gürtel</a>
                </mark>
                (712) y el de
                <mark class="item2">
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22los ERE%22|%22caso ERE%22"
                    target="_blank"
                  >los ERE</a>
                </mark>
                (804) están casi empatados.
              </p>
              <div class="chart-annotated" v-html="chart_tema02b"></div>
              <p>
                Durante la última semana de mayo de 2018, justo después de la
                sentencia de
                <strong>Gürtel</strong>, con la Audiencia Nacional decidiendo si
                fijaba medidas cautelares para los acusados y la moción de censura
                contra Mariano Rajoy en marcha, este caso de
                <strong>corrupción</strong> fue la estrella de los Telediarios,
                con su apogeo el día 31, el de la moción que cambió a Rajoy por
                Sánchez en la presidencia del Gobierno.
              </p>
              <p>
                Para el caso de los
                <strong>ERE</strong>, esa fecha mágica llegó
                el 19 de noviembre, con la sentencia que condenó a los
                expresidentes andaluces Manuel Chaves y José Antonio Griñán, entre
                otros.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <a
                    href="/?q=corrupción | corrupcion"
                    target="_blank"
                    class="methodology-query"
                  >corrupción | corrupcion</a>
                  <br />
                  <a
                    href="/?q=gürtel | gurtel"
                    target="_blank"
                    class="methodology-query item1"
                  >gürtel | gurtel</a>
                  &nbsp; VS &nbsp;
                  <a
                    href="/?q=%22los ere%22 | %22caso ERE%22"
                    target="_blank"
                    class="methodology-query item2"
                  >"los ere" | "caso ERE"</a>
                </div>
              </div>
              <p class="methodology-note">
                Nota: A la búsqueda de los ERES hemos eliminado cuatro casos en
                los que trataban Expedientes de Regulación de Empleo distintos a
                los del caso de
                <strong>corrupción</strong>.
              </p>
            </div>
          </article>
        </li>

        <!-- Tema 3 - dieta -->
        <li id="vignette03" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">El rigor científico, a dieta</h3>
            <div class="vignette-copy">
              <p>
                Televisión Española mencionó en sus informativos 378 veces la
                palabra
                <mark>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=dieta" target="_blank">dieta</a>
                </mark>
                entre enero de 2014 y enero de 2020. Pero los informativos, en
                ocasiones, también han puesto a
                <strong>dieta</strong> el rigor
                científico, sustituyéndolo por un cóctel de desinformación
                calórica y desequilibrada, que puede poner en riesgo la salud.
              </p>
              <p>
                Uno de los mantras
                <a
                  href="http://www.rtve.es/alacarta/videos/telediario/telediario-15-horas-15-10-15/3324958/?t=00h35m38s"
                  target="_blank"
                >citados por TVE</a>
                es que tomar una o dos
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22copas de vino%22 beneficioso"
                    target="_blank"
                  >copas de vino</a>
                </strong>
                al día es beneficioso. Pero nada más lejos de la realidad: el
                <a
                  href="https://ascopubs.org/doi/full/10.1200/JCO.2017.76.1155"
                  target="_blank"
                >consumo moderado y saludable</a>
                de alcohol es un gran mito, que no previene los problemas
                cardiovasculares y que, de hecho, puede aumentar el riesgo de
                enfermedades como el cáncer. Este no es el único gazapo de
                Televisión Española en temas relacionados con la alimentación. La
                cadena pública también
                <a
                  href="http://www.rtve.es/alacarta/videos/telediario/telediario-21-horas-06-07-16/3655050/?t=00h39m17s"
                  target="_blank"
                >se hizo eco</a>
                de un trabajo que afirmaba que la
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22pasta no engorda%22"
                    target="_blank"
                  >pasta no engorda</a>
                </strong>. ¿El problema? El estudio estaba patrocinado por Barilla, un
                detalle que los informativos olvidaron mencionar en su cobertura.
              </p>
              <p>
                Durante los últimos años, TVE ha difundido informaciones sobre
                alimentos que pueden inducir a error a los consumidores.
                <a
                  href="http://www.rtve.es/alacarta/videos/telediario/telediario-15-horas-03-03-15/3024390/?t=00h41m37s"
                  target="_blank"
                >Uno de sus telediarios</a>, hablando de la llamada
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22dieta del delfín%22"
                    target="_blank"
                  >dieta del delfín</a>
                </strong>, llegó a afirmar que "beber agua de mar es una tendencia
                creciente en el campo de las supuestas
                <strong>dietas</strong> saludables". Pese a que la televisión
                pública menciona la palabra "charlatanería", habla del agua de mar
                como un "completo nutriente con propiedades". Verba también
                muestra la cobertura negativa de TVE sobre los
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=aditivos" target="_blank">aditivos</a>
                </strong>
                en los alimentos, pese a tratarse de
                <a
                  href="http://www.aecosan.msssi.gob.es/AECOSAN/web/seguridad_alimentaria/subdetalle/aditivos_alimentarios.htm"
                  target="_blank"
                >sustancias seguras</a>
                que ayudan a mejorar el aspecto o textura de los mismos y a
                conservarlos mejor.
              </p>
              <div class="chart-annotated" v-html="chart_tema03"></div>
              <p>
                Al cubrir la información sobre peligrosas modas, como la de la
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22leche cruda%22"
                    target="_blank"
                  >leche cruda</a>
                </strong>, los informativos de Televisión Española tampoco han destacado
                el riesgo que supone el consumo de esta bebida. Del total de 11
                resultados obtenidos, varios apuntan hacia la producción de quesos
                utilizando este tipo de leche sin pasteurizar, y otros hacia la
                polémica normativa aprobada en Cataluña hace casi dos años. Del
                <a
                  href="https://www.cdc.gov/spanish/especialescdc/lechecruda/index.html"
                  target="_blank"
                >riesgo</a>
                que produce su consumo, como la intoxicación por peligrosas
                bacterias como
                <i>Listeria</i>,
                <i>Salmonella</i> o
                <i>Escherichia coli</i>, ni rastro.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div>
                <div class="query-container">
                  <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                  <a
                    href="/?q=dieta&from=2014-01-01&to=2020-01-31#search-box"
                    target="_blank"
                    class="methodology-query"
                  >dieta</a>
                </div>
              </div>
              <p class="methodology-note"></p>
            </div>
          </article>
        </li>

        <!-- Tema 4 - rajoy -->
        <li id="vignette04" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">Rajoy sigue vivo</h3>
            <div class="vignette-copy">
              <p>
                ¿Quién es el personaje más nombrado del Telediario? Si
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=dios" target="_blank">dios</a>
                </strong>
                ha aparecido unas mil veces desde 2014,
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Messi" target="_blank">Messi</a>
                </strong>
                suma más de seis dioses (6.442) y
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Trump" target="_blank">Trump</a>
                </strong>, más de siete (7.607). Pero hay alguien que dobla al astro
                argentino y al endiosado presidente estadounidense.
                <mark>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Rajoy" target="_blank">Mariano Rajoy</a>
                </mark>
                ha sido mencionado 13.118 veces. Tiene cierta lógica, porque fue
                presidente durante casi todo el periodo que abarca Verba (de enero
                de 2014 a junio de 2018). Pero su peso como expresidente sigue
                siendo considerable.
              </p>
              <div class="chart-annotated" v-html="chart_tema04"></div>
              <p>
                Desde que fue sustituido en su escaño por un bolso mientras pasaba
                ocho horas en un bar cercano al Congreso de los Diputados, donde
                se celebraba la moción que acabó con su presidencia, ha sido
                mencionado
                <strong>
                  <a href="/?from=2018-06-02&to=2020-01-31&q=Rajoy" target="_blank">595 veces</a>
                </strong>
                en los Telediarios de la televisión pública. Parece poco, pero no
                lo es si tenemos en cuenta que estamos hablando de solo 20 meses,
                hasta el 31 de enero de 2020. Así, de media, se le menta una vez
                al día, una cifra muy superior a las de los otros expresidentes.
              </p>
              <p>
                A
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Aznar" target="_blank">José María Aznar</a>
                </strong>
                (506) y
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22Felipe González%22|%22Felipe Gonzalez%22"
                    target="_blank"
                  >Felipe González</a>
                </strong>
                (469) se les hace caso cada tanto en el Telediario y ambos rondan
                las 500 apariciones en algo más de seis meses.
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Zapatero" target="_blank">Zapatero</a>
                </strong>, más cercano en el tiempo (nuestro registro empieza tres años
                después de su adiós), les supera, con 781.
              </p>
              <p>
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=Puigdemont" target="_blank">Puigdemont</a>
                </strong>, por su parte, aparece 4.436 veces, con tres hitos: el
                referendum y la posterior fuga en octubre de 2017, el pleno de
                investidura en enero de 2018 y la detención en Alemania en marzo
                de ese mismo año.
              </p>
              <p>
                ¿Y
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22Pedro Sánchez%22|%22Pedro Sanchez%22"
                    target="_blank"
                  >Pedro Sánchez</a>
                </strong>? El actual Presidente del Gobierno empezó a asomarse por la
                televisión pública a mediados de 2015 y desde entonces lo ha hecho
                más de 9.000 veces, 3,794 desde que llegó a La Moncloa.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div>
                <div class="query-container">
                  <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                  <a href="/?q=Rajoy" target="_blank" class="methodology-query">Rajoy</a>
                </div>
              </div>
            </div>
          </article>
        </li>

        <!-- Tema 5 - clima -->
        <li id="vignette05" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">No había crisis climática hasta 2019</h3>
            <div class="vignette-copy">
              <p>
                Cuando, a finales del 2019, Greta Thunberg dió un discurso en la
                Cumbre del Clima de Madrid, dejó claro su enfado y sentenció:
                "Mientras la
                <mark
                  class="item2"
                >
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22crisis climática%22|%22crisis climatica%22"
                    target="_blank"
                  >crisis climática</a>
                </mark>
                continúa siendo ignorada por quienes tienen que tomar las
                decisiones, hay personas muriendo a día de hoy". No sabemos qué
                ocurre con aquellos que tienen que decidir, pero lo que tenemos
                claro es que la
                <strong>crisis climática</strong> en los
                telediarios de TVE no empezó a aparecer hasta 2019. Solo dos
                veces antes se había citado como tal: en 2016, por la ONG Acción
                contra el Hambre, y en la boca de Greta en 2018. De la propia
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=Greta%20Thunberg#search-box"
                    target="_blank"
                  >Greta</a>
                </strong> se ha hablado desde ese mismo momento, en
                concreto, en 75 ocasiones.
              </p>
              <div class="chart-annotated" v-html="chart_tema05"></div>
              <p>
                Antes de esta crisis, TVE ya hablaba de
                <mark class="item1">
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22cambio climático%22|%22cambio climatico%22"
                    target="_blank"
                  >cambio climático</a>
                </mark>: desde 2014 hasta principios de 2020, los informativos han
                citado estas palabras más de 1.350 veces. Solo en 2019 se llegaron
                a utilizar en casi 600 ocasiones. Y, aunque la Fundeu recomiende
                referirise al problema como
                <strong>"crisis climática",</strong> en los informativos ha
                aparecido otro concepto aún más popular:
                <mark
                  class="item2"
                >
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22emergencia climática%22|%22emergencia climatica%22"
                    target="_blank"
                  >emergencia climática</a>
                </mark>. Apareció por primera vez en el telediario del 15 de diciembre
                de 2019 y, hasta el 31 de enero de 2020, se ha utilizado 60 veces.
                Parece que ha llegado para quedarse, al igual que el problema que
                refleja.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <a
                    href="/?q=%22cambio climático%22 | %22cambio climatico%22"
                    target="_blank"
                    class="methodology-query item1"
                  >"cambio climático" | "cambio climatico"</a>
                  &nbsp; VS
                  <br />
                  <a
                    href="/?q=%22crisis climática%22 | %22crisis climatica%22 | %22emergencia climática%22 | %22emergencia climatica%22"
                    target="_blank"
                    class="methodology-query item2"
                  >
                    "crisis climática" | "crisis climatica" | "emergencia
                    climática" | "emergencia climatica"
                  </a>
                </div>
              </div>
              <p class="methodology-note"></p>
            </div>
          </article>
        </li>

        <!-- Tema 06 - ... -->
        <li id="vignette06" class="verba-vignettes-item">
          <article>
            <h3 class="vignette-title">La fiebre (informativa) del coronavirus</h3>
            <div class="vignette-copy">
              <p>
                Los informativos de Televisión Española han mencionado la palabra
                <mark>
                  <a
                    href="/?q=coronavirus&from=2014-01-01&to=2020-01-31#search-box"
                    target="_blank"
                    class="methodology-query item2"
                  >coronavirus</a>
                </mark>
                en 168 ocasiones desde 2014 hasta enero de 2020, la gran mayoría en relación con el brote actual originado en China. Pese a que la epidemia actual apareció por primera vez en Wuhan el 31 de diciembre de 2019, el telediario de La 1 tardó 17 días en hablar del nuevo virus, cuando comenzaron los
                <a
                  href="https://www.nytimes.com/2020/01/17/health/china-coronavirus-airport-screening.html"
                  target="_blank"
                >controles</a> en aeropuertos de Estados Unidos y seis días después del
                <a
                  href="https://www.nytimes.com/2020/01/10/world/asia/china-virus-wuhan-death.html"
                  target="_blank"
                >primer fallecido</a> por la infección.
              </p>
              <p>
                El nuevo
                <strong>coronavirus</strong>, que recibió de forma provisional el nombre de
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  target="_blank"
                >2019-nCoV</a>
                y que posteriormente ha sido denominado
                <a
                  href="https://www.biorxiv.org/content/10.1101/2020.02.07.937862v1"
                  target="_blank"
                >SARS-CoV-2</a>, provoca una enfermedad respiratoria llamada COVID-19. Según los últimos datos del
                <a
                  href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/documentos/Actualizacion_26_COVID-19_China.pdf"
                  target="_blank"
                >Ministerio de Sanidad</a>, publicados el 19 de febrero de 2020, el
                <strong>coronavirus</strong> ha afectado a cerca de 75.000 individuos y ha sido relacionado con la muerte de más de 2.000 personas. Además de China, otros 26 países, entre ellos España, han confirmado casos positivos del virus.
              </p>

              <div class="chart-annotated" v-html="chart_tema06"></div>

              <p>
                La cobertura de TVE del
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  target="_blank"
                >2019-nCoV</a>
                –nombre provisional del virus– es muchísimo mayor que la que tuvo el síndrome respiratorio de Oriente Medio (
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=mers#search-box" target="_blank">MERS</a>
                </strong>
                , por sus siglas en inglés). El resto de alusiones a
                <strong>coronavirus</strong> corresponde a esta enfermedad, diferente a la actual. El virus del MERS surgió en 2012, aunque el número de casos se disparó entre 2014 y 2015. La epidemia se extendió por
                <a
                  href="https://www.who.int/en/news-room/fact-sheets/detail/middle-east-respiratory-syndrome-coronavirus-(mers-cov)"
                  target="_blank"
                >27 países</a>, aunque los más afectados fueron Arabia Saudí, Emiratos Árabes Unidos y la República de Corea (en España no se dio ningún caso). El virus del MERS, al contrario del
                <strong>coronavirus</strong> de Wuhan, no fue clasificado como &quot;emergencia sanitaria internacional&quot; por la Organización Mundial de la Salud.
              </p>
              <p>
                La OMS sí
                <a
                  href="https://www.who.int/mediacentre/news/statements/2009/h1n1_20090425/en/"
                  target="_blank"
                >reconoció</a> como emergencia internacional a la
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=%22gripe%20A%22#search-box"
                    target="_blank"
                  >gripe A</a>
                </strong> de 2009, nombrada en 43 ocasiones
                por TVE. Varios casos en
                <a
                  href="https://www.heraldo.es/noticias/aragon/zaragoza/2014/01/10/un-total-de-21-afectados-por-la-gripe-a-en-aragon-416136.html"
                  target="_blank"
                >Aragón</a> concentran el interés informativo en 2014.
              </p>

              <p>
                En 2016, España notificó algo más de
                <a
                  href="https://www.isciii.es/QueHacemos/Servicios/VigilanciaSaludPublicaRENAVE/EnfermedadesTransmisibles/Documents/INFORMES/INFORMES%20RENAVE/RENAVE_INFORME_ANUAL_2016.pdf"
                  target="_blank"
                >400 casos de zika</a>, una
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/zika-virus"
                  target="_blank"
                >enfermedad</a>, generalmente leve, que podía desencadenar complicaciones, como problemas neurológicos y microcefalias. Con 217 menciones, el interés informativo por el
                <strong>
                  <a href="/?from=2014-01-01&to=2020-01-31&q=zika#search-box" target="_blank">zika</a>
                </strong> se acerca al generado hasta el momento por el nuevo
                <strong>coronavirus</strong>, aunque el número de casos notificados de zika en España fue 201 veces superior al del brote actual.
              </p>

              <p>
                La enfermedad más grave considerada hasta la fecha, y la que sin duda más cobertura informativa ha recibido, es el ébola, cuya
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/ebola-virus-disease"
                  target="_blank"
                >tasa de mortalidad</a> puede alcanzar el 90%. Del total de 1.501 menciones
                a
                <strong>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=ébola%7Cebola#search-box"
                    target="_blank"
                  >ébola</a>
                </strong> que detecta Verba, el 87% (1.311 citas) se produjeron durante 2014. En el verano de ese año, un misionero español contrajo la enfermedad y fue repatriado para ser tratado por el Hospital Carlos III. Durante su tratamiento en Madrid, una enfermera se contagió, lo que aumentó la presencia del término en el telediario de La 1. De hecho, alrededor del 10% de las menciones a esta enfermedad están relacionadas con este episodio. Pero, más allá de la proximidad de estos dos infectados, entre 2014 y
                <a
                  href="https://www.who.int/news-room/detail/29-03-2016-statement-on-the-9th-meeting-of-the-ihr-emergency-committee-regarding-the-ebola-outbreak-in-west-africa"
                  target="_blank"
                >2016</a>, años en los que se prolongó la emergencia sanitaria internacional, más de 28.000 personas, principalmente en África, se infectaron de
                <a
                  href="https://www.cdc.gov/vhf/ebola/history/2014-2016-outbreak/index.html"
                  target="_blank"
                >ébola</a> y cerca de 11.300 individuos murieron por culpa del virus.
              </p>
            </div>
            <div class="vignette-methodology">
              <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <a
                    href="/?from=2014-01-01&to=2020-01-31&q=coronavirus#search-box"
                    target="_blank"
                    class="methodology-query"
                  >coronavirus</a>
                </div>
              </div>
              <p class="methodology-note">
                Nota: la búsqueda de
                <strong>gripe A</strong> proporciona 46 resultados, de los que se han eliminado las entradas que no correspondían a la gripe
                <strong>A (H1N1)</strong>, obteniendo un total de 43 menciones.
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      chart_tema01: '',
      chart_tema02a: '',
      chart_tema02b: '',
      chart_tema03: '',
      chart_tema04: '',
      chart_tema05: '',
      chart_tema06: '',
      chart_tema07: '',
      chart_tema08: '',
      chart_tema09: '',
      chart_tema10: '',
      chart_tema11: ''
    }
  },
  updated: function() {
    this.resizer()
  },
  mounted() {
    // Load all the embedded ai2html charts and put the content into the DOM
    axios.get('/verba-tema01-query01-ultraderecha.html').then(response => {
      this.chart_tema01 = response.data
    })
    axios.get('/verba-tema02-query01-corrupcion.html').then(response => {
      this.chart_tema02a = response.data
    })
    axios.get('/verba-tema02-query02-gurtel-vs-ere.html').then(response => {
      this.chart_tema02b = response.data
    })
    axios.get('/verba-tema03-query01-dieta.html').then(response => {
      this.chart_tema03 = response.data
    })
    axios.get('/verba-tema04-query01-rajoy.html').then(response => {
      this.chart_tema04 = response.data
    })
    axios.get('/verba-tema05-query01-clima.html').then(response => {
      this.chart_tema05 = response.data
    })
    axios.get('/verba-vignette06-coronavirus.html').then(response => {
      this.chart_tema06 = response.data
    })
    window.addEventListener('resize', this.throttle(this.resizer, 200))

    // If we're deep-linking into a particular story, show that one
    this.onClickShowVignette(location.hash.replace('#', ''))
  },
  methods: {
    onClickShowVignette(vignette) {
      // Hide all vignettes and deselect all images
      var allVignettes = document.querySelectorAll('.verba-vignettes-item')
      allVignettes.forEach(function(el) {
        el.classList.remove('visible')
      })
      var allVignetteImages = document.querySelectorAll('.vignette-img')
      allVignetteImages.forEach(function(el) {
        el.classList.remove('selected')
      })

      // Show only the selected one
      var myVignette = document.getElementById(vignette)
      if (myVignette) myVignette.classList.add('visible')

      // Highlight the image for the selected vignette
      var myVignetteImg = document.getElementById(vignette + '-img')
      if (myVignetteImg) myVignetteImg.classList.add('selected')

      // Make sure the right version of the embedded chart is displayed
      this.resizer()
    },
    // `resizer` and `throtthle` are taken from ai2html output
    resizer: function() {
      var elements = Array.prototype.slice.call(
          document.querySelectorAll('.g-artboard[data-min-width]')
        ),
        widthById = {}
      elements.forEach(function(el) {
        var parent = el.parentNode,
          width = widthById[parent.id] || parent.getBoundingClientRect().width,
          minwidth = el.getAttribute('data-min-width'),
          maxwidth = el.getAttribute('data-max-width')
        widthById[parent.id] = width
        if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      })
      try {
        if (window.parent && window.parent.$) {
          window.parent.$('body').trigger('resizedcontent', [window])
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
    throttle: function(func, wait) {
      // from underscore.js
      var _now =
          Date.now ||
          function() {
            return new Date().getTime()
          },
        context,
        args,
        result,
        timeout = null,
        previous = 0
      var later = function() {
        previous = _now()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
      return function() {
        var now = _now(),
          remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout)
            timeout = null
          }
          previous = now
          result = func.apply(context, args)
          if (!timeout) context = args = null
        } else if (!timeout) {
          timeout = setTimeout(later, remaining)
        }
        return result
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';

// Default text selection
::selection {
  background: $color-highlight-1;
}
::-moz-selection {
  background: $color-highlight-1;
}

// TODO: I shouldn't need this again here. Something to do with the "scoped" feature of the vue components styles
//Common resets
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
a,
u {
  color: inherit;
  text-decoration: none;
}
.seeMoreBtn {
  display: block;
  width: 200px;
  height: 30px;
  margin: 20px auto;
}

mark {
  color: $color-neutral-0;
  font-weight: 600;
  background-color: mix($color-neutral-1000, white, 85%);
  padding-top: 0;
  padding-bottom: 0;

  &.item1 {
    color: $color-neutral-1000;
    background-color: rgba($color: $color-highlight-2, $alpha: 0.5);
  }
  &.item2 {
    color: $color-neutral-1000;
    background-color: rgba($color: $color-highlight-1, $alpha: 0.8);
  }
}

strong {
  color: $color-neutral-1000;
}

.chart-annotated {
  margin: 1.5rem 0;
}

.verba-vignettes-item {
  display: none;

  // Mobile first
  padding: 5rem 0rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 850px;

  .vignette-title {
    color: $color-neutral-1000;
    margin-bottom: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: underline;

    &:hover {
      color: $color-highlight-1;
    }
  }

  // Tablets
  @media all and (min-width: 768px) {
    text-align: left;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

.visible {
  display: block;
}

.vignette-methodology {
  margin-top: 2rem;
  border-top: 2px solid $color-neutral-0;
  padding-top: 1rem;
  opacity: 0.8;
  text-align: left;

  p {
    margin-bottom: 0.4rem;
  }

  .methodology-title {
    color: $color-neutral-1000;
    font-size: 1rem;
  }
  .query-container {
    display: flex;

    a {
      text-decoration: underline;
    }
  }
  .methodology {
    display: inline-block;
    padding-right: 1rem;
  }
  .methodology-query {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    margin-bottom: 0.5rem;
    color: $color-neutral-0;
    font-weight: 600;
    background-color: $color-neutral-1000;

    &.item1 {
      color: $color-neutral-1000;
      background-color: rgba($color: $color-highlight-2, $alpha: 0.5);
    }
    &.item2 {
      color: $color-neutral-1000;
      background-color: rgba($color: $color-highlight-1, $alpha: 0.8);
    }
  }
  .methodology-note {
    font-size: 0.8rem;
  }
}

.vignettes-titles {
  padding: 0 2rem;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  li h3 {
    font-size: 0.9rem;
    color: $color-neutral-1000;
  }

  li {
    width: 15rem;
    padding: 0.5rem;
    margin: 0.2rem;
  }
}

.vignette-img {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  opacity: 0.9;
  margin-bottom: 0.5rem;

  // Gray scale, sepia and blur effects
  -webkit-filter: grayscale(100%) sepia(0) blur(1px);
  filter: grayscale(100%) sepia(0) blur(1px);
  -webkit-transition: 1s ease-in-out;
  transition: 1s ease-in-out;

  &:hover,
  &.selected {
    -webkit-filter: sepia(100%) blur(0);
    filter: sepia(100%) blur(0);
  }
}
</style>
