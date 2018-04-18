<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Society</h2>
            <div class="row " id="cardrow">
                <div class="col-md-3" v-for="soc in list" style="margin-top: 10px">

                    <el-card class="box-card"  shadow="hover">
                        <div slot="header" class="clearfix">
                            <h3>{{soc.sName}}</h3>
                            <el-tooltip class="item" effect="dark" :content="soc.sDesc" placement="right">
                            <el-button style="float: right; padding: 3px 0" @click="addSoc(soc)"
                                       type="text"><span class="glyphicon glyphicon-plus"></span></el-button>
                            </el-tooltip>
                        </div>
                        <div class="text item ">sId:    {{soc.sId}}</div>
                        <div class="text item">sGrade:  {{soc.sGrade}}</div>
                        <div class="text item">sChairman:  {{soc.eChairman.uName}}</div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Moment from "moment";

    export default {
        data() {
            return {
                msg: "this is home",
                list: [], user: {
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
                member: {
                    "mDate": 1524499200000,
                    "mDesc": "",
                    "mGrade": "a",
                    "mNo": null,
                    "mPosition": "",
                    "mSocietyId": 1,
                    "mUserId": 0
                }
                , society: {
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
        created() {
            this.list = this.$storage.get("societyList");
            this.user = this.$storage.get("user");
            //检查是否登录
            if (!this.user){
                this.$message.warning("please login");
                setInterval(()=>{
                    window.location.assign("index.html");

                },2000)
            }
        },


        computed: {
            //日期格式转化
            convertlist() {
                this.list.forEach((val => {
                    console.log(val);
                    val.uBirthday = this.convert(val.uBirthday)
                }));
                return this.list;

            }
        }, methods: {
            convert(date) {
                return Moment(date).format('YYYY-MM-DD');
            },

            updateClick(row) {
                this.$storage.set('society', row);
                this.$router.push('/resociety');
            },
            addSoc(soc) {

                this.openConfirm(soc);
            },
            //加入社团验证
            openConfirm(soc) {
                this.$prompt('填写加入' + soc.sName + '的验证信息', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {
                    this.member.mDate=new Date();
                    this.member.mUserId=this.user.uId;
                    this.member.mSocietyId = soc.sId;
                    this.member.mDesc=value;
                    this.$http.post('/society/member',this.member).then(
                        (res)=>{
                            this.$message({
                                type: 'success',
                                message: '申请已经发送，请等待会长审核。'
                            });
                            this.$storage.update();
                        }
                    ).catch(
                        (err)=>{
                            this.$message.warning("未知错误，请稍候再试")
                        }
                    );

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已经取消加入'
                    });
                });
            }
        }





    }
</script>

<style>
    .el-card{

        color: #8a6d3b;
    }

</style>
