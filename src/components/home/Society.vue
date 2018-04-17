<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society</h2>
            <div class="text-right inline" @click="showtable=!showtable">show table</div>
            <div class="row " id="cardrow" v-if="!showtable">
                <div class="col-md-3" v-for="soc in list" style="margin-top: 10px">
                    <el-card class="box-card"  shadow="hover">
                        <div slot="header" class="clearfix">
                            <h3>{{soc.sName}}</h3>
                            <el-tooltip class="item" effect="dark" :content="soc.sDesc" placement="right">
                                <el-button style="float: right; padding: 3px 0" type="text">join in</el-button>
                            </el-tooltip>
                        </div>
                        <div class="text item ">sId:    {{soc.sId}}</div>
                        <div class="text item">sGrade:  {{soc.sGrade}}</div>
                        <!--<div class="text item">sDesc:  {{soc.sDesc}}</div>-->
                        <div class="text item">sChairman:  {{soc.eChairman.uName}}</div>

                    </el-card>
                </div>
            </div>
            <!--<h2 class="sub-header">Society</h2>-->
            <el-table :data="list" border v-if="showtable">
                <el-table-column prop="sId" label="id" width="medium"></el-table-column>
                <el-table-column prop="sName" label="sName" width="medium"></el-table-column>
                <el-table-column prop="eChairman.uName" label="Chairman" width="medium"></el-table-column>
                <el-table-column prop="members.length" label="Count" width="medium"></el-table-column>
                <el-table-column prop="sGrade" label="Category" width="medium"></el-table-column>
                <el-table-column prop="sDesc" label="sDesc" width="medium"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="RowClick(scope.row)" type="text" size="small">view</el-button>
                        <el-button @click="updateClick(scope.row)" type="text" size="small">update</el-button>
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
                showtable:false,
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
