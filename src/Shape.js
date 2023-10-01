class Shape {
    constructor(inputArray) {
        this.polysides = {
            'triangle':3,
            'square':4,
            'pentagon':5,
        }
        this.type = inputArray[0];
        this.measurement = inputArray[1];
        this.perimeter = null;
        this.area = null;
        this.output = null;
        
        this.calcPerimeter();
        this.calcArea();
        this.calcOutput();
    }

    calcPerimeter() {
        let perimeter = 0;
        if (this.type === 'circle') {
            perimeter = 2 * Math.PI * this.measurement;
            
        } else {
            perimeter = this.measurement * this.polysides[this.type]
        }
        this.perimeter = Math.round((perimeter + Number.EPSILON) * 100) / 100
    }

    calcArea() {
        let area = 0;
        if (this.type === 'circle') {
            area = Math.PI * this.measurement ** 2
        } else if (this.type === 'triangle') {
            area = (Math.sqrt(3)/4) * this.measurement ** 2
        } else if (this.type === 'square') {
            area = this.measurement ** 2
        } else if (this.type === 'pentagon') {
            area = .25 * (Math.sqrt(5*(5+2*Math.sqrt(5)))*this.measurement**2)
        }
        this.area = Math.round((area + Number.EPSILON) * 100) / 100
    }

    calcOutput() {
        let m;
        if (this.type !== 'circle') {
            m = 'side length'
        } else {
            m = 'radius'
        }
        const s = `A ${this.type} with ${m} ${this.measurement} u has a perimeter of ${this.perimeter} u and an area of ${this.area} u^2`
        this.output = s;
        
    }
}

export default Shape;