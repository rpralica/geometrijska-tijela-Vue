<template>
  <div class="container">
    <div class="row">
      <div class="col-4 border bg-warning">
        <h3 class="">Romb</h3>
        <form action="" class="form-control bg-warning">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="romb.strA"
              @input="rombIzrac"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Visina: </label>
            <input
              class="form-control"
              type="number"
              v-model="romb.visina"
              @input="rombIzrac"
            />
            <hr />
          </div>
          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="romb.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="romb.povrsina"
              disabled
            />
          </div>
          <div>
            <hr />
            <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p class="">O=4*a</p>
            <p>P=a*h</p>
          </div>
        </form>
      </div>

      <div class="col-4 border bg-deep">
        <h3 class="">Paralelogram</h3>
        <form action="" class="form-control bg-deep">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="paralelogram.strA"
              @input="paralelIzrac"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica B: </label>
            <input
              class="form-control"
              type="number"
              v-model="paralelogram.strB"
              @input="paralelIzrac"
            />
            <hr />
          </div>

          <div class="">
            <label for="" class="form-label">Visina: </label>
            <input
              class="form-control"
              type="number"
              v-model="paralelogram.visina"
              @input="paralelIzrac"
            />
            <hr />
          </div>

          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="paralelogram.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="number"
              v-model="paralelogram.povrsina"
              disabled
            />
          </div>
          <div>
            <hr />
            <br><br><br><br><br><br><br><br><br>
            <p>O=2*(a+b)</p>
            <p>P=a*h</p>
          </div>
        </form>
      </div>

      <div class="col-4 bg-success border">
        <h3 class="h3">Trapez:</h3>

        <form action="" class="form-control bg-success">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="trapez.strA"
              @input="trapezIzrac"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica B: </label>
            <input
              class="form-control"
              type="number"
              v-model="trapez.strB"
              @input="trapezIzrac"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica C: </label>
            <input
              class="form-control"
              type="number"
              v-model="trapez.strC"
             
              @input="trapezIzrac"
            />
            <hr />
          </div>

          <div class="">
            <label for="" class="form-label">Stranica D: </label>
            <input
              class="form-control"
              type="number"
              v-model="trapez.strD"
             
              @input="trapezIzrac"
            />
            <hr />
          </div>

          <div class="">
            <label for="" class="form-label">Visina: </label>
            <input
              class="form-control"
              type="number"
              v-model="trapez.visina"
             
              @input="trapezIzrac"
            />
            <hr />
          </div>

          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="trapez.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="trapez.povrsina"
              disabled
            />
          </div>
          <div>
            <hr />
            <p class="">O=a+b+c+d</p>
            <span class="bijeli">P=</span>
            <label class="label-obim frac" for="">
              <span>(a+b)*h</span>
              <span class="symbol">/</span>
              <span class="bottom">2</span>
            </label>
          </div>
        </form>
        <br />
      </div>
      
    </div>
   <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      romb: {
        strA: '',
        visina: '',
        obim: '',
        povrsina: '',
      },
      paralelogram: {
        strA: '',
        strB: '',
        visina: '',
        obim: '',
        povrsina: '',
      },
      trapez: {
        strA: '',
        strB: '',
        strC: '',
        strD: '',
        visina: '',
        obim: '',
        povrsina: '',
      },
    };
  },
  methods: {
    rombIzrac() {
      const a = this.romb.strA;
      const h = this.romb.visina;
      this.romb.obim = (4 * a).toFixed(2);
      this.romb.povrsina = (a * h).toFixed(2);
    },
    paralelIzrac() {
      const a = this.paralelogram.strA;
      const b = this.paralelogram.strB;
      const h = this.paralelogram.visina;
      this.paralelogram.obim = (2 * (a + b)).toFixed(2);
      this.paralelogram.povrsina = (a * h).toFixed(2);
    },
    trapezIzrac() {
      const a = this.trapez.strA;
      const b = this.trapez.strB;
      const c = this.trapez.strC;
      const d = this.trapez.strD;
      const h = this.trapez.visina;
      this.trapez.obim = (+a + +b + +c + +d).toFixed(2);
      this.trapez.povrsina = (((a + b) * h) / 2).toFixed(2);
    },
  },
};
</script>

<style scoped>
.spanP {
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 22rem;
}
.bijeli {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}
.bg-deep {
  background: deepskyblue;
}
input{
    font-size: 1.3em;
  font-weight: bold;
}
p,
label {
  font-size: 1.3em;
  font-weight: bold;
  color:white;
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
