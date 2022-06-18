<template>
  <div class="container">
    
    <div class="">
      <div class="row">
        <div class="col-4 bg-success border">
          <h2>Krug<br /><br /></h2>
          <form action="" class="form-control bg-success text-white">
            <div class="">
              <label for="" class="form-label">Poluprečnik: </label>
              <input
                class="form-control"
                type="number"
                v-model="polupKruga"
                @input="izrKruga"
              />
              <hr />
            </div>
            <div>
              <label for="form-label" class="">Obim: </label>
              <input
                class="form-control"
                type="text"
                v-model="obimRez"
                disabled
              /><br />
              <label for="" class="form-label">Površina: </label>
              <input
                class="form-control"
                type="text"
                v-model="povrRez"
                disabled
              />
            </div>
            <div>
              <hr />
              <p>O=2r*π</p>
              <p>P=r<sup>2</sup>*π</p>
            </div>
            <div><br /><br /></div>
          </form>
        </div>
        <div class="col-4 bg-primary border">
          <h2>Kvadrat<br /><br /></h2>
          <form action="" class="form-control bg-primary text-white">
            <div class="">
              <label for="" class="form-label">Stranica: </label>
              <input
                class="form-control"
                type="number"
                v-model="strKvad"
                @input="izrKvad"
              />
              <hr />
            </div>
            <div>
              <label for="form-label" class="">Obim: </label>
              <input
                class="form-control"
                type="text"
                v-model="obimKvad"
                disabled
              /><br />
              <label for="" class="form-label">Površina: </label>
              <input
                class="form-control"
                type="text"
                v-model="povrKvad"
                disabled
              />
            </div>
            <div>
              <hr />
              <p>O=4*a</p>
              <p>P=a<sup>2</sup></p>
            </div>
            <div><br /><br /></div>
          </form>
        </div>
        <div class="col-4 bg-danger border">
          <h2 class="h2">
            Istostranični <br />
            trougao
          </h2>
          <form action="" class="form-control bg-danger text-white">
            <div class="">
              <label for="" class="form-label">Stranica: </label>
              <input
                class="form-control"
                type="number"
                v-model="istostr.stranica"
                @input="istostranicni"
              />
              <hr />
            </div>

            <div>
              <label for="" class="form-label">Obim: </label>
              <input
                class="form-control"
                type="text"
                v-model="istostr.obim"
                disabled
              /><br />
              <label for="" class="form-label">Površina: </label>
              <input
                class="form-control"
                type="text"
                v-model="istostr.povr"
                disabled
              />
            </div>
            <div>
              <hr />
              <p class="">O=3*a</p>

              <span class="spanP">P= </span>
              <p class="frac">
                <span>a<sup>2</sup>*√3</span>
                <span class="symbol">/</span>
                <span class="bottom">4</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      polupKruga: '',
      obimRez: '',
      povrRez: '',
      strKvad: '',
      obimKvad: '',
      povrKvad: '',
      istostr: {
        stranica: '',
        obim: '',
        povr: '',
      },
    };
  },

  methods: {
    izrKruga() {
      this.obimRez = (2 * this.polupKruga * Math.PI).toFixed(2);
      this.povrRez = (this.polupKruga * this.polupKruga * Math.PI).toFixed(2);
    },
    izrKvad() {
      this.obimKvad = 4 * this.strKvad;
      this.povrKvad = Math.pow(this.strKvad, 2);
    },
    istostranicni() {
      const a = this.istostr.stranica;
      this.istostr.obim = 3 * a;
      this.istostr.povr = ((Math.pow(a, 2) * Math.sqrt(3)) / 4).toFixed(2);
    },
  },
};
</script>

<style scoped>
h2 {
  color: white;
 
}
.bg-deep {
  background: deepskyblue;
}

hr {
  border-top: 3px solid white;
}
input,
p,
label {
  font-size: 1.3em;
  font-weight: bold;
}
.spanP {
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 22rem;
}


.frac {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.001em;
  text-align: center;
  margin-top: 0.5em;
}
.frac > span {
  display: block;
}
.frac span.bottom {
  border-top: thin solid white;
}
.frac span.symbol {
  display: none;
}
</style>
