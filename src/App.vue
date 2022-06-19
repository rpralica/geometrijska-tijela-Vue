<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
<router-link :to="'/dvodimenzionalni'"><p class="" >Dvodimenzionalni</p></router-link>
  <router-link :to="'/trodimenzionalni'"><p class="tro" >Trodimenzionalni </p></router-link>

      
       
      </div>
    </div>
  </div>
</nav>
  </header> 

    <router-view></router-view>
  



  <div class="container-fluid">
    
  </div>
 
  <br>
</template>



<style >
#app {
  text-align: center;
  margin-top: 60px;
  
}

a.router-link{
  color:black
}
btn,
a.router-link-active{

color:green;
text-decoration:none;
text-decoration: none;
font-weight: bold;
}

.btn{
  border: 2px solid black;
}
.tro{
  margin-left:1em;
  
}
</style>
