<template>
    <div>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society Member</h2>
            <template v-for="(i) in memList.length">
                <h2> {{memList[i-1].sName}}</h2>
                <el-table :data="memList[i-1].members">
                    <el-table-column prop="sId"              label="sId"       width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="sName"            label="sName"     width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uId"       label="Id"        width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uName"     label="Name"      width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uGender"   label="Gender"    width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uPhone"    label="Phone"     width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uDesc"     label="Desc"      width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="mDate"            label="Date"      width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uEmail"    label="Email"     width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uAcademy"  label="Academy"   width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uBirthday" label="Birthday"  width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uClass"    label="Class"     width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uPassword" label="Password"  width="100px" v-if="true"></el-table-column>
                    <el-table-column prop="detail.uRole"     label="Role"      width="100px" v-if="true"></el-table-column>
     <el-table-column fixed="right"  prop="mStatus"          label="mStatus"   width="100px" v-if="true" :filters="staFilters" sortable :filter-method="filterStatus"></el-table-column>
                    <el-table-column fixed="right"           label="📝"  icon="el-icon-search"       width="100px">
                        <template slot-scope="scope">
                            <el-button @click="updateClick(scope.row)" type="text" size="small">update</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    import Moment from "moment";
    export default {
        data(){
            return{
                msg:"this is home",
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
                    "sStatus": 0,
                    "sPic": ""
                },
                memList:[],
                mList:[],
                soclist:[],
                socIds:[],
                ties:{
                    "sId": 1,
                    "sName": "sos团",
                    "mDate": "2018-04-30",
                    "sStatus": 0,
                    "uAcademy": "admin",
                    "uBirthday": "2018-04-02",
                    "uId": 1,
                    "uName": "root",
                    "uPhone": 12233,
                    "uRole": 0,
                    "---":''
                },staFilters:[{text: '未审核', value: '0' }],
            }
        },
        created(){
            this.$storage.update();
            let self = this;
            this.user =this.$storage.get("user");
            this.list = this.$storage.get("societyList");
            if (this.user ==null||this.user.societyExes==null||this.user.societyExes.length<1){
                this.$message.warning("please login or join a society");
            }else {
                if(this.user.uRole>1){
                    this.user.societyExes.forEach(
                        (val0)=>{
                            self.memList.push(self.list.filter(
                                (val,i)=>{
                                    // console.log(val.sId===val0.sId);
                                    return val.sId===val0.sId;
                                }
                            )[0])
                        }
                    );

                }else {
                    self.memList =self.list;
                }
            }
             console.log('[Member.vue] [created] memList :');
             console.log(this.memList);

        },
        mounted(){
            this.memList.forEach(
                (v,i)=>{
                    v.members.forEach(
                        (v0,i0)=>{
                            v0.sName =v.sName;
                            v0.sId=v.sId;
                        }
                    );
                }

        );
            console.log(this.memList);

        },
        computed:{
            convertlist(){

            }
        },methods:{
            convert(date){
                return Moment(date).format('YYYY-MM-DD');
            },
            updateClick(row){
                this.$message.info(JSON.stringify(row));
            },
            filterStatus(value, row, column) {
                const property = column['property'];
                return row[property] < 0;
            }
    }
    }
</script>

<style>


</style>
