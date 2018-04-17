<template>
    <div>
        <navbar :uname="getuname" ></navbar>
        <div class="container-fluid">
            <navside></navside>
            <router-view></router-view>
        </div>
        <login @updateuser="(val)=>uid=val" :islogin="islogin" :uid="uid"></login>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                uname:"",
                uid:{
                    uRole:''
                },
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
                },
                islogin:false,
                societyList:[]
            }
        },
        created(){
            this.login();
            this.updateSocietyList();

        },
        computed:{
            getuname(){
                console.log(this.user.uName);
                return this.user.uName;
            }

        },
        watch:{
            uid(){
                // console.log('uid: '+this.uid.uRole);
                // this.$http.get("/societyex/user"+this.uid)
            }

        },
        methods:{
            login(){
                this.user =this.$storage.get("user");
                if (this.user){
                    console.log("app.vue login uName："+this.user.uName);
                }else {
                    this.user={
                        uName:""
                    };
                }
            },
            updateSocietyList(){
                this.$http.get('/societyex/list').then((res)=>{
                    this.$storage.set("societyList",res.data.data.list);
                    this.societyList =this.$storage.get("societyList");
                });
            },
            findSociety(val){
                if (! isNaN(val)){
                    return this.societyList.filter(((value, index) => {
                        return value.sId ===id;
                    })[0])
                }else {
                    return this.societyList.filter(((value, index) => {
                        return value.search(val)>-1;
                    }))
                }
            }
        }

    }
</script>

<style>

</style>
