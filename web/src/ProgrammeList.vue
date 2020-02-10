<template>
  <main>
    <div class="verba-programmes">
      <div id="menu-filter">
        <ul>
          <li v-for="year in years" >
            <a v-on:click="seeYear(year)" v-bind:data-value="year.num" v-bind:class="{'is-clicked':year.num === currentYear}">{{year.num}}</a>
          </li>
        </ul>
        <ul v-if="currentYear != ''">
          <li v-for="month in months" >
            <a v-on:click="seeMonth(month)" v-bind:data-value="month.num" v-bind:class="{'is-clicked':month.num ===  currentMonth}">{{month.name}}</a>
          </li>
        </ul>
      </div>
      <img
        class="verba-microfilms-image"
        src="../src/images/02Microfilms-es.png"
        alt="Human radar old illustration"
      />

      <!-- Film strips -->
      <ul class="verba-films-strip">
        <li v-for="(programme, key) in subList" :key="key">
          <router-link
            :to="{ name: 'programme-details', params: { id: programme.id } }"
            class="nav-link verba-film-item"
          >
            <figure class="programme-img">
              <img :src="programme | imageURL" />
            </figure>
            <span class="strip-aside">{{ programme.title }}</span>
          </router-link>
        </li>
        <button v-on:click="seeMore" class="seeMoreBtn" v-if="subList < filterProgramme">Ver más ({{ (filterProgramme.length - subList.length).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} resultados)</button>
      </ul>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      programmeList: [],
      filterProgramme: [],
      subList:[],
      limit:70,
      inc:undefined,
      years:[{'num':"2013"}, {'num':"2014"}, {'num':"2015"}, {'num':"2016"}, {'num':"2017"}, {'num':"2018"}, {'num':"2019"}, {'num':"2020"}], 
      months:[{'num':'01','name':'enero'}, {'num':'02','name':'febrero'}, {'num':'03','name':'marzo'}, {'num':'04','name':'abril'}, {'num':'05','name':'mayo'}, {'num':'06','name':'junio'}, {'num':'07','name':'julio'}, {'num':'08','name':'agosto'}, {'num':'09','name':'septiembre'}, {'num':'10','name':'octubre'}, {'num':'11','name':'noviembre'}, {'num':'12','name':'diciembre'}],
      currentYear:'',
      currentMonth :''
    }
  },
  mounted() {
    Vue.verbaAPI('fetchProgrammeList', null, response => {
      this.inc = this.limit
      this.programmeList = response.data
      this.filterProgramme = response.data
      this.subList = this.get_sublist(this.programmeList)
    })
  },

  methods:{
    seeMore(){
      if(this.inc < this.filterProgramme.length){
        this.inc += this.limit
        this.subList = this.get_sublist(this.filterProgramme)
      }
    },

    get_year_month(){
      return this.programmeList.filter(d => 
            (this.currentYear === d.date.split('-')[0] && this.currentMonth === d['date'].split('-')[1])
          )
    },

    get_year(index){
      return this.programmeList.filter(d => this.currentYear === d.date.split('-')[0])
    },

    get_sublist(list){
      return list.slice(0, this.inc);
    },

    seeYear(year){
      this.inc = this.limit
      if(this.currentYear !== year.num){
        this.currentYear = year.num
        if(this.currentMonth !== ''){
          this.filterProgramme = this.get_year_month()
        }else{
          this.filterProgramme = this.get_year()
        }
      }else{
        this.currentYear = ''
        this.currentMonth = ''
        this.filterProgramme = this.programmeList
      }
      this.subList = this.get_sublist(this.filterProgramme)
    },

    seeMonth(month){
      this.inc = this.limit
      if(this.currentMonth !== month.num){
        this.currentMonth = month.num
        this.filterProgramme =  this.get_year_month()
      }else{
        this.currentMonth = ''
        this.filterProgramme = this.get_year()
      }
      this.subList = this.get_sublist(this.filterProgramme)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../src/scss/_variables.scss';
// TODO: I shouldn't need this again here. Something to do with the "scoped" feature of the vue components styles
//Common resets
a.is-clicked{
  background-color: #f2ed8e;
}
#menu-filter{
  min-width: 40%;
  max-width: 320px;
  position: absolute;
  top: 220px;
}
#menu-filter ul{
  float: left;
  width: 50%;
}

#menu-filter ul li{
  float: left;
  margin-right: 5px;
}
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
.seeMoreBtn{
  display: block;
  width: 200px;
  height: 30px;
  margin: 20px auto;
}
.verba-programmes {
  // Mobile first
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $color-neutral-800;
  // Tablets
  @media all and (min-width: 768px) {
    flex-direction: row;
  }
  // PC
  @media all and (min-width: 1024px) {
  }
}
.verba-films-strip {
  // Mobile first
  margin-left: 0;
  // Tablets
  @media all and (min-width: 768px) {
    margin-left: 18rem;
  }
  // PC
  @media all and (min-width: 1024px) {
    margin-left: 13rem;
  }
}
// Image settings
.verba-microfilms-image {
  width: 100%;
  max-width: calc(438px * #{$scale-factor});
  height: auto;
  margin-left: 2rem;
  margin-bottom: 3rem;
  // Mobile first
  // position: block;
  right: calc(50% + 5rem);
  // Tablets
  @media all and (min-width: 768px) {
    position: fixed;
    top: 35%;
    right: calc(50% + 3rem);
  }
  // PC
  @media all and (min-width: 1024px) {
    right: calc(50% + 6rem);
  }
}
.verba-film-item:hover .strip-aside {
  color: $color-neutral-1000;
  font-weight: 800;
}
.verba-film-item:hover:hover img {
  -webkit-filter: sepia(100%) blur(0);
  filter: sepia(100%) blur(0);
}
// Items settings
.verba-film-item {
  display: flex;
  align-items: flex-end;
  color: $color-neutral-800;
  .programme-img {
    padding: 0.5rem 1rem;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    // Tablets
    @media all and (min-width: 768px) {
      padding: 0.5rem 1.5rem;
    }
    & img {
      width: 10rem;
      opacity: 0.9;
      // Gray scale, sepia and blur effects
      -webkit-filter: grayscale(100%) sepia(0) blur(1px);
      filter: grayscale(100%) sepia(0) blur(1px);
      -webkit-transition: 1s ease-in-out;
      transition: 1s ease-in-out;
      // Tablets
      @media all and (min-width: 768px) {
        width: 12rem;
      }
    }
  }
  span {
    position: relative;
    left: 1rem;
    font-size: 0.85rem;
    padding-bottom: 0.1rem;
    text-align: left;
    &:hover {
      color: $color-neutral-1000;
      font-weight: 800;
    }
  }
}
</style></style>