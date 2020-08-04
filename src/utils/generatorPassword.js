import generator from 'generate-password';

export const passwordGen = ()=>{
    return generator.generate({
        length: 6,
        numbers: true
    });
}