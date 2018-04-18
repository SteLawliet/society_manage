<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society</h2>
            <el-table :data="list" border >
                <el-table-column prop="sId" label="id" width="medium"></el-table-column>
                <el-table-column prop="sName" label="sName" width="medium"></el-table-column>
                <el-table-column prop="eChairman.uName" label="Chairman" width="medium"></el-table-column>
                <el-table-column prop="members.length" label="Count" width="medium"></el-table-column>
                <el-table-column prop="sGrade" label="Category" width="medium"></el-table-column>
                <el-table-column prop="sDesc" label="sDesc" width="medium"></el-table-column>
                <el-table-column fixed="right" label="📝" width="100">
                    <template slot-scope="scope">
                        <el-button @click="RowClick(scope.row)" type="text" size="small">  view</el-button><el-button @click="updateClick(scope.row)" type="text" size="small">update</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
            this.$storage.update();
            this.list = this.$storage.get("societyList");
            console.log(" [Society.vue] [created] ");
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
            },
            RowClick(row){

                console.log(row);

            },
            updateClick(row){
                this.$storage.set('society',row);
                this.$router.push('/resociety');
            }


        }

    }
</script>

<style>
    .el-card{

        color: #8a6d3b;
    }

</style>
