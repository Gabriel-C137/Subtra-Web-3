const { createApp } = Vue;

createApp({
    data() {
        return {
            valorDisplay: "0",
            operador: null,
            numeroAtual: null,
            resultadoCalculado: false,
            tamanhoLetra: "50px",
        };
    },
    methods: {
        getNumero(numero) {
            this.ajusteTamanhoDisplay();
            if (this.resultadoCalculado) {
                this.valorDisplay = numero.toString();
                this.resultadoCalculado = false;
            } else if (this.valorDisplay === "0") {
                this.valorDisplay = numero.toString();
            } else {
                this.valorDisplay += numero.toString();
            }
        },
        apagar() {
            this.valorDisplay = "0";
            this.operador = null;
            this.numeroAtual = null;
            this.resultadoCalculado = false;
            this.tamanhoLetra = "50px";
        },
        decimal() {
            if (!this.valorDisplay.includes(".")) {
                this.valorDisplay += ".";
            }
        },
        operacoes(operacao) {
            const displayAtual = parseFloat(this.valorDisplay);
           if (this.numeroAtual !== null && this.operador === "-") {
                this.valorDisplay = ((this.numeroAtual - displayAtual).toFixed(5) * 1).toString();
            } else {
                this.numeroAtual = displayAtual;
                this.operador = operacao;
                this.valorDisplay = "0";
            }
            this.ajusteTamanhoDisplay();
        },
        ajusteTamanhoDisplay() {
            const len = this.valorDisplay.length;
            this.tamanhoLetra =
                len >= 15 ? "10px" :
                len >= 10 ? "20px" :
                len >= 6 ? "30px" : "50px";
        },
    },
}).mount("#app");
