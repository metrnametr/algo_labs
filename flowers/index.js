class Flower{
    constructor(name, country, height, cost, color){
        this._name = name;
        this._country = country;
        this._height = height;
        this._cost = cost;
        this._color = color;
    }

    get name(){
        return this._name;
    }
    get country(){
        return this._country;
    }
    get height(){
        return this._height;
    }
    get cost(){
        return this._cost;
    }
    get color(){
        return this._color;
    }
}

module.exports = Flower