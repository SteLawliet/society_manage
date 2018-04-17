<template>
    <div>
        <navbar :uname="getuname" ></navbar>
        <div class="container-fluid">
            <navside></navside>
            <router-view @update="update"></router-view>
        </div>
        <login @updateuser="(val)=>uid=val"
               :islogin="islogin"
               :uid="uid"></login>

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
            //登录取得user
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
            //更新soclist
            updateSocietyList(){
                let id = this.user.uId || 3 ;
                this.$storage.update(id<2);
                // this.$http.get('/societyex/list').then((res)=>{
                //     this.$storage.set("societyList",res.data.data.list);
                // });
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
            }
        }

    }
</script>

<style>

</style>
