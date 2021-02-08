var app = new Vue({
  el: "#app",
  data:{
    mail: []
  },
  methods: {
    mailRandom(){
      for (var i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(result => {
          this.mail.push(result.data.response);
        })
      }
    }
  }
});
