export class User{
 constructor(name,surName,pairId){
     this.firstName = name;
     this.lastName = surName;
     this.pairId=pairId;
 }
    toString(){
        return (this.firstName + " " + this.lastName)
    }

}