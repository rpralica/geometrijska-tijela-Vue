<template>
  <div class="container drugi">
  
  <div class="row">
      <div class="col-6 bg-success border">
        <form action="" class="form-control bg-success text-white">
          <h2>Valjak<br /><br /></h2>
          <div class="">
            <label for="" class="form-label">Poluprečnik: </label>
            <input
              class="form-control"
              type="number"
              v-model="valjak.polupr"
              @input="valjakIzrac"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Visina: </label>
            <input
              class="form-control"
              type="number"
              v-model="valjak.visina"
              @input="valjakIzrac"
            />
            <hr />
          </div>
          <div>
            <label for="form-label" class="">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="valjak.povr"
              disabled
            /><br />
            <label for="" class="form-label">Zapremina: </label>
            <input
              class="form-control"
              type="text"
              v-model="valjak.zapr"
              disabled
            />
          </div>
          <div>
            <hr />
            <p>P=2r*π*(r+h)</p>
            <p>V=r<sup>2</sup>π*h</p>
          </div>
          <div><br /><br /></div>
        </form>
      </div>
      <div class="col-6 bg-info border">
        <form action="" class="form-control bg-info text-white">
          <h2>Kupa<br /><br /></h2>
          <div class="">
            <label for="" class="form-label">Poluprečnik: </label>
            <input
              class="form-control"
              type="number"
              v-model="kupa.polupr"
              @input="kupaIzrac"
            />
            <hr />
          </div>

          <div class="">
            <label for="" class="form-label">Visina: </label>
            <input
              class="form-control"
              type="number"
              v-model="kupa.visina"
              @input="kupaIzrac"
            />
            <hr />
          </div>
          <div>
            <label for="form-label" class="">Kosina: </label>
            <input
              class="form-control"
              type="text"
              v-model="kupa.kosina"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="kupa.povr"
              disabled
            />
          </div>
          <br />
          <div class="">
            <label for="" class="form-label">Zapremina: </label>
            <input
              class="form-control"
              type="number"
              v-model="kupa.zapr"
              disabled
            />
            <hr />
          </div>
          <div>
            <hr />
            <p>P=(r<sup>2</sup>*π)+(r*s*π)</p>
            <span style="color: white;font-size:1.5em;font-weight:bold">V=</span>
              <p class="label-obim frac" for="">
                  <span> r<sup>2</sup>*π*h</span>
    <span class="symbol">/</span>
    <span class="bottom">3</span>

              </p>
          </div>
          <div><br /><br /></div>
        </form>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      valjak: {
        polupr: '',
        visina: '',
        povr: '',
        zapr: '',
      },
      kupa: {
        polupr: '',
        visina: '',
        kosina: '',
        povr: '',
        zapr: '',
      },
    };
  },
  methods: {
    
    valjakIzrac() {
      const r = this.valjak.polupr;
      const h = this.valjak.visina;
      this.valjak.povr = (2 * r * Math.PI * (r + h)).toFixed(2);
      this.valjak.zapr = (r * r * Math.PI * h).toFixed(2);
    },
    kupaIzrac() {
      const r = this.kupa.polupr;
      const h = this.kupa.visina;
     
      this.kupa.kosina = Math.sqrt(r * r + h * h).toFixed(2);
 let s = this.kupa.kosina;
      this.kupa.povr = ((Math.pow(r,2)*Math.PI)+(r*s*Math.PI)).toFixed(2);
      this.kupa.zapr = ((r * r * Math.PI * h) / 3).toFixed(2);
    },
  },
};
</script>

<style scoped>
.row-border {
  border-bottom: 1em solid white;
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
input,
p,
label {
  font-size: 1.3em;
  font-weight: bold;
}
</style>

  



<style scoped>

.drugi{
    height: 30em;
    background: yellow;
}
</style>