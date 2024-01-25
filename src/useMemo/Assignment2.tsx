import React, {useState, useMemo} from 'react';

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS: string[] = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(words.length * Math.random())];
        sentence += " ";
    }
    ALL_WORDS.push(sentence);
}

const Assignment2: React.FC = () => {
    const [sentences, setSentences] = useState<string[]>(ALL_WORDS);
    const [filter, setFilter] = useState<string>("");

    const filteredSentences: string[] = useMemo(() => {
        return sentences.filter((item) => item.includes(filter));
    }, [sentences, filter]);

    const filterdWords: number = useMemo(() => {
        return filteredSentences.length;
    }, [sentences, filter])

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
            <h3>{filterdWords}</h3>
        </div>
    );
};

export default Assignment2;
