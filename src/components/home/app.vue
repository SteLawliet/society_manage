<template>
    <div>
        <navbar :uname="getuname" ></navbar>
        <div class="container-fluid">
            <navside></navside>
            <router-view @update="reSoc" :myProp="myProp" @TestProp="UpdateProp"></router-view>
        </div>
        <login @updateuser="(val)=>uid=val"
               :islogin="islogin"
               :uid="uid"
        ></login>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                myProp:'',
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
                    "mNo": 0,
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
            this.$storage.update();
            window.p = this.myProp;

        },
        computed:{
            getuname(){
                console.log('[app.vue] [getuname] _<'+ this.user.uName);
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
            //登录取得user
            login(){
                this.user =this.$storage.get("user");
                if (this.user){
                    console.log("[app.vue] [login] uName："+this.user.uName);
                }else {
                    this.user={
                        uName:""
                    };
                }
            },
            //通过val查询soc.val为数字查询sid.
            // val为String模糊查询sName
            findSociety(val){
                if (! isNaN(val)){
                    return this.societyList.filter(((value, index) => {
                        return value.sId ===val;
                    })[0])
                }else {
                    return this.societyList.filter(((value, index) => {
                        return value.search(val)>-1;
                    }))
                }
            },
            reSoc(msg){
                console.log("[app.vue update] [from] --"+msg+"-- []");
                this.$storage.update();


            },UpdateProp(val){
                console.log("[app.vue UpdateProrp]");
                this.myProp =val;
                console.log(val+" -- "+ this.myProp);
            }
        }

    }
</script>

<style>

</style>
