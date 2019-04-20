    var flag;
cc.Class({
    extends: cc.Component,
    properties: {
        _canvas : null,
        points : {
            default : [],
            type : cc.v2,
        },

    },
    
    onLoad(){
        console.log(Global.sk)
        cc.debug.setDisplayStats(false);
        this._canvas = cc.find('Canvas');
        this._canvas.on('mouseup',(e)=>{
            var location = e.getLocation();
            this.isContain = this.check(location);
            flag = this.isContain;
            console.log("flag")
            
        },this);
    },
    check(location){
        
        if(this.isContain==true){
            cc.director.loadScene("Room");
        }
        
        let node = this.node;
        let pointInNode = node.convertToNodeSpaceAR(location);
        if(pointInNode.x < -node.width/2 || pointInNode.x > node.width/2 || pointInNode.y > node.height/2 || pointInNode.y < -node.height/2){
            
            return false;
        }
        
        let i, j, c = false;
        
        let nvert = this.points.length;
        let testx = pointInNode.x;
        let testy = pointInNode.y;
        let vert = this.points;
        
        for(i = 0, j = nvert - 1; i < nvert; j = i++){
            if ( ( (vert[i].y > testy) != (vert[j].y > testy) ) && 
                ( testx < ( vert[j].x - vert[i].x ) * ( testy - vert[i].y ) / ( vert[j].y - vert[i].y ) + vert[i].x ) ) 
                c = !c; 
                
            } 
        
        return c; 
    }
    
    
    

});
