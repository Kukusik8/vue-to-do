
const App = {
data(){
    return {
        placeholderStr:'Ввведите заметку',
    title:'Список заметок',
    inputValue:'',
    notes:['Заметка 1','Заметка 2'],
    }
},
methods: {
  addNewNote(){
    if(this.inputValue ===''){
        alert('Введите название заметки')
    }else{
        this.notes.push(this.inputValue)
    }
    return this.inputValue = ''
  },
 
  removeItem(idx) {
    this.notes.splice(idx,1) 
  },

 },
 computed:{
    doubleCountComputed(){
        return this.notes.length *2;
    },
 },
 watch: {
inputValue(value){
    if(value.length > 10){
        this.inputValue = ''
    }
  }
 }
}


// Vue.createApp(App).mount('#app')

