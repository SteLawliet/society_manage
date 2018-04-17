import storage from './SessionStorage'
export default {
    findSociety(val,boo){
        let societyList = storage.get("societyList");
        if(boo){
            return societyList.filter(
                (value, index) => {
                return value.sName==val;
            })[0]
        }
        else if (! isNaN(val)){
            return societyList.filter(
                (value, index) => {
                    return value.sId == val;}

            );
        }else {
            return societyList.filter(
                (value, index) => {
                    return value.sName.search(val)>-1;}
            )
        }
    }


}