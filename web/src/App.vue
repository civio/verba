<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Verba</a>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'search' }" class="nav-link"
              >Search</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'programmes' }" class="nav-link"
              >Programmes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>
