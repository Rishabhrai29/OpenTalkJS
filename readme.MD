# 🌟 JS Based Personal LLM 🌟

## 🛠 Setup Instructions

### 1️⃣ Repository Cloning

1. Open your terminal or command prompt 🖥
2. Clone the repository using the following command 🔗
   bash
   git clone https://github.com/Rishabhrai29/OpenTalkJS.git
   
3. Now enter into the clone file by using command 📂
   bash
   cd OpenTalkJS
   
4. Now open the editor ✍
5. Write the script in the script.js file 📝
   bash
   import ollama from "ollama";

## script.js
   
```
async function runChat() {
try {
const response = await ollama.chat({
model: "qwen2:0.5b",
messages: [{ role: 'user', content: "Write product descriptions" }]
});

    console.log("Chatbot Response:", response.message.content);

} catch (error) {
console.error("Error occurred:", error.message);
}
}

runChat();
```

## main.js
```
import fs from 'fs/promises'; 
import ollama from "ollama";

async function processQuery() {
    try {
        const q = await fs.readFile("q.txt", "utf8");

        const response = await ollama.chat({
            model: "llama3.2:1b",
            messages: [{ role: "user", content: q }],
        });

        const a = response.message.content;

        await fs.writeFile("a.txt", a);

        console.log("Response written to a.txt successfully!");
    } catch (error) {
        console.error("Error processing the query:", error);
    }
}


processQuery();

```
### 2️⃣ Dependencies installation

1. Check the version for the node using the command 🛠
   bash
   node -v
   
2. Now install ollam model 📦
   bash
   npm install ollama
   
3. Check the version of the ollama 🔍
   bash
   ollama --version
   

### 3️⃣ Application execution

1. Run the application using the command 🚦
   bash
   node script.js
   
2. View the Output 🎉
   Your personal LLM will respond to your query about the capital of the UK!