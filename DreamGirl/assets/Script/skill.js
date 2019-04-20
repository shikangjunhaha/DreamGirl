// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


window.Global = {
    sk:null,
}

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
       this.temp=0;
       this.sum=0;
       this.sum2=0;
       this.sum3=0;
       this.sum4=0;
       this.sum5=0; 
       this.sum6=0;
       this.sum7=0;       
       this.skillArr=[]; 
       Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
        this.splice(index, 1);
        }
        };
    },

    button1(){
        this.temp=1;
        this.sum+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
           
        }else if(this.sum%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }

    },
    button2(){
        this.temp=2;
        this.sum2+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum2%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum2%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button3(){
        this.temp=3;
        this.sum3+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum3%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum3%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button4(){
        this.temp=4;
        this.sum4+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum4%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum4%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button5(){
        this.temp=5;
        this.sum5+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum5%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum5%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button6(){
        this.temp=6;
        this.sum6+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum6%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum6%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button7(){
        this.temp=7;
        this.sum7+=1
        var money = cc.find("skill/money").getComponent(cc.Label)
        var moneyString=money.string
        if(this.sum7%2==1){
            money.string=parseInt(moneyString)-100
            this.skillArr.push(this.temp) 
        }else if(this.sum7%2==0){
            money.string=parseInt(moneyString)+100
            this.skillArr.remove(this.temp)
        }
    },
    button8(){
        var skill=cc.find("skill")
        var money = cc.find("skill/money").getComponent(cc.Label)
        if(money.string<0){
            alert("你的钱好像不够啊")
        }else{
            skill.opacity=0;
            var talk=cc.find("talk/label")
            Global.sk=this.skillArr;
            console.log(this.skillArr)
        }
    },
      index(){
        var index = this.temp
        if (index > -1) { 
        this.splice(index, 1); 
        }
      },

    

    update (dt) {
    },
    
});

