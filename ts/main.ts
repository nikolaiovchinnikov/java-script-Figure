type num = number
type str = string
type bool = boolean

abstract class Figure {
    public window:str
    public choceFigure:str
    constructor(choceFigure:str,window:str){
        this.choceFigure = choceFigure
        this.window = window
    }
    public abstract calculateArea (args:Array<str | num>):num
    public check(userInput:str | null){
        if(userInput === this.choceFigure){
            let userArgs:null | str = prompt (this.window)
            if(userArgs !== null){
                const listArgsStr = userArgs.split(" ")
                console.log( this.calculateArea(listArgsStr))
            }
        }return
    }
}

class Circle extends Figure{
    pi:num = Math.PI
    public override calculateArea (args:str[]):num{
        if(args[0] ==="r"){
            return this.pi * (parseInt(args[1]) * parseInt(args[1]))
        }
        else if (args[0] ==="d"){
            return ((parseInt(args[1]) * parseInt(args[1])) / 4) * this.pi;
        }
        else if (args[0] ==="l"){
            return (parseInt(args[1]) * parseInt(args[1])) / (4 * this.pi);
        }
        return NaN
    }
}

class Square extends Figure{
    public override calculateArea (args:str[]):num{
        if(!isNaN(parseInt(args[0]))){
            return parseInt(args[0]) * (parseInt(args[1]) || parseInt(args [0]))
        }
        else if(args[0] === "d"){
            return (parseInt(args[1]) * parseInt(args[1])) / 2
        }return NaN
        
    }
}

class Triangle extends Figure{
    public override calculateArea (args:str[]):num{
        if(args.length === 2){
            return 0.5 * ((parseInt(args[0])) * parseInt(args[1]))
        }
        else if(args.length === 3){
            // формула Герона
            let per:num = (parseInt(args[0]) + parseInt(args[1]) + parseInt(args[2])) / 2;
            let a:num = (per - parseInt(args[0]))
            let b:num = (per - parseInt(args[1]))
            let c:num = (per - parseInt(args[2]))
            return Math.sqrt(per * a * b * c)
        }
        return NaN
    }
}

const windowCircle:str = "r + num = по радиусу\nd + num = по диаметру\nl = num = по окружности"
const circle: Circle = new Circle ("3", windowCircle)

const windowTriangle:str = "По формуле Герона = 3 числа через пробел\nПо основанию = 2 числа через пробел"
const triangle: Triangle = new Triangle ("1", windowTriangle)

const windowSquare:str = "2 числа или 1 число\nпрефикс 'd' и диагональ"
const square: Square = new Square ("2", windowSquare)


let cicle:boolean = true
while(cicle){
    let userChoce:str | null = prompt("1 = треугольник\n2 = квадрат\n3 = круг")
    triangle.check(userChoce)
    square.check(userChoce)
    circle.check(userChoce)
    if (userChoce === null){
        cicle = false
    }
}




