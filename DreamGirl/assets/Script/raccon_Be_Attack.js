// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var magicK=false;
var liCD=true;
cc.Class({
    extends: cc.Component,

    properties: {
          hp:1250,
          target:cc.Node,
    },
    onLoad(){
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        cc.debug.setDisplayStats(false);
        this.atk = 25;  //每次被攻击减少2HP
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   

    },
    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    onKeyDown(event){

        switch(event.keyCode){
            case cc.macro.KEY.k:
                magicK=false
                if(liCD===true){
                var lightNing = cc.find("Archer1/zhuangtai/lightning") 
                var liSprite=lightNing.getComponent(cc.Sprite);
                liSprite.fillRange=0;
                var light = cc.find("Raccoon/Light")
                light.opacity=255
                console.log(light.getComponent(cc.Animation))
                var racconplay=light.getComponent(cc.Animation);
                
                racconplay.play("Light")
                liCD=false;
                if(liCD===false){
                    console.log("技能冷却")
                    var lightNing = cc.find("Archer1/zhuangtai/lightning") 
                    //获取闪电，等会做技能CD
                    this.schedule(function() {
                        liSprite.fillRange+=0.01
                        if(liSprite.fillRange==1){
                            liCD=true;
                        }
                    }, 0.1);
                 }
            
            }
            
        }
    },

    onCollisionEnter(){
        
        if(magicK==true){
            this.hp -=this.atk*1.2
        }else{
            this.hp -= this.atk;
        }
        if(this.hp<=0){
            var Raccoon = cc.find("Raccoon")
            var racconplay=this.node.getComponent(cc.Animation);
            racconplay.play("Raccoon_death_Animation")
            this.schedule(function() {
                // 这里的 this 指向 component
                Raccoon.opacity -=127.5
            }, 1, 1, 0.1);
            this.schedule(function() {
                // 这里的 this 指向 component
                Raccoon.active=false;
            }, 1, 1, 1);
            
        }else{
            var racconplay=this.node.getComponent(cc.Animation);
            racconplay.play("Raccoon_BeAttacked_Animation")
        }

    },

    start () {

    },

     update (dt) {
/*         if(liCD===false){
            console.log("技能冷却")
            var lightNing = cc.find("Archer1/zhuangtai/lightning") 
            //获取闪电，等会做技能CD
            var liSprite=lightNing.getComponent(cc.Sprite);
            this.schedule(function() {
                liSprite.fillRange+=0.004
                if(liSprite.fillRange==1){
                    liCD=true;
                }
            }, 1);
         } */
        
 
     },
});
