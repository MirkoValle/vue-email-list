const { createApp } = Vue;


createApp({
    data() {
        return {

            emails: [],
        }
    },
    methods: {

        getEmail: function () {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response)
                        this.emails.push(response.data.response)
                    })

            }
            console.log(this.emails)
        }
    },
    created() {
        this.getEmail();
    },
}).mount('#app');