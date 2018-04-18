<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-2">

        <h2 class="sub-header text-center">Apply New Account</h2>
        <div class="col-md-4"></div>
        <div class="col-md-5">
            <!--"uAcademy": "",-->
            <!--"uBirthday": "2018-04-02",-->
            <!--"uClass": "",-->
            <!--"uDesc": "0号",-->
            <!--"uEmail": "l.loneove@gamil",-->
            <!--"uGender": "male",-->
            <!--"uId": 1,-->
            <!--"uName": "root",-->
            <!--"uPassword": "root",-->
            <!--"uPhone": 12233,-->
            <!--"uRole": 0-->

            <div class="form-group" :class="nameclass">
                <label for="uName">User Name</label>
                <input type="text"
                       v-model.trim="user.uName"
                       class="form-control "
                       id="uName"
                       @blur="nameError"
                       placeholder="User Name">
                <span v-if="nameclass.show" class="help-block">the User name already register</span>
            </div>

            <div class="form-group">
                <label for="pwd">User Password</label>
                <input type="password"
                       class="form-control"
                       id="pwd"
                       name="pwd"
                       v-model.lazy="user.uPassword"
                       placeholder="password">
                <span class="help-block">between 8 - 15</span>

            </div>
            <div class="form-group" :class="{'has-error':pwdErr }">
                <label for="pwd0">Confirm</label>
                <input type="password"
                       class="form-control"
                       id="pwd0"
                       name="pwd0"
                       v-model.lazy="pwd0"
                       placeholder="User Name">
                <span v-if="pwdErr" class="help-block" :class="{'has-error':!pwdErr }">both Password Not </span>
            </div>
            <div class="column is-12 form-group" :class="{ 'has-error': errors.has('email') }">
                <label for="email">Email</label>
                <input id="email"
                       class="form-control"
                       v-validate="'required|email'"
                       v-model="user.uEmail"
                       :class="{ 'has-error': errors.has('email') }"
                       name="email" type="text"
                       placeholder="Email">
                <span v-show="errors.has('email')"
                      class="help is-danger">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
                <label >Gender</label>
                <input type="radio"
                       value="female"
                       name="Gender"
                       v-model.lazy="user.uGender"
                       placeholder="Gender">
                <span class="help-block">female</span>
                <input type="radio"
                       value="male"
                       name="Gender"
                       v-model.lazy="user.uGender"
                       placeholder="Gender">
                <span class="help-block">male</span>

            </div>

            <div class="form-group">
                <label >Academy</label>
                <input type="text"
                       class="form-control"
                       v-model.lazy="user.uAcademy"
                       placeholder="Academy">
                <span class="help-block">Enter Your Pone Academy</span>

            </div>
            <div class="form-group">
                <label >Birthday</label>
                <input type="date"
                       class="form-control"
                       v-model.lazy="user.uBirthday"
                       placeholder="birthday">
                <span class="help-block">Enter Your Birthday</span>

            </div> <div class="form-group">
            <label >Phone</label>
            <input type="text"
                   class="form-control"
                   v-model.lazy="user.uPhone"
                   placeholder="phone">
            <span class="help-block">Enter Your Pone Number</span>

        </div>
            <div class="form-group">
            <label class="control-label" for="sDesc">Describe Some About You</label>
            <textarea id="sDesc" class="form-control" v-model="user.uDesc" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label >Submit User Info</label><br>
                <button  class="btn  btn-primary " :class="btnhide" @click="addUser"  >Submit</button>
                <span class="help-block">Create a New Account</span>

            </div>
        </div>
        <div class="col-md-3"></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

                user:{
                    "uAcademy":"",
                    "uBirthday": "",
                    "uClass": "",
                    "uDesc": "",
                    "uEmail": "",
                    "uGender": "male",
                    "uId": null,
                    "uName":"",
                    "uPassword": '',
                    "uPhone": 0,
                    "uRole": 3
                },
                nameclass:{
                    'has-error':false,
                    'has-success':false,
                     show:false
                },btnhide:{
                    disabled:false
                },pwd0:'',pwdErr:false

            }
        },
        created() {


        },
        computed: {

        },
        watch: {

            pwd0(){
                this.pwdErr=this.pwd0.trim()!==this.user.uPassword.trim();

            }

        },
        methods: {
            nameError(){
                if (!this.user.uName){
                    return false;
                }
                this.user.uName=this.user.uName.trim();
                let res = null;
                this.$http.post("society/user/register",this.user).then(
                    re=>{

                        res =  re.data.code ===400;
                        if (res){
                            this.nameclass["has-error"]=true;
                            this.nameclass["has-success"]=false;
                            this.nameclass.show=true;
                            this.btnhide.disabled=true;
                            return true;
                        }else {
                            this.nameclass["has-error"]=false;
                            this.nameclass["has-success"]=true;
                            this.btnhide.disabled=false;
                            this.nameclass.show=false;
                            return false;
                        }
                    }
                );


            },
            addUser(){
                this.$http.post("society/user/",this.user).then(
                    res=> {
                        this.$message.success("register  "+res.data.message);
                    setTimeout(
                        ()=>{
                            window.location.assign("index.html");
                        },1000
                    )}
                )
            },
            pwdError(){

            }

        }

    }
</script>

<style>

</style>