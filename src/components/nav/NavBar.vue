<template>
<div>
      <nav class="navbar navbar-default navbar-fixed-top ">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <ul class="nav navbar-nav"><li>
              <a
                  class="" href="#"
                  style="font-size: 17px; color: #327ab7;"
                        ><span class="glyphicon glyphicon-list-alt"
                                style="color: #327ab7;  margin-left: 5px ">

              </span>Society Manage</a></li>
          </ul>
          
            </div>
            <div id="navbar" class="navbar-collapse collapse"
                 aria-expanded="false" style="height: 1px;">
                <ul class="nav navbar-nav navbar-right" >
                    <li><router-link to="/">
                        <span class="glyphicon glyphicon-knight"></span> Join New</router-link></li>

                    <li>
                        <router-link to="/addsociety"><span class="glyphicon glyphicon-globe"></span> Create New</router-link></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle"
                           data-toggle="dropdown" >
                                <span style="
                            "
                                      id="user_name">{{uname}}</span>
                            <span class="glyphicon glyphicon-user"
                                  style="color: #327ab7;  margin-left: 5px "></span>
                        
                        </a>
                        <ul class="dropdown-menu" style="min-width: 1px">
                            <li>
                                <a href="#" id="lin"
                                   data-toggle="modal"
                                   data-target="#modal-login"><span
                                        class="glyphicon glyphicon-log-in"
                                ></span>&nbsp;login</a>
                            </li>
                            <li>
                                <a href="#" id="out" @click="out"><span
                                        class="glyphicon glyphicon-log-out"
                                ></span>&nbsp;out</a>
                            </li>
                            <li>
                                <router-link to="/register"
                                   ><span
                                        class="glyphicon glyphicon-new-window"
                                ></span>&nbsp;sign up</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
                    <input type="text"
                           class="form-control"
                           placeholder="Search..."
                           v-model="val"
                           @keyup.enter="findSocietyByName"
                    >
                </form>
            </div>
        </div>
    </nav>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            val:'',
            'societyList':[]


        }

    },props:['uname']
    ,
    created(){
        this.societyList =this.$storage.get("societyList");
    },
    computed:{
    },
    methods:{
        out(){
            console.log("out..login");
            window.sessionStorage.clear();
            window.location.assign("index.html");
        },
        findSocietyByName(){
            let res = this.findSociety(this.val);
            this.$storage.set('societyRes',res);
        }
        ,findSociety(val){
            if (! isNaN(val)){
                return this.societyList.filter(
                    (value, index) => {
                        return value.sId == val;}

                );
            }else {
                return this.societyList.filter(
                    (value, index) => {return value.sName.search(val)>-1;}
                )
            }
        }

    }

}
</script>


<style scoped>
    .glyphicon{
        color: #327ab7;
        font-size: 15px;
    }

</style>
