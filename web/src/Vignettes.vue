<template>
  <main>
    <div class="verba-vignettes">
      <!-- <h2 class="verba-subtitle" v-html="$t('vignettes.title')"></h2> -->
      <ul class="verba-vignettes">
        <!-- Tema 1 - la ultraderecha -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">La ultraderecha son los otros</h3>
          <div class="vignette-copy">
            <p>
              Hay partidos de
              <mark>ultraderecha</mark> en Ucrania, Finlandia, Portugal, Francia, Italia, Estonia, Bulgaria, Alemania, Brasil y la Comisión Europea, entre otros lugares del mundo. Pero, para el Telediario de RTVE, no en España. De las 445 veces que aparece la palabra en los informativos desde 2014 hasta el 31 de enero de 2020 la mayoría corresponden a dos tipos: otras fuerzas políticas mencionando a Vox (sobre todo el PSOE) y noticias de política internacional sobre partidos de
              ultraderecha de otros países.
            </p>
            <div class="chart-annotated" v-html="chart_tema01"></div>
            <p>La palabra "ultraderecha" empezó a coger fuerza en el Telediario en 2017, cuando se hablaba de su auge en Francia y en Holanda. Y empezó a ganar más peso a partir de mediados de 2018, con la irrupción de Bolsonaro en Brasil o de partidos fascistas en Alemania. De hecho, uno de los dos mayores picos, en septiembre de ese año, se explican por las noticias internacionales sobre esos dos países.</p>
            <p>
              La semana en la que esa palabra fue más popular fue justo la última de campaña electoral justo antes de los comicios del 11-N. En solo cuatro días, se repitió 17 veces entre los dos informativos, el de la mañana y el de la noche. Se referían a Vox. Pero no porque en el Telediario se refirieran a ellos como partido de
              ultraderecha, sino por las apariciones de Pedro Sánchez en actos de campaña, entrevistas o el debate electoral criticando los pactos de PP y Ciudadanos con Vox o pidiendo el voto para frenar, claro, a la
              ultraderecha.
            </p>
            <p>
              El resto de apariciones de esta palabra suelen tener que ver con grupos de
              ultraderecha en manifestaciones (como la que protestaba por la exhumación de Franco) o altercados (como los de las manifestaciones de Barcelona). También en ese contexto se suele usar "extrema derecha", una expresión más popular, que aparece hasta 611 veces desde 2014. Su pico: tras las elecciones andaluzas, cuando se empezó a comentar -por otros partidos y citando declaraciones, no por los propios presentadores del Telediario- el posible pacto PP-Ciudadanos-Vox.
            </p>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div class="query-container">
              <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
              <div>
                <p class="methodology-query">"ultraderecha" | "ultra derecha"</p>&nbsp;
                <a
                  href="https://verba.civio.es/?q=%22ultraderecha%22%20%7C%20%22ultra%20derecha%22#verba-subtitle-dataviz"
                  target="_blank"
                >(link)</a>
              </div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>

        <!-- Tema 2 - corrupción -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">Gürtel y los ERE, casi empatados</h3>
          <div class="vignette-copy">
            <p>
              La
              <mark>corrupción</mark> es, por desgracia, una constante en los informativos de TVE. La palabra ha aparecido más de 4.000 veces desde 2014 y hasta el 31 de enero de 2020 como un goteo constante, aunque algo menos intenso en los últimos años. De hecho, 2.428 veces lo hizo entre 2014 y 2016; y 1.554, ya con menos ritmo, en los tres años siguientes.
            </p>
            <div class="chart-annotated" v-html="chart_tema02a"></div>
            <p>
              El momento álgido se vivió a finales de octubre de 2014, con las detenciones del caso Púnica, que se combinaron con debates parlamentarios y propuestas y pactos en el Congreso para acabar con el problema. Pero la Púnica (357 apariciones) no ha sido la saga corrupta más nombrada. El caso
              <mark
                class="item1"
              >Gürtel</mark> (713) y el de los
              <mark class="item2">ERE</mark> (804) están casi empatados.
            </p>
            <div class="chart-annotated" v-html="chart_tema02b"></div>
            <p>
              Durante la última semana de mayo de 2018, justo después de la sentencia de
              Gürtel, con la Audiencia Nacional decidiendo si fijaba medidas cautelares para los acusados y la moción de censura contra Mariano Rajoy en marcha, este caso de
              corrupción fue la estrella de los Telediarios, con su apogeo el día 31, el de la moción que cambió a Rajoy por Sánchez en la presidencia del Gobierno.
            </p>
            <p>Para el caso de los ERE, esa fecha mágica llegó el 19 de noviembre, con la sentencia que condenó a los expresidentes andaluces Manuel Chaves y José Antonio Griñán, entre otros.</p>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div class="query-container">
              <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
              <div>
                <p class="methodology-query">"corrupción" | "corrupcion"</p>&nbsp;
                <a
                  href="https://verba.civio.es/?q=corrupci%C3%B3n%20%7C%20corrupcion#verba-subtitle-dataviz"
                  target="_blank"
                >(link)</a>
                <br />
                <p class="methodology-query">"gürtel" | "gurtel"</p>&nbsp;
                <a
                  href="https://verba.civio.es/?q=%22g%C3%BCrtel%22%20%7C%20%22gurtel%22#verba-subtitle-dataviz"
                  target="_blank"
                >(link)</a>
                &nbsp;
                VS
                &nbsp;
                <p class="methodology-query">"los ere" | "caso ERE"</p>&nbsp;
                <a
                  href="https://verba.civio.es/?q=%22los%20ere%22%20%7C%20%22caso%20ERE%22#verba-subtitle-dataviz"
                  target="_blank"
                >(link)</a>
              </div>
            </div>
            <p
              class="methodology-note"
            >Nota: A la búsqueda de los ERES hemos eliminado cuatro casos en los que trataban Expedientes de Regulación de Empleo distintos a los del caso de corrupción.</p>
          </div>
        </li>

        <!-- Tema 3 - dieta -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">El rigor científico, a dieta</h3>
          <div class="vignette-copy">
            <p>
              Televisión Española mencionó en sus informativos 380 veces la palabra
              <mark>"dieta"</mark> entre enero de 2014 y enero de 2020. Pero los informativos, en ocasiones, también han puesto a
              dieta el rigor científico, sustituyéndolo por un cóctel de desinformación calórica y desequilibrada, que puede poner en riesgo la salud.
            </p>
            <p>
              Uno de los mantras citados por RTVE es que tomar una o dos
              <mark>copas de vino</mark> al día es beneficioso. Pero nada más lejos de la realidad: el consumo moderado y saludable de alcohol es un gran mito, que no previene los problemas cardiovasculares y que, de hecho, puede aumentar el riesgo de enfermedades como el cáncer. Este no es el único gazapo de Televisión Española en temas relacionados con la alimentación. La cadena pública también se hizo eco de un trabajo que afirmaba que la
              <mark>pasta no engorda.</mark> ¿El problema? El estudio estaba patrocinado por Barilla, un detalle que los informativos olvidaron mencionar en su cobertura.
            </p>
            <p>
              Durante los últimos años, TVE ha difundido informaciones sobre alimentos que pueden inducir a error a los consumidores. Uno de sus telediarios, hablando de la llamada dieta del delfín, llegó a afirmar que "beber agua de mar es una tendencia creciente en el campo de las supuestas dietas saludables". Pese a que la televisión pública menciona la palabra "charlatanería", habla del agua de mar como un "completo nutriente con propiedades". Verba también muestra la cobertura negativa de TVE sobre los
              <mark>aditivos</mark> en los alimentos, pese a tratarse de sustancias seguras que ayudan a mejorar el aspecto o textura de los mismos y a conservarlos mejor.
            </p>
            <div class="chart-annotated" v-html="chart_tema03"></div>
            <p>
              Al cubrir la información sobre peligrosas modas, como la de la
              <mark>leche cruda,</mark> los informativos de Televisión Española tampoco han destacado el riesgo que supone el consumo de esta bebida. Del total de 11 resultados obtenidos, varios apuntan hacia la producción de quesos utilizando este tipo de leche sin pasteurizar, y otros hacia la polémica normativa aprobada en Cataluña hace casi dos años. Del riesgo que produce su consumo, como la intoxicación por peligrosas bacterias como Listeria, Salmonella o Escherichia coli, ni rastro.
            </p>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <p
                    class="methodology-query"
                  >"dieta" | "copa de vino" | "pasta no engorda" | "leche cruda" | "aditivos"</p>&nbsp;
                  <a
                    href="https://verba.civio.es/?q=%22dieta%22%20%7C%20%22copa%20de%20vino%22%20%7C%20%22pasta%20no%20engorda%22%20%7C%20%22leche%20cruda%22%20%7C%20%22aditivos%22#verba-subtitle-dataviz"
                    target="_blank"
                  >(link)</a>
                </div>
              </div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>

        <!-- Tema 4 - rajoy -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">Rajoy sigue vivo</h3>
          <div class="vignette-copy">
            <p>
              ¿Quién es el personaje más nombrado del Telediario? Si <strong>dios</strong> ha aparecido unas mil veces desde 2014, <strong>Messi</strong> suma más de seis dioses (6.467) y <strong>Trump</strong>, más de siete (7.603). Pero hay alguien que dobla al astro argentino y al endiosado presidente estadounidense.
              <mark>Mariano Rajoy</mark> ha sido mencionado 13.134 veces. Tiene cierta lógica, porque fue presidente durante casi todo el periodo que abarca Verba (de enero de 2014 a junio de 2018). Pero su peso como expresidente sigue siendo considerable.
            </p>
            <div class="chart-annotated" v-html="chart_tema04"></div>
            <p>Desde que fue sustituido en su escaño por un bolso mientras pasaba ocho horas en un bar cercano al Congreso de los Diputados, donde se celebraba la moción que acabó con su presidencia, ha sido mencionado 628 veces en los Telediarios de la televisión pública. Parece poco, pero no lo es si tenemos en cuenta que estamos hablando de solo 20 meses, hasta el 31 de enero de 2020. Así, de media, se le menta una vez al día, una cifra muy superior a las de los otros expresidentes.</p>
            <p>
              A
              <strong>José María Aznar</strong> (503) y
              <strong>Felipe González</strong> (469) se les hace casito cada tanto en el Telediario y ambos rondan las 500 apariciones en algo más de seis meses. <strong>Zapatero</strong>, más cercano en el tiempo (el registro empieza tres años después de su adiós), les supera, con 781.
            </p>
            <p><strong>Puigdemont</strong>, por su parte, aparece 4.436 veces, con tres hitos: el referendum y la posterior fuga en octubre de 2017, el pleno de investidura en enero de 2018 y la detención en Alemania en marzo de ese mismo año.</p>
            <p>¿Y <strong>Pedro Sánchez</strong>? El actual Presidente del Gobierno empezó a asomarse por la televisión pública a mediados de 2015 y desde entonces lo ha hecho más de 9.000 veces, 3,794 desde que llegó a La Moncloa.</p>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <p class="methodology-query">"rajoy"</p>&nbsp;
                  <a
                    href="https://verba.civio.es/?q=rajoy#verba-subtitle-dataviz"
                    target="_blank"
                  >(link)</a>
                  <br />
                  <p
                    class="methodology-query"
                  >"pedro sanchez" | "pedro sánchez"; "aznar"; "felipe gonzalez" | "felipe gonzález"; "puigdemont"; "trump"; "messi" | "mesi"; "dios"; "zapatero" *</p>
                </div>
              </div>
            </div>
            <p class="methodology-note">*(puede haber zapateros)</p>
          </div>
        </li>

        <!-- Tema 5 - clima -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">No había crisis climática hasta 2019</h3>
          <div class="vignette-copy">
            <p>
              Cuando a finales del 2019, Greta Thunberg dió un discurso en la Cumbre del Clima de Madrid, dejó claro su enfado y sentenció: "Mientras la
              crisis climática continúa siendo ignorada por quienes tienen que tomar las decisiones, hay personas muriendo a día de hoy". No sabemos qué ocurre con aquellos que tienen que decidir, pero lo que tenemos claro es que la
              "crisis climática" en los telediarios de RTVE no empezó a aparecer hasta 2019. Solo dos veces antes se había citado como tal: en 2016, por la ONG Acción contra el Hambre, y en la boca de Greta en 2018. De la propia Greta se ha hablado desde ese mismo momento, en concreto, en 75 ocasiones.
            </p>
            <div class="chart-annotated" v-html="chart_tema05"></div>
            <p>
              Antes de esta crisis, RTVE ya hablaba de
              <mark class="item1">cambio climático:</mark> desde 2014 hasta principios de 2020, los informativos han citado estas palabras más de 1.350 veces. Solo en 2019 se llegaron a utilizar en casi 600 ocasiones. Y, aunque la Fundeu recomiende referirise al problema como
              <mark
                class="item2"
              >"crisis climática",</mark> en los informativos ha aparecido otro concepto aún más popular:
              <mark
                class="item2"
              >"emergencia climática".</mark> Apareció por primera vez en el telediario del 15 de diciembre de 2019 y, hasta el 31 de enero de 2020, se ha utilizado 60 veces. Parece que ha llegado para quedarse, al igual que el problema que refleja.
            </p>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <div class="query-container">
                <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
                <div>
                  <p class="methodology-query">"cambio climático" | "cambio climatico"</p>&nbsp;
                  <a
                    href="https://verba.civio.es/?q=%22cambio%20clim%C3%A1tico%22%20%7C%20%22cambio%20climatico%22#verba-subtitle-dataviz"
                    target="_blank"
                  >(link)</a>&nbsp; VS
                  <br />
                  <p
                    class="methodology-query"
                  >"crisis climática" | "crisis climatica" | "emergencia climática" | "emergencia climatica"</p>&nbsp;
                  <a
                    href="https://verba.civio.es/?q=%22crisis%20clim%C3%A1tica%22%20%7C%20%22crisis%20climatica%22%20%7C%20%22emergencia%20clim%C3%A1tica%22%20%7C%20%22emergencia%20climatica%22#verba-subtitle-dataviz"
                    target="_blank"
                  >(link)</a>
                </div>
              </div>
            </div>
            <p class="methodology-note"></p>
          </div>
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
      chart_tema05: ''
    }
  },
  methods: {
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
  },
  updated: function() {
    this.resizer()
  },
  mounted() {
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
    window.addEventListener('resize', this.throttle(this.resizer, 200))
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
.verba-vignettes {
  // margin: 1.5rem 0;
  // background-color: pink;
}

.verba-vignettes-item {
  // Mobile first
  padding: 2rem 0rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 850px;
  border: 1px double $color-neutral-1000;

  .vignette-title {
    color: $color-neutral-1000;
    margin-bottom: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  // Tablets
  @media all and (min-width: 768px) {
    padding: 3rem 3rem 1rem 3rem;
    text-align: left;
  }

  // PC
  @media all and (min-width: 1024px) {
  }
}

.vignette-methodology {
  margin-top: 2rem;
  border-top: 2px solid $color-neutral-0;
  padding-top: 1rem;
  opacity: 0.8;
  text-align: left;

  .methodology-title {
    color: $color-neutral-1000;
    font-size: 1rem;
  }
  .query-container {
    display: flex;

    a {
      text-decoration: underline;
      // font-weight: 800;
      // color: $color-highlight-1;
    }
  }
  .methodology {
    display: inline-block;
    padding-right: 1rem;
  }
  .methodology-query {
    display: inline-block;
    font-size: 0.8rem;
    background-color: $color-neutral-0;
    padding: 0.2rem 0.7rem;
    border: 1px solid $color-neutral-800;
    margin-bottom: 0.5rem;
  }
  .methodology-note {
    font-size: 0.8rem;
  }
}
</style>
