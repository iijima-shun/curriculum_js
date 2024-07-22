var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        //要件3で使用するデータ追加
        searchText: '',
    },

    watch: { 
        list: {
            handler: function() {
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    computed: {
        //要件2のマスタッシュ内の”残タスク数”のキー追加
        Total() {
            return this.list.length;
        },
        //要件2のマスタッシュ内の”総数”のキー追加
        Task() {
            return this.list.filter(todo => !todo.isChecked).length;
        },
        //要件3のマスタッシュ内の”部分一致”のキー追加
        search() {
            if (this.searchText) {
                return this.list.filter(todo => todo.text.indexOf(this.searchText) !== -1);
            }
            return this.list;
        }
    },
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if(this.addText !== '') {
                this.list.push({
                text: this.addText,
                isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo){
                return !todo.isChecked;
            });
        }
    }      
});

let user = {
    name: "太郎",
    age: "20",
    emali: "sample.com"
}

localStorage.setItem("user",JSON.stringify(user));
JSON.parse(localStorage.getItem("user"));
