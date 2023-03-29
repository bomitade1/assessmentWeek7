

// two different classes are required
class IvanParent {
    //Two things were left for Ivan(Money and the Time Machine)
    constructor(){
        this.X = 0;
    }
    
    money(X){
        this.X = X;
    }
    TimeMachine(year, age){
        //The timeMachine will be used to do the caluculation and returns the remaining balance.
        let balance = this.X
        let ag = age;
        if(typeof year =='number'){
            for(let yr = 1800;yr<=year;yr++){
                if(yr%2==0){
                    balance -= 12000;
                }
                else{
                    balance -=(12000+(ag*50));
                }
                ag +=1;
            }

            return balance;
        }

    }

}
class Ivan extends IvanParent{
    
    constructor(X,yearToLive){
        super()
        super.money(X);
        this.yearToLive = yearToLive;
    }

    checkBalance(){
        let result = super.TimeMachine(this.yearToLive,18) // the number 18 is the present year of Ivan acording to the question.
        return result;
    }

}

//First we instanciate the Ivan class.
let IvanClass = new Ivan(50000,1802);



//checking the performance of the Timemachine.
console.log('Yes! He will live a carefree life and will have {N} ' + ' ' + (IvanClass.checkBalance())+ ' '+ 'dollars left.');

