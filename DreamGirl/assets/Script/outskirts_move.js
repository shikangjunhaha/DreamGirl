// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       target:cc.Node
    },
    start () {

    },

     update (dt) {
         
        if(this.target.y>=315){
            this.target.y=315;
        }else if(this.target.y<=155){
            this.target.y=165;
        }
        if(this.target.x<=229){
            this.target.x=229;
        }else if(this.target.x>=1099){
            this.target.x=1099
        }
       
    },
});
