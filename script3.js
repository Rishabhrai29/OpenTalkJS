import ollama from 'ollama';
import fs from 'fs';
import path from 'path';

function askTheollama(question) {
    return ollama.chat({
        model: 'llama2:2b',
        messages: [{ role: 'user', content: question }],
    })
    .then((response) => response.message.content)
    .catch((error) => {
        console.error('Error:', error);
        return null;
    });
}

async function BatchQuestions() {
    const questionsDir = './questions';
    const answersDir = './answers';

    if (!fs.existsSync(answersDir)) {
        fs.mkdirSync(answersDir);
    }

    const files = fs.readdirSync(questionsDir)
        .filter((file) => file.startsWith('q') && file.endsWith('.txt'))
        .sort();

    for (const file of files) {
        const number = file.match(/q(\d+)\.txt/)[1];
        const question = fs.readFileSync(path.join(questionsDir, file), 'utf8');

        console.log(`Processing question ${number}...`);
        const answer = await askTheollama(question);

        if (answer) {
            const answerPath = path.join(answersDir, `a${number}.txt`);
            fs.writeFileSync(answerPath, answer, 'utf8');
            console.log(`Answer saved to ${answerPath}`);
        } else {
            console.log(`Failed to get answer for question ${number}`);
        }
    }
}

BatchQuestions();
