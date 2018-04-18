<template>
  <div>
       <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2 class="sub-header">User</h2>
                <div class="table-responsive">
                    <table class="table  table-bordered table-hover">
                        <thead>
                            <tr>
                                <th v-for="(v,k,i) in list[0]" :key="i" :class="k">
                                    {{k}}
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v,k,i) in list" :key="i">
                                <td v-for="(v0,k0,i0) in v" :key="i" :class="k0">
                                    {{v0}}
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
            
        }
    },
    async created(){
        this.$storage.update();
        const res = await this.$http.get("/society/user/");
        this.list = res.data.data.list;
    },


    computed:{

    },methods:{
        convert(date){
           return Moment(date).format('YYYY-MM-DD');
        }
        
    }

}
</script>

<style scoped>
.upassword{
    display: none;
}

</style>
