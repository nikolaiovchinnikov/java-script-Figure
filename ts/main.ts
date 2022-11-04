type num = number
type str = string
type bool = boolean

abstract class Figure {
    constructor(){
    }
    public abstract calculateArea ():num
}
class Circle extends Figure{
    pi:num = Math.PI
    constructor(){
        super()
    }
    public override calculateArea (...args:Array<str | num>):num{
        if(args[0] ==="r"){
            return this.pi * (<num>args[1] * <num>args[1])
        }
        else if (args[0] ==="d"){
            return ((<num>args[1] * <num>args[1]) / 4) * this.pi;
        }
        else if (args[0] ==="l"){
            return (<num>args[1] * <num>args[1]) / (4 * this.pi);
        }
        return 1
    }
}
class Square extends Figure{
    constructor(){
        super ()
    }
    public override calculateArea (...args:Array<str | num>):num{
        if(typeof(args[0]) !== "string"){
            return <num>args[0] * (<num>args[1] || <num>args [0])
        }
        else if(args[0] === "d"){
            return (<num>args[1] * <num>args[1]) / 2
        }return 1
        
    }
}






const square: Square = new Square ()
const circle: Circle = new Circle ()
console.log( circle.calculateArea("l",5))
console.log( square.calculateArea("d",4))



