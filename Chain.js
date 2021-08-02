class Chain{
    constructor(bodyA,bodyB){
        var options={
           bodyA:bodyA,
           bodyB:bodyB,
           length:10,
           stiffness:0.1
        }
        this.Chain=Constraint.create(options)
        World.add(world,this.Chain)
    }
   // display(){
        
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x ,this.chain.bodyB.position.y)
    //}
}