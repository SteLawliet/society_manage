<template>
       <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Dashboard</h1>

                <div class="row placeholders hide">
                    <div class="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                        <h4>Label</h4>
                        <span class="text-muted">Something else</span>
                    </div>
                </div>

                <h2 class="sub-header">Section title</h2>
           <input class="from-contrl" type="text" v-model="prop_"/>
           <button class="btn" @click="logTest"> test </button>
           <button class="btn" @click="logProp"> test0 </button>

           <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td>sit</td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>adipiscing</td>
                                <td>elit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"this is home",
            prop_:''
            
        }
    },props:["myProp"],
    computed:{
        getUpdate(){
            this.prop=this.myProp;
            console.log("[Home.vue]");
            console.log(this.myProp);
        }
    },methods:{
        logTest(){
            console.log("[Home.vue]"+this.myProp);
            this.$emit('TestProp',this.prop_);
            setTimeout(()=>
                    console.log("[Home.vue]"+this.myProp)
        ,0)
        },logProp(){
            console.log("[Home.vue]"+this.myProp);
        }
    }

}
</script>

<style>


</style>
