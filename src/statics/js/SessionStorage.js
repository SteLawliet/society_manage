import http from 'axios';
export default {
    get(name){
      return  JSON.parse(window.sessionStorage.getItem(name));
    },set(name,item){
        window.sessionStorage.setItem(name,JSON.stringify(item));
    },remove(name){
        if(!name){
            window.sessionStorage.clear();
        }else {
            window.sessionStorage.removeItem(name);
        }
    },update(root){
        let self=this;
        if(root){
            http.get('/societyex/user').then((res)=>{
                self.set("userList",res.data.data.list)
            }).catch((err)=>console.log("userlist erro"));
        }
        http.get('/societyex/list').then((res)=>{
            self.set("societyList",res.data.data.list);
        }).catch(
            (err)=>console.log('soclist erro')
        );
    }
}