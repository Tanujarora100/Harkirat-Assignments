import  { useEffect, useState, useMemo } from "react";
// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words: string[] = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES: number = 1000;
const ALL_WORDS: string[] = [];

for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(words.length * Math.random())];
        sentence += " ";
    }
    ALL_WORDS.push(sentence.trim());
}

export function Assignment2() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sentences, setSentences] = useState<string[]>(ALL_WORDS);
    const [filter, setFilter] = useState<string>("");

    const filteredSentences = useMemo(() => {
        return sentences.filter(x => x.includes(filter));
    }, [sentences, filter]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setFilter(e.target.value);
                }}
            />
            {filteredSentences.map((word, index) => (
                <div key={index}>{word}</div>
            ))}
        </div>
    );
}
