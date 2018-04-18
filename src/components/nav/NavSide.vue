<template>

        <!--<div class="row">-->
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-list ">
                       <li class="nav-header">
                                <router-link to="/society"
                                             exact
                                class="" ><span
                                class="glyphicon glyphicon-chevron-down"
                                style="color: #327ab7; 
                                "></span>Society</router-link>
                            </li>
                    <li class="">
                        <router-link to="/member"
                                     class="" ><span
                                class="glyphicon glyphicon-chevron-right"
                                style="color: #327ab7;
                               "></span>Member/成员</router-link>
                    </li>
                            <li class="">
                                <router-link to="/" 
                                class="" ><span
                                class="glyphicon glyphicon-chevron-right"
                                style="color: #327ab7; 
                                "></span>Review/审核</router-link>
                            </li>
                    <li class="">
                                <router-link to="/" 
                                class="" ><span
                                class="glyphicon glyphicon-chevron-right"
                                style="color: #327ab7; 
                                "></span>Infor/详细</router-link>
                            </li>
                    <li class="nav-divider"></li>
                            <li class="">
                                <router-link to="/activity" ><span
                                class="glyphicon glyphicon-chevron-down"
                                style="color: #327ab7; 
                                "></span>Activit/活动</router-link>
                            </li>
                              <li class="">
                                <router-link to="/" 
                                class="" ><span
                                class="glyphicon glyphicon-chevron-right"
                                style="color: #327ab7;
                             "></span>Review/活动</router-link>
                            </li>  <li class="">
                                <router-link to="/"
                                class="" ><span
                                class="glyphicon glyphicon-chevron-right"
                                style="color: #327ab7; 
                                "></span>Manage/</router-link>
                            </li>
                    <li class="nav-divider"></li>
                             <li class="">
                                <router-link to="/user" ><span
                                class="glyphicon glyphicon-menu-hamburger"
                                style="color: #327ab7; 
                                "></span>Profile/详细</router-link>
                            </li>
                        
                </ul>
                <hr>
                 <ul class="nav nav-sidebar hide">
                    <li class=""><router-link to="/">Overview <span class="sr-only">(current)</span></router-link></li>
                    <li><router-link to="/">Reports</router-link></li>
                    <li><router-link to="/">Analytics</router-link></li>
                    <li><router-link to="/">Export</router-link></li>
                </ul>
            </div>
           
    <!--</div>-->
</template>

<script>
export default {

}
</script>

<style>

</style>
