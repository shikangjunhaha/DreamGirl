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
     
   

    onLoad () {
        cc.debug.setDisplayStats(false);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter(){
        var Archer1 = cc.find("Archer1");

        
    },
    onCollisionStay(){
      
     },
     onCollisionExit(){
        
     },

     update (dt) {
         var skill=cc.find("skill")
        var Archer1 = cc.find("Archer1");
        var talkbox = cc.find("talk");
        var goOut = cc.find("goOut")
        if(this.target.y>=408){
           this.target.y=408;
        }else if(this.target.y<=88){
            this.target.y=88;
        }
        if(this.target.x>= 706){ // 与Master碰撞交谈;
            this.target.x= 706;
            skill.opacity=255;
        }else if (this.target.x<= 700){
            skill.opacity=0;
        }
        if(this.target.x<=86){
            goOut.opacity =255
            this.target.x=86;
        }else if(this.target.x>86){
            goOut.opacity = 0
        }
        
     },
});
