

Vue.createApp({
 data: () => ({
    myHtml:'<h1>Vue 3 App</h1>',
    title:'Заголовок',
    person: {
        firstName:'Ruslan',
        lastName:'Sakhautdinov'
    },
    items:[1,2,3,4,5,6]
     }),
    //  methods: {
    //     stopPropagation(event){
    //     event.stopPropagation()
    // }
    //  },
}).mount('#app')