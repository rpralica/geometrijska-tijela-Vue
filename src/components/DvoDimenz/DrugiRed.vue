<template>
  <div class="container">
    <div class="row">
      <div class="col-4 border bg-warning">
        <h3 class="">Pravougaonik</h3>
        <form action="" class="form-control bg-warning">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="prav.strA"
              @input="pravougaonik"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica B: </label>
            <input
              class="form-control"
              type="number"
              v-model="prav.strB"
              @input="pravougaonik"
            />
            <hr />
          </div>
          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="prav.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="prav.povr"
              disabled
            />
          </div>
          <div>
            <hr />
            <p class="">O=2*(a+b)</p>
            <p>P=a*b</p>
          </div>
        </form>
      </div>

      <div class="col-4 border bg-deep">
        <h3 class="">Jednakokraki Trougao</h3>
        <form action="" class="form-control bg-deep">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="jednakokTro.strA"
              @input="jednakokraki"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica B: </label>
            <input
              class="form-control"
              type="number"
              v-model="jednakokTro.strB"
              @input="jednakokraki"
            />
            <hr />
          </div>
          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="jednakokTro.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="number"
              v-model="jednakokTro.povr"
              disabled
            />
          </div>
          <div>
            <hr />
            <p>O=a+2*b</p>

            <span class="spanP bijeli">P= </span>

            <p class="frac">
              <span>a*√4b-2</span>
              <span class="symbol">/</span>
              <span class="bottom">4</span>
            </p>
          </div>
        </form>
      </div>

      <div class="col-4 bg-success border">
        <h3 class="h3">Pravougli Trougao</h3>

        <form action="" class="form-control bg-success">
          <div class="">
            <label for="" class="form-label">Stranica A: </label>
            <input
              class="form-control"
              type="number"
              v-model="pravougliTro.strA"
              @input="pravougli"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica B: </label>
            <input
              class="form-control"
              type="number"
              v-model="pravougliTro.strB"
              @input="pravougli"
            />
            <hr />
          </div>
          <div class="">
            <label for="" class="form-label">Stranica C: </label>
            <input
              class="form-control"
              type="number"
              v-model="pravougliTro.strC"
              placeholder="Hipotenuza"
              @input="pravougli"
              disabled
            />
            <hr />
          </div>
          <div>
            <label for="" class="form-label">Obim: </label>
            <input
              class="form-control"
              type="text"
              v-model="pravougliTro.obim"
              disabled
            /><br />
            <label for="" class="form-label">Površina: </label>
            <input
              class="form-control"
              type="text"
              v-model="pravougliTro.povr"
              disabled
            />
          </div>
          <div>
            <hr />
            <p class="">O=a+b+c</p>
            <span class="bijeli">P=</span>
            <p class="label-obim frac" for="">
              <span>a*b</span>
              <span class="symbol">/</span>
              <span class="bottom">2</span>
            </p>
          </div>
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
      prav: {
        strA: '',
        strB: '',
        obim: '',
        povr: '',
      },
      jednakokTro: {
        obim: '',
        povr: '',
        strA: '',
        strB: '',
      },
      pravougliTro: {
        obim: '',
        povr: '',
        strA: '',
        strB: '',
        strC: '',
      },
    };
  },
  methods: {
    pravougaonik() {
      const a = this.prav.strA;
      const b = this.prav.strB;
      this.prav.obim = 2 * (a + b);
      this.prav.povr = a * b;
    },
    jednakokraki() {
      const a = this.jednakokTro.strA;
      const b = this.jednakokTro.strB;
      this.jednakokTro.obim = a + 2 * b;
      this.jednakokTro.povr = ((a / 4) * Math.sqrt(4 * b * b - a * a)).toFixed(
        2
      );
    },
    pravougli() {
      const a = this.pravougliTro.strA;
      const b = this.pravougliTro.strB;
      this.pravougliTro.strC = Math.sqrt(a * a + b * b, 2).toFixed(2);
      const c = this.pravougliTro.strC;
      this.pravougliTro.obim = (+a + +b + +c).toFixed(2);

      this.pravougliTro.povr = ((a * b) / 2).toFixed(2);
    },
  },
};
</script>

<style scoped>
.bg-deep {
  background: deepskyblue;
}
hr {
  border-top: 3px solid white;
}
.cetiri {
  margin-top: -1.3em;
  margin-left: 3.5em;
}
input {
  font-size: 1.3em;
  font-weight: bold;
}
p,
label {
  font-size: 1.3em;
  font-weight: bold;
  color: white;
}
h3 {
  color: white;
}
.spanP {
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 22rem;
}
.gore {
  margin-top: -2.2em;

  margin-left: 3.5em;
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
.aaa {
  font-size: 1em;
}
.div-korjen {
  padding-left: -12em;
}
.bijeli {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
