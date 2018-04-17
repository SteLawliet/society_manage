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
    }
}