<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society Member</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th v-for="(v,k,i) in list[0]" :key="i">
                            {{k}}
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(v,k,i) of list" :key="i">
                        <td v-for="(v0,k0,i0) in v" :key="i" :key0="i0">
                            {{i0===0?v0.uName:v0}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Moment from "moment";
    export default {
        data(){
            return{
                msg:"this is home",
                list:[],
                arr:[],
                user:{
                    "uAcademy": "",
                    "uBirthday": 0,
                    "uClass": "",
                    "uDesc": "",
                    "uEmail": "",
                    "uGender": "male",
                    "uId": 0,
                    "uName": "",
                    "uPassword": "",
                    "uPhone": 0,
                    "uRole": 3
                },
                member:{
                    "mDate": 1524499200000,
                    "mDesc": "",
                    "mGrade": "a",
                    "mNo": 1,
                    "mPosition": "",
                    "mSocietyId": 1,
                    "mUserId": 0
                }
                ,society:{
                    "sChairman": 0,
                    "sDesc": "",
                    "sGrade": "",
                    "sId": 0,
                    "sName": "",
                    "sPic": ""
                }
                ,
                role:3
            }
        },
        async created(){
            this.user =JSON.parse(window.sessionStorage.getItem("user"));
            console.log(this.user);
            if(this.user.uRole>1){

            }
                // ?this.user.uRole:"";
            console.log("role:"+this.role);
            let that = this;
            this.$http.get("/societyex/list/"+this.role)
                .then(
                    (res)=>{
                        if(that.role){
                            this.list =res.data.data.list[0].members
                        }else {
                            this.list =res.data.data[0].members
                        }

                    }
                );
        },
        mounted(){


        },
        computed:{
            convertlist(){


            },
            loadlist(){
                var res = "";
                this.list.forEach( async (val) => {
                    res  = await this.$http.get("/society/info/"+val.mSocietyId);
                    val.societyName = res.data.data.sName;
                });


            }
        },methods:{
            convert(date){
                return Moment(date).format('YYYY-MM-DD');
            },
            getList0(){
                console.log(this.list);
                return this.list;
            }
        }
    }
</script>

<style>


</style>
