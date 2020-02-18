describe('declaring varibles', () => {
    describe('using let', () => {
        it('unitialized let', () => {
            let x: any;

            x = 'Pizza';
            expect(x).toBe('Pizza');

        });

        it('typed let', () => {
            let x: number;

            x = 12;
            expect(x).toBe(12);

        });

        it('init let', () => {
            let x = 12;

            expect(x).toBe(12);

            x = 42;

        });



        it('protects you from reassigning a varible', () => {
            const minAge = 21;

            // minAge = 13;

            const friends = ['Barry', 'Jen'];

            friends[0] = 'Tom';

            expect(friends).toEqual(['Tom', 'Jen']);

        });

        describe('advanced types', () => {
            it('has union types', () => {

                let x: number | string;

                x = 12;
                x = 'Puppy';

            });



            it('alias', () => {

                type thingswithletters = string;

                let name: thingswithletters;

                name = 'narry';


            });


            it('built in types', () => {

                const n1 = 3;
                const n2 = 3.14;
                const n3 = 0xFF; // hex base 16
                const n4 = 0o22; // base8
                const n5 = 0b1010; // base 2
                const myPay = 1_333_222;

                let x: number;

                x = n1;
                x = n3;
                x = n3;
            });
        });

        describe('strings', () => {
            it('strings', () => {

                const s1 = 'This is a string';
                // tslint:disable-next-line: quotemark
                const s2 = "Double Quote";

                const s3 = 'She said "Ok"';
                // tslint:disable-next-line: quotemark
                const s4 = "The name is Flanner O'Connor";

                const s5 = 'It is Four O\'Clock';

            });
        });

        describe('VAR', () => {
            it('VAR', () => {


                const age = 27;

                if (age >= 18) {

                    // tslint:disable-next-line: no-var-keyword
                    var message = 'Old Enough';
                }

                expect(message).toBe('Old Enough');
            });
        });

        describe('TEMPLATE strings', () => {
            it('TEMPLATE strings', () => {
                // These are back-tick delimited.

                const s1 = `Jeff`;
                const story = `Chapter 1.

                            It was a dark and stormy night.

                            The end.`;

                const age = 50;

                const s3 = 'The name is ' + s1 + ' and the age is ' + age + '.';
                const s4 = `The name is ${s1} and the age is ${age}.`;

                expect(s3).toEqual(s4);

            });

            it('TUPLES - WITHOUT', () => {

                function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                    const result = `${last}, ${first}`;
                    return {
                        fullName: result,
                        numberOfLetters: result.length
                    };
                }

                const formattingResponse = formatName('Han', 'Solo');

                expect(formattingResponse.fullName).toBe('Solo, Han');
                expect(formattingResponse.numberOfLetters).toBe(9);


            });

            it('TUPLES - WITh', () => {
                function formatName(first: string, last: string): [string, number] {
                    const result = `${last}, ${first}`;
                    return [result, result.length];
                }

                const formattingResponse = formatName('Han', 'Solo');
                expect(formattingResponse[0]).toBe('Solo, Han');
                expect(formattingResponse[1]).toBe(9);
            });

            it('ARRAY SPREAD OPERATOR', () => {
                const numbers = [1, 2, 3];
                const newnumbers = [0, ...numbers, 4];

                expect(newnumbers).toEqual([0, 1, 2, 3, 4]);

            });

            it('object spread operator', () => {
                const movie = { title: 'Star Wars', director: 'Lucas', yearReleased: 1978 };
                const movie2 = { ...movie, yearReleased: 1977 };

                expect(movie2).toEqual({ title: 'Star Wars', director: 'Lucas', yearReleased: 1977 });
            });
        });

        describe('object literala', () => {
            it('has them', () => {

                interface Person {
                    name: string;
                    department: string;
                    salary: number;
                    manager?: string;
                }

                const bob: Person = {
                    name: 'Bob Smith',
                    department: 'QA',
                    salary: 100_000,
                    manager: 'Mary'
                };

                const mary: Person = {
                    name: 'Mary Jones',
                    department: 'CEO',
                    salary: 80_000
                };
            });

            it('truthy and falsey', () => {

                expect('tacos').toBeTruthy();
                expect('').toBeFalsy();
                expect(0).toBeFalsy();
            });

            function printEmployeeInfo(p: Person) {
                let prelude = `Person ${p.name} works in ${p.department} and makes ${p.salary}`;
                if (p.manager) {
                    prelude += ` and they are managed by ${p.manager}`;
                } else {
                    prelude += ' and they have no manager';
                }
                console.log(prelude);
            }

            it('Duck Typing   ', () => {

                interface MessageHavingThing { message: string; }
                function logMessage(thingy: MessageHavingThing) {

                    console.log('Got: ' + thingy.message);
                }

                logMessage({ message: 'Call Your Mom' });

                // logMessage();

                const book = {
                    title: 'Clean your garage',
                    message: 'A clean garage is a sign of a healthy mind'
                };

                logMessage(book);

            });
        });
    });
});
