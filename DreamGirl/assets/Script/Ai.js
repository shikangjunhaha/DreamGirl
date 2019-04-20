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
        target:cc.Node,
        actorPrefab:{
            default:null,
            type:cc.Prefab,
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

        this.schedule(function() {
            var x=this.node.x;
            var y=this.node.y;
            var racconplay=this.node.getComponent(cc.Animation);
            if(x>=this.target.x+100){   //左
                racconplay.play("Raccoon_Move_Animation")   //播放动画不了是因为update的原因。
                                                            //和Archer1键盘长按的话是一样的结果
                 this.node.x=this.node.x -10
                 if(y>=this.target.y+10){  //左
                    console.log("s")
                    this.node.y=this.node.y-10
                    racconplay.play("Raccoon_Move_Animation")
                }else if(y<this.target.y-10){  //右
                    console.log("s1")
                    this.node.y=this.node.y+10
                    racconplay.play("Raccoon_Move_Animation") 
                }
            }else if(x<=this.target.x-100){  //右
                racconplay.play("Raccoon_MoveLeft_Animation") 
               this.node.x=this.node.x+10
               if(y>=this.target.y+10){  //左
                console.log("s")
                this.node.y=this.node.y-10
                racconplay.play("Raccoon_MoveLeft_Animation")
            }else if(y<this.target.y-10){  //右
                console.log("s1")
                this.node.y=this.node.y+10
                racconplay.play("Raccoon_MoveLeft_Animation") 
            }
               
            }else{
                racconplay.play("Raccoon_Acttack_Animation") 
                 console.log("我到了")   //这个时候开始攻击，
            }

            

        }, 0.32);


     },

    start () {

    },

     update (dt) {   



    },

});
