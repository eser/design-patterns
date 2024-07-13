interface Component {
    operation(): string;
}

class Leaf implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    operation(): string {
        return `Leaf ${this.name}`;
    }
}

class Composite implements Component {
    private children: Component[] = [];

    add(child: Component): void {
        this.children.push(child);
    }

    operation(): string {
        return `Composite [ ${
            this.children.map((child) => child.operation()).join(", ")
        } ]`;
    }
}

export { type Component, Composite, Leaf };
