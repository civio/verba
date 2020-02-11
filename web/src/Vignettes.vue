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
              <mark>ultraderecha</mark> en Ucrania, Finlandia, Portugal, Francia, Italia, Estonia, Bulgaria, Alemania, Brasil y la Comisión Europea, entre otros lugares del mundo. Pero, para el Telediario de RTVE, no en España. De las 445 veces que aparece la palabra en los informativos desde 2014 hasta el 31 de enero de 2020 la mayoría corresponden a dos tipos: otras fuerzas políticas mencionando a Vox (sobre todo el PSOE) y noticias de política internacional sobre partidos de ultraderecha de otros países.
            </p>
            <div class="chart-annotated">
              <img
                src="./images/titulares-charts/verba-item1-ultraderecha_modif05.svg"
                alt="Gráfico de tendencia en el tiempo del término 'ultraderecha'"
              />
            </div>
          </div>
          <p>
            La palabra
            <mark>"ultraderecha"</mark> empezó a coger fuerza en el Telediario en 2017, cuando se hablaba de su auge en Francia y en Holanda. Y empezó a ganar más peso a partir de mediados de 2018, con la irrupción de Bolsonaro en Brasil o de partidos fascistas en Alemania. De hecho, uno de los dos mayores picos, en septiembre de ese año, se explican por las noticias internacionales sobre esos dos países.
          </p>
          <p>La semana en la que esa palabra fue más popular fue justo la última de campaña electoral justo antes de los comicios del 11-N. En solo cuatro días, se repitió 17 veces entre los dos informativos, el de la mañana y el de la noche. Se referían a Vox. Pero no porque en el Telediario se refirieran a ellos como partido de ultraderecha, sino por las apariciones de Pedro Sánchez en actos de campaña, entrevistas o el debate electoral criticando los pactos de PP y Ciudadanos con Vox o pidiendo el voto para frenar, claro, a la ultraderecha.</p>
          <p>El resto de apariciones de esta palabra suelen tener que ver con grupos de ultraderecha en manifestaciones (como la que protestaba por la exhumación de Franco) o altercados (como los de las manifestaciones de Barcelona). También en ese contexto se suele usar "extrema derecha", una expresión más popular, que aparece hasta 611 veces desde 2014. Su pico: tras las elecciones andaluzas, cuando se empezó a comentar -por otros partidos y citando declaraciones, no por los propios presentadores del Telediario- el posible pacto PP-Ciudadanos-Vox.</p>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div class="query-container">
              <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
              <div class="query-container">
                <p class="methodology-query">"ultraderecha"|"ultra derecha"</p>
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
              La <mark>corrupción</mark> es, por desgracia, una constante en los informativos de TVE. La palabra ha aparecido más de 4.000 veces desde 2014 y hasta el 31 de enero de 2020 como un goteo constante, aunque algo menos intenso en los últimos años. De hecho, 2.428 veces lo hizo entre 2014 y 2016; y 1.554, ya con menos ritmo, en los tres años siguientes.
              </p>
            <p>
              El momento álgido se vivió a finales de octubre de 2014, con las detenciones del caso Púnica, que se combinaron con debates parlamentarios y propuestas y pactos en el Congreso para acabar con el problema. Pero la Púnica (357 apariciones) no ha sido la saga corrupta más nombrada. El caso Gürtel (713) y el de los ERE (804) están casi empatados.
            </p>

  
            <div class="chart-annotated">
              <img
                src="./images/verba-item2-corrupcion_modif01.svg"
                alt="Gráfico de tendencia en el tiempo del término 'corrupción'"
              />
            </div>

            <p>
              Durante la última semana de mayo de 2018, justo después de la sentencia de Gürtel, con la Audiencia Nacional decidiendo si fijaba medidas cautelares para los acusados y la moción de censura contra Mariano Rajoy en marcha, este caso de corrupción fue la estrella de los Telediarios, con su apogeo el día 31, el de la moción que cambió a Rajoy por Sánchez en la presidencia del Gobierno.
            </p>

            <p>
              Para el caso de los ERE, esa fecha mágica llegó el 19 de noviembre, con la sentencia que condenó a los expresidentes andaluces Manuel Chaves y José Antonio Griñán, entre otros.
            <p/>

            <div class="chart-annotated">
              <img
                src="./images/verba-item2-BOTH-MIRROR_modif01.svg"
                alt="Gráfico de tendencia en el tiempo comparada entre los términos 'Gürtel' y 'Ere'"
              />
            </div>
          </div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div class="query-container">
              <p class="methodology" v-html="$t('vignettes.query-subtitle')"></p>
              <div class="query-container"></div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>

        <!-- Tema 3 - dieta -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">El rigor científico, a dieta</h3>
          <div class="vignette-copy"></div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <p class="methodology"></p>
              <div class="query-container"></div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>

        <!-- Tema 4 - rajoy -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">Rajoy sigue vivo</h3>
          <div class="vignette-copy"></div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <p class="methodology"></p>
              <div class="query-container"></div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>

        <!-- Tema 5 - clima -->
        <li class="verba-vignettes-item">
          <h3 class="vignette-title">No había crisis climática hasta 2019</h3>
          <div class="vignette-copy"></div>
          <div class="vignette-methodology">
            <h4 class="methodology-title" v-html="$t('vignettes.methodology')"></h4>
            <div>
              <p class="methodology"></p>
              <div class="query-container"></div>
            </div>
            <p class="methodology-note"></p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

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

// TODO: again, dupicated CSS due to scoped problems

mark {
  color: $color-neutral-0;
  font-weight: 600;
  background-color: mix($color-neutral-1000, white, 85%);
  padding-top: 0;
  padding-bottom: 0;

  &.item1 {
    color: $color-neutral-1000;
    background-color: mix($color-highlight-1, white, 85%);
  }
  &.item2 {
    color: $color-neutral-1000;
    background-color: mix($color-highlight-2, white, 85%);
  }
}

.verba-vignettes {
  // background-color: pink;
}

.verba-vignettes-item {
  // Mobile first
  text-align: center;
  padding: 3rem 3rem 1rem 3rem;
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

  .methodology-title {
    color: $color-neutral-1000;
    font-size: 1rem;
  }
  .query-container {
    display: inline-block;
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
  }
  .methodology-note {
    font-size: 0.8rem;
  }
}
</style>
