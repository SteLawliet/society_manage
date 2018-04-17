<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th v-for="(v,k,i) in society" :key="i">
                            {{k}}
                        </th>
                        <th>
                            <span class="glyphicon glyphicon-cog"></span>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(v,k,i) in list" :key="i">
                        <td>
                            {{v.eChairman.uName}}
                        </td>
                        <td>
                            {{v.sDesc}}
                        </td>
                        <td>
                            {{v.sGrade}}
                        </td>
                        <td>
                            {{v.sId}}
                        </td>
                        <td>{{v.sName}}</td>
                        <td>{{v.sPic}}</td>
                        <td>{{v.sStatus}}</td>
                        <td>= +</td>

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
                list:[],  user:{
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
                    "sPic": "",
                    "sStatus": 0
                }

            }
        },
         created(){
            this.list = this.$storage.get("societyList");
             console.log(this.list);
         },


        computed:{
            convertlist(){
                this.list.forEach((val =>{console.log(val);
                    val.uBirthday= this.convert(val.uBirthday) }));
                return  this.list;

            }
        },methods:{
            convert(date){
                return Moment(date).format('YYYY-MM-DD');
            }

        }

    }
</script>

<style>


</style>
