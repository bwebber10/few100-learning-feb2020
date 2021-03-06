describe('writing functions', () => {

    describe('how to create', () => {
        it('the syntax', () => {
            expect(add(2, 2)).toBe(4);

            // named function
            function add(a: number, b: number) {
                return a + b;
            }


            // anonymous functinon


            const multiply = function (a: number, b: number): number {
                return a * b;
            };

            const divide = (a: number, b: number) => a / b;


            expect(multiply(2, 2)).toBe(4);
            expect(divide(2, 2)).toBe(1);

        });


        // describe('parameters into functinos', () => {
        it('default values', () => {

            function add(a: number = 10, b: number = 5, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((state, next) => state + next, firstTwo);
            }

            expect(add()).toBe(15);
            expect(add(20)).toBe(25);
            expect(add(2, 2)).toBe(4);
            expect(add(undefined, 20)).toBe(30);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        });
    });

    describe('higher order functions', () => {
        it('functions that take a function', () => {

            type MathOperation = (a: number, b: number) => number;

            function messItUp(a: number, b: number, c: MathOperation) {
                a += a;
                b += b;
                return c(a, b);
            }

            expect(messItUp(2, 3, (a, b) => a + b)).toBe(10);
            expect(messItUp(5, 10, (x, y) => x * y)).toBe(200);

        });

        describe('higher order functions', () => {
            it('functions that take a function', () => {

                type MathOperation = (a: number, b: number) => number;

                function messItUp(a: number, b: number, c: MathOperation) {
                    a += a;
                    b += b;
                    return c(a, b);
                }

                expect(messItUp(2, 3, (a, b) => a + b)).toBe(10);
                expect(messItUp(5, 10, (x, y) => x * y)).toBe(200);

            });
        });

        describe('HOF that returns a function', () => {
            it('doing it old-skool', () => {

                function makeElement(tag: string, content: string): string {
                    return `<${tag}>${content}</${tag}>`;
                }

                expect(makeElement('h1', 'Hello')).toBe('<h1>Hello</h1>');
                expect(makeElement('h1', 'Bye')).toBe('<h1>Bye</h1>');
                expect(makeElement('p', 'Story')).toBe('<p>Story</p>');
            });

            it('doing it using a class (OOP Style)', () => {

                class TagMaker {

                    private tag: string;
                    constructor(tag: string) {
                        this.tag = tag;
                    }

                    make(content: string) {
                        return `<${this.tag}>${content}</${this.tag}>`;
                    }
                }

                const h1Maker = new TagMaker('h1');
                const pMaker = new TagMaker('p');

                expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
                expect(h1Maker.make('Bye')).toBe('<h1>Bye</h1>');
                expect(pMaker.make('Story')).toBe('<p>Story</p>');


            });

            it('doing it with a higher-order function', () => {

                function tagMaker(tag: string) {
                    return (content: string) => `<${tag}>${content}</${tag}>`;
                }

                const h1Maker = tagMaker('h1');
                const pMaker = tagMaker('p');

                expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
                expect(h1Maker('Bye')).toBe('<h1>Bye</h1>');
                expect(pMaker('Story')).toBe('<p>Story</p>');
            });
        });


    });
});
