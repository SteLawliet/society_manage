<template>
    <div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Activity</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th v-for="(v,k,i) in list[0]" :key="i">
                            {{k}}
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(v,k,i) in list" :key="i">
                        <td v-for="(v0,k0,i0) in v" :key="i">
                            {{v0}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Moment from "moment";
    export default {
        data(){
            return{
                list:[],
                activity:{
                    "aAddress": "xx栋教学楼xx教室",
                    "aDetails": "校内",
                    "aGrade": "",
                    "aName": "",
                    "aNo": 0,
                    "aSocietyId": 0,
                    "aStatus": 0
                }

            }
        },
        async created(){
            const res = await this.$http.get("/society/activity/");
            this.list = res.data.data.list;
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
            }

        }

    }
</script>

<style>


</style>
