import http from 'axios';
export default {
    get(name){
        return  JSON.parse(window.sessionStorage.getItem(name));
    },
    set(name,item){
        window.sessionStorage.setItem(name,JSON.stringify(item));
    },
    remove(name){
        if(!name){
            window.sessionStorage.clear();
        }else {
            window.sessionStorage.removeItem(name);
        }
    },
    update(){
        let root = false;
        let self=this;
        let user=this.get("user");
        if(user){
            http.get('/societyex/user/'+user.uId).then((res)=>{
                self.set("user",res.data.data[0]);
                console.log('user session update _<')
            }).catch(
                (err)=>console.log('session user error')
            );
            if (user.uRole<2){
                http.get('/societyex/user').then((res)=>{
                    self.set("userList",res.data.data.list);
                    console.log('admin session update _<')
                }).catch((err)=>console.log("session userList error"));
            }
        }
        http.get('/societyex/list').then((res)=>{
            self.set("societyList",res.data.data.list);
            console.log('society session update _<')
        }).catch(
            (err)=>console.log('session socList error')
        );

    }
}