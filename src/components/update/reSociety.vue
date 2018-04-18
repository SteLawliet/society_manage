<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-2">

        <h2 class="sub-header text-center">Update Society</h2>
        <div class="col-md-4"></div>
        <div class="col-md-5">
            <div class="form-group" :class="changeclass">
                <label for="sName">Society Name</label>
                <input type="text" disabled
                       v-model.lazy="society.sName"
                       class="form-control "
                       id="sName"
                       @change="nameError"
                       placeholder="Society Name">
                <span v-if="!nameError()" class="help-block">the society name already register</span>
                <span v-if="nameError()" class="help-block">      </span>
            </div>

            <div class="form-group">
                <label for="sChairmen">Society Chairmen</label>
                <input type="text"
                       class="form-control"
                       id="sChairmen"
                       placeholder="applicant">
                <span class="help-block">A block of help text that breaks onto</span>

            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <br>
                <select id="category"
                        v-model="society.sGrade">
                    <option>category</option>
                    <option>科技类 </option>
                    <option>理论类 </option>
                    <option>语言类 </option>
                    <option>实用技能类</option>
                    <option>体育类 </option>
                    <option>艺术类 </option>
                    <option>文学类</option>
                    <option>兴趣类 </option>
                    <option>公益服务类</option>
                </select>
                <span class="help-block">Slelct a Category</span>
            </div>
            <div class="form-group">
                <label class="control-label" for="sDesc">describe this society</label>
                <textarea id="sDesc" class="form-control" v-model.lazy="society.sDesc" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="sChairmen">Submit Society Info</label><br>
                <button  class="btn  btn-primary " :class="btnhide" @click="upSoc"  >Update</button>
                <span class="help-block">A block of help text that breaks onto</span>

            </div>
        </div>
        <div class="col-md-3">
            <div v-if="addSuccess" class="alert alert-warning alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>Success!</strong> Better check yourself, you're not looking too good.
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                society:{
                    "sChairman": 0,
                    "sDesc": "",
                    "sGrade": "",
                    "sName": "",
                    "sPic": "",
                    "sId":''
                },
                changeclass:{
                    'has-error':false,
                    'has-success':false
                },btnhide:{
                    disabled:false
                },addSuccess:false

            }
        },
        created() {

            this.society=this.$storage.get('society');
        },
        computed: {

        },
        watch: {
        },
        methods: {
            //校验输入的sName是否重复、更改class
            nameError(){
                if (!this.society.sName){
                    return false;
                }
                let res =this.findSoc.findSociety(this.society.sName, true);
                if (res){
                    this.changeclass["has-error"]=true;
                    this.changeclass["has-success"]=false;
                    this.btnhide.disabled=false;
                    return true;
                }else {
                    this.changeclass["has-error"]=false;
                    this.changeclass["has-success"]=true;
                    this.btnhide.disabled=true;
                    return false;
                }

            },
            //更新society info
            upSoc(){
                this.$http.put("/society/info/",this.society).then(
                    (res)=> {if(this.addSuccess=res.data.code===200){
                        this.$storage.set('society',this.society);
                        setTimeout(
                            ()=>{
                                this.$emit("update",'[reSociety] [upSoc]');
                                this.$router.push("/society");
                            },1000)

            }

                    }
                ).catch((err)=>logError(err));
            }

        }

    }
</script>

<style>

</style>