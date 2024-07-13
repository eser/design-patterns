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

const main = (): void => {
    const leaf1 = new Leaf("1");
    const leaf2 = new Leaf("2");

    const composite = new Composite();
    composite.add(leaf1);
    composite.add(leaf2);

    console.log(leaf1.operation());
    console.log(leaf2.operation());
    console.log(composite.operation());
};

if (import.meta.main) {
    main();
}

export { type Component, Composite, Leaf };
