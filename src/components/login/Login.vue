<template>
    <div>
        <div class="modal fade clearfix "
             id="modal-login"
             role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog "
                 style="width: 30%">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-hidden="true">×</button>
                        <h4 class="modal-title"
                            id="myModalLabel">
                            login
                        </h4>
                    </div>
                    <div class="modal-body">
                        <form id="f_login">
                            <div class="row clearfix">
                                <div class="thumbnail col-md-10 col-md-offset-1">
                                    <div class="input-group  ">
                                        <label
                                                for="user"
                                                class="input-group-addon"><span
                                                class="glyphicon glyphicon-user"></span></label>
                                        <input
                                                class=" form-control"
                                                type="text"
                                                v-model.lazy="user.uName" @click="openlogin"
                                                id="user"
                                                placeholder="User's Id or Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="thumbnail col-md-10 col-md-offset-1">
                                    <div class="input-group">
                                        <label for="psw"
                                               class="control-label input-group-addon"><span
                                                class="glyphicon glyphicon-lock"></span></label>
                                        <input class="form-control"
                                               type="password" v-model.lazy="user.uPassword"
                                               id="psw" @keyup.enter="login"
                                               placeholder="please enter pwd">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                                type="button"
                                class="btn btn-default"
                                id="login_cancel"
                                data-dismiss="modal">cancel</button>
                        <button
                                type="button"
                                class="btn btn-primary"
                                id="login"
                                @click="login"
                        >login</button>
                        <!--data-dismiss="modal" -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                islogin:false,
                uname:"",
                user:{
                    "uAcademy": "",
                    "uBirthday": 0,
                    "uClass": "",
                    "uDesc": "",
                    "uEmail": "",
                    "uGender": "male",
                    "uId": null,
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
                },
            }
        },
        props:["uid"],

        computed:{

        },mounted(){

        },methods:{
            openlogin(){
                this.islogin=true;
            }
            ,
            async login(){
                if (!this.islogin){
                    return false;
                }

                const res = await this.$http.post("/society/user/login",this.user);

                if (res.data.code!==200){
                    this.$storage.remove();
                    this.$emit('updateuser');
                    alert("用户名或密码错误!");
                    return false;
                }else {
                    this.user = res.data.data;
                    alert(this.user.uName);
                    // if(this.user.uRole<1){
                    //     this.$http.get('/societyex/user').then((res)=>{
                    //         this.$storage.set("userList",res.data.data.list)
                    //     });
                    //     alert(" admin login");
                    // }
                    this.$http.get('/societyex/user/'+this.user.uId).then((res)=>{
                        this.$storage.set("user",res.data.data[0]);
                    });
                    setInterval(()=>window.location.assign("index.html"),1000)

                    // this.$emit('updateuser',this.user);
                    // this.$router.push("/society")
                }
            },

        }

    }
</script>

<style>

</style>
