class UnorderGraph{
    constructor(countNode){
        this._countNode = countNode;
        this._peaks = [];
        this.createNodes();
    }

    createNodes(){
        for (let i = 0; i < this._countNode; i++) {
            this._peaks[i] = []
        }
    }

    addEdge(a, b) {
        this._peaks[a].push(b);
        this._peaks[b].push(a);
    }
}


const unorderGraph = new UnorderGraph(10);

console.log(unorderGraph)

unorderGraph.addEdge(1, 3)
unorderGraph.addEdge(3, 5)

console.log(unorderGraph)