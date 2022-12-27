class Stack<T> {
    container: T[] = [];

    size: number;

    push(item: T): void {

        this.container.push(item);

        throw new Error("stack is full");
    }

    pop(): T {

        return this.container.pop();


    }
    GetSize(): number {
        return this.container.length;
    }
    isFull (): Boolean {
        return this.GetSize()  === this.size;


    }
    isEmpty(): Boolean {
        return this.GetSize() === 0;


    }
}